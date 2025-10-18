import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";

import { BiHomeAlt2 } from "react-icons/bi";
import { LoginForm } from "../../../components/Auth/login/LoginForm";

const Login = () => {
  return (
    <div className=" relative">
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
            واردکردن شماره همراه
          </div>
        </div>
      </div>
      <h2 className="text-[28px] font-semibold absolute right-0 top-[115px]">
        !خوش برگشتی
      </h2>
      <h5 className="text-base text-[#707070] dark:text-slate-300 absolute right-0 top-[167px] w-4/6 text-right">
        لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب کاربری را
        وارد کنید
      </h5>

      {/*  */}
      <LoginForm />
    </div>
  );
};

export { Login };
