/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../../common/Darkmode/DarkMode";
import { FiBell } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import Peppe from "../../../assets/image/LayoutImage/Peppe.svg";
import { getItem } from "../../../core/services/storage/storage.api";
import GetMyAccounts from "../../../core/services/api/User/myAccounts.api";
import { motion, AnimatePresence } from "framer-motion";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import * as yup from "yup";
import AddAccountApi from "../../../core/services/api/User/AddAccount.api";

const HeaderPanel = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const gmail = getItem("gmail");
  const fName = getItem("fName");
  const lName = getItem("lName");
  const validation = yup.object().shape({
    NewAccGmail: yup.string().required("ایمیل خود را وارد کنید⚠️"),
    NewAccPass: yup.string().required("رمز عبور را وارد کنید ⚠️"),
  });
  const toggleDropdown = async () => {
    const willShow = !showDropdown;
    setShowDropdown(willShow);

    if (willShow && accounts.length === 0) {
      setLoading(true);
      try {
        const data = await GetMyAccounts();
        console.log("API returned accounts:", data);
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
      setLoading(false);
    }
  };
  const onSubmit = async (values, actions) => {
    try {
      const payload = {
        phoneOrGmail: values.NewAccGmail,
        password: values.NewAccPass,
        rememberMe: true,
      };

      const res = await AddAccountApi(payload);

      if (res?.data?.success === true) {
        toast.success(res.data.message || "اکانت با موفقیت اضافه شد");
        actions.resetForm();
        setShowAddModal(false);
        return;
      }

      toast.error(res?.data?.message || "خطا در افزودن اکانت");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data?.message || "خطا در پردازش سمت سرور");
        return;
      }

      if (error.request) {
        toast.error("ارتباط با سرور برقرار نشد");
        return;
      }

      toast.error("خطای غیرمنتظره رخ داد");
    }
  };

  return (
    <div className="flex justify-between relative">
      {/* بخش سمت چپ */}
      <div className="flex gap-3 mt-4">
        <button className="w-[48px] h-[48px] border border-black dark:border-white rounded-full flex justify-center items-center">
          <FiBell size={30} className="dark:text-white" />
        </button>
        <div>
          <DarkMode />
        </div>
      </div>

      {/* منو وسط */}
      <div className="flex gap-6 mt-7 justify-center text-black flex-row-reverse">
        <Link
          to={"/"}
          className="dark:text-[#FCFCFC] text-black hover:font-semibold"
        >
          صفحه اصلی
        </Link>
        <div className="dark:text-[#FCFCFC] text-black hover:font-semibold">
          گزارش
        </div>
        <div className="dark:text-[#FCFCFC] text-black hover:font-semibold">
          ارتباط باما
        </div>
      </div>

      {/* بخش پروفایل */}
      <div className="h-12 flex gap-2 mt-5 mr-6 relative">
        <div className="flex flex-col dark:text-white text-black">
          <h4 className="h-[23px] text-[15px] font-semibold">
            {fName} {lName}
          </h4>
          <h4 className="h-[23px] text-[13px] font-medium text-right">
            دانشجو
          </h4>
        </div>
        <div className="size-12 relative">
          <img
            src={Peppe}
            className="mt-1 cursor-pointer"
            onClick={toggleDropdown}
          />
          {/* منوی دراپ‌دان */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-50">
              {loading ? (
                <div className="px-4 py-2 text-gray-500">
                  در حال بارگذاری...
                </div>
              ) : accounts.length > 0 ? (
                <>
                  {accounts.map((acc) => (
                    <div
                      dir="rtl"
                      key={acc.id}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white cursor-pointer"
                    >
                      {acc.fName} {acc.lName}
                    </div>
                  ))}
                  <div className="border-t border-gray-200 dark:border-gray-600 mt-1">
                    <button
                      dir="rtl"
                      className="w-full px-4 py-2 text-base text-blue-600 dark:text-blue-400 flex justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b"
                      onClick={() => setShowAddModal(true)}
                    >
                      افزودن اکانت
                      <FiPlusCircle size={20} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="px-4 py-2 text-gray-500">
                    اکانتی موجود نیست
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 mt-1">
                    <button
                      className="w-full px-4 py-2 text-sm flex gap-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b"
                      onClick={() => setShowAddModal(true)}
                    >
                      افزودن اکانت
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          <AnimatePresence>
            {showAddModal && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  dir="rtl"
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <h2 className="text-lg font-semibold mb-4 dark:text-white">
                    افزودن اکانت
                  </h2>

                  <Formik
                    initialValues={{ NewAccGmail: "", NewAccPass: "" }}
                    onSubmit={onSubmit}
                    validationSchema={validation}
                  >
                    <Form>
                      <Field
                        name="NewAccGmail"
                        placeholder="ایمیل یا شماره موبایل"
                        className="w-full px-3 py-2 border rounded mb-3 dark:bg-gray-700 dark:text-white outline-blue-500"
                      />

                      <Field
                        name="NewAccPass"
                        placeholder="رمز عبور"
                        className="w-full px-3 py-2 border rounded mb-3 dark:bg-gray-700 dark:text-white outline-blue-500"
                      />

                      <div className="flex justify-end gap-2">
                        <button
                          className="px-4 py-2 bg-gray-300 dark:bg-red-600 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 dark:text-white"
                          onClick={() => setShowAddModal(false)}
                          type="button"
                        >
                          لغو
                        </button>

                        <button
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300"
                          type="submit"
                        >
                          افزودن
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { HeaderPanel };
