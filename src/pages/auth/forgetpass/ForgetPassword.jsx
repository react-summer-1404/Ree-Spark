import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { HiOutlineChevronLeft } from "react-icons/hi";
import toast from "react-hot-toast";
import ForgetPasswordApi from "../../../core/services/api/Auth/forgetPassword/ForgetPassword.api";

const ForgetPassword = () => {
  const validation = yup.object().shape({
    Email: yup
      .string()
      .email("ایمیل نادرست است ⚠️")
      .required("لطفا ایمیل خود را وارد کنید ⚠️"),
  });
  const navigate = useNavigate();
const onSubmit = async (values) => {
  try {
    const res = await ForgetPasswordApi(values.Email);
    if (res.success) {
      toast.success("لینک بازیابی رمز عبور ارسال شد ");
      navigate("/auth/NewPassword");
    } else {
      toast.error(res.message || "ارسال لینک با خطا مواجه شد ");
    }
  } catch (error) {
    toast.error("خطا در ارتباط با سرور ");
    throw error;
  }
};
  return (
    <div className="relative">
      <div className="flex justify-center gap-2 sm:gap-0 sm:justify-evenly flex-col-reverse sm:flex-row">
        <div className=" w-full sm:w-[245px] h-10 ">
          <div className="h-2 bg-[#DCDCDC] rounded-lg"></div>
          <div className="text-center sm:text-right text-[15px] mt-1 text-[#707070]">
            تایید کد ارسال شده دو مرحله‌ای
          </div>
        </div>
        {/*  */}
        <div className=" w-full sm:w-[245px] h-10">
          <div className="h-2 bg-[#3772FF] rounded-lg"></div>
          <div className="text-center sm:text-right text-base mt-1">
            واردکردن ایمیل
          </div>
        </div>
      </div>
      <h2 className="text-[28px] font-semibold absolute right-0 top-[115px]">
        !فراموشی رمزعبور
      </h2>
      <h5 className="text-base text-[#707070] dark:text-slate-300 absolute right-0 top-[167px] w-4/6 text-right">
        اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه
        تغییر رمزعبور برای شما ارسال شود
      </h5>

      {/*  */}
      <Formik
        initialValues={{ Email: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <h3 className="w-[134px] h-[23px] absolute top-[260px] right-0 text-[15px] text-right font-medium dark:text-white">
            ایمیل
          </h3>
          <Field
            className="border border-[#DCDCDC] dark:bg-slate-200 w-full sm:w-4/5 text-sm absolute top-[292px] right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="ایمیل خود را وارد کنید"
            name="Email"
          />
          <ErrorMessage
            name="Email"
            className="absolute top-[350px] right-[10px] text-red-600 w-52"
            component={"span"}
          />
          <button
            type="submit"
            className="w-full sm:w-4/5 h-[48px] absolute top-[380px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
          >
            ارسال لینک
          </button>
          <div className="absolute top-[480px] right-0 w-full sm:w-4/5 h-10">
            {" "}
            <Link
              to={"/Auth/Login"}
              className="w-[110px] mx-auto h-10 border border-[#dcdcdc] text-right text-[#3772FF] absolute right-[40%] sm:right-[35%] rounded-[34px] py-2 px-4 "
            >
              بازگشت
              <HiOutlineChevronLeft
                size={17}
                className="absolute bottom-[10px]"
              />
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { ForgetPassword };
