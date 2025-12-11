import React, { useState } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { BiHomeAlt2 } from "react-icons/bi";
import RegisterStepOneApi from "../../../core/services/api/Auth/register/RegisterStepTwo.api";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const PersonalInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const validation = yup.object().shape({
    phone: yup.number().required("شماره همراه خود را وارد کنید ⚠️"),
    password: yup.string().required("رمز عبور خود را وارد کنید⚠️"),
  });
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const res = await RegisterStepOneApi(values);
      console.log("register response", res);

      toast.success("ثبت‌نام با موفقیت انجام شد ");
      navigate("/");
    } catch (error) {
      toast.error("خطا در ثبت‌نام ");
      console.error(error);
    }
  };
  return (
    <div className="relative">
      <div className="flex justify-center gap-2 sm:gap-0 sm:justify-evenly flex-col-reverse sm:flex-row">
        <div className=" w-full sm:w-[160px] h-10 ">
          <div className="h-2 bg-[#3772FF] rounded-lg"></div>
          <div className="text-center sm:text-right text-[15px] mt-1">
            واردکردن اطلاعات شخصی
          </div>
        </div>
        {/*  */}
        <div className=" w-full sm:w-[160px] h-10 opacity-[50%]">
          {" "}
          <div className="h-2 bg-[#3772FF] rounded-lg"></div>
          <div className="text-center sm:text-right text-base mt-1">
            تایید کد ارسال شده
          </div>
        </div>
        {/*  */}
        <div className=" w-full sm:w-[160px] h-10 opacity-[50%]">
          <div className="h-2 bg-[#3772FF] rounded-lg"></div>
          <div className="text-center sm:text-right text-base mt-1">
            واردکردن ایمیل
          </div>
        </div>
      </div>
      <h2 className="text-[28px] font-semibold absolute right-0 top-[150px] sm:top-[115px] ">
        وارد کردن اطلاعات شخصی
      </h2>
      <h5 className="text-base text-[#707070] dark:text-slate-300 absolute right-0 top-[200px] sm:top-[167px] w-4/6 text-right">
        لطفا اطلاعات اولیه خواسته شده را وارد کنید
      </h5>
      {/*  */}
      <Formik
        initialValues={{ phone: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <h3 className="w-[134px] h-[23px] absolute top-[300px] sm:top-[260px] right-0 text-[15px] text-right font-medium dark:text-white">
            شماره همراه
          </h3>
          <Field
            className="border border-[#DCDCDC] dark:bg-slate-200 dark:text-black w-full sm:w-4/5 text-sm absolute top-[330px] sm:top-[292px] right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="شماره خود را وارد کنید"
            name="phone"
          />
          <ErrorMessage
            name="phone"
            className="absolute top-[390px] sm:top-[350px] right-[10px] text-red-600 dark:text-red-400 w-52"
            component={"span"}
          />
          {/*  */}
          <h3 className="w-[134px] h-[23px] absolute top-[440px] sm:top-[390px] right-0 text-[15px] text-right font-medium dark:text-white">
            رمز عبور
          </h3>
          <div dir="rtl" className="absolute top-[420px] right-0 w-full sm:w-4/5">
            <Field
              className="border border-[#DCDCDC] dark:bg-slate-200 text-sm w-full dark:text-black h-12 rounded-3xl text-right pr-2 outline-blue-600"
              placeholder="رمز عبور خود را وارد کنید"
              name="password"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-[14px] text-xs text-[#707070]"
            >
              {showPassword ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <IoEyeOutline size={20} />
              )}
            </button>
          </div>
          <ErrorMessage
            name="password"
            className="absolute top-[530px] sm:top-[485px] text-right right-[10px] text-red-600 dark:text-red-400 w-52"
            component={"span"}
          />
          <button
            onClick={navigate}
            type="submit"

            className="w-full sm:w-4/5 h-[48px] absolute top-[630px] sm:top-[520px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
          >
            تایید
          </button>
          <div className="absolute top-[610px] right-0 w-full sm:w-4/5 h-10 flex">
            {" "}
            <Link
              to={"/"}
              className="w-[140px] mx-auto h-10 border border-[#dcdcdc] text-right dark:text-blue-400 dark:hover:border-blue-400 text-[#3772FF] sm:right-[35%] rounded-[34px] py-2 px-4 "
            >
    بازگشت
              <BiHomeAlt2 size={17} className="absolute bottom-[10px]" />
            </Link>
          </div>

        </Form>
      </Formik>
    </div>
  );
};

export { PersonalInfo };
