import React, { Fragment, useState } from "react";
import * as yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BiHomeAlt2 } from "react-icons/bi";
import { LoginApi } from "../../../core/services/api/Auth/Login.api";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const validation = yup.object().shape({
    gmail: yup.string().required("شماره تلفن خود را وارد کنید ⚠️"),
    password: yup.string().required("رمز عبور را وارد کنید ⚠️"),
  });
  const navigate = useNavigate("");
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const { gmail, password } = values;

      const rememberMe = document.getElementById("save").checked;

      const { user, accessToken } = await LoginApi({
        phoneOrGmail: gmail,
        password,
        rememberMe,
      });

      console.log("Login successful:", user, accessToken);
      localStorage.setItem("userGmail", gmail);
      navigate("/auth/verifyNumber");
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("شماره یا رمز عبور اشتباه است ⚠️");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Fragment>
      <Formik
        dir="rtl"
        initialValues={{ gmail: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <h3 className="w-[134px] h-[23px] absolute top-[260px] right-0 text-[15px] text-right font-medium dark:text-white">
            شماره همراه یا ایمیل
          </h3>
          <Field
            dir="rtl"
            className="border border-[#DCDCDC] dark:bg-slate-200 w-full sm:w-4/5 text-sm absolute top-[292px] dark:text-black right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="شماره همراه یا ایمیل خود را وارد کنید"
            name="gmail"
          />
          <ErrorMessage
            name="gmail"
            className="absolute top-[350px] right-[10px] text-red-600 w-52 dark:text-red-400"
            component={"span"}
          />
          <h3 className="w-[134px] h-[23px] absolute top-[380px] right-0 text-[15px] text-right font-medium dark:text-white">
            رمزعبور
          </h3>

          <div
            dir="rtl"
            className="absolute top-[410px] right-0 w-full sm:w-4/5"
          >
            <Field
              className="border border-[#DCDCDC] dark:bg-slate-200 text-sm w-full dark:text-black h-12 rounded-3xl text-right pr-2 outline-blue-600"
              placeholder="رمزعبور خود را وارد کنید"
              type={showPassword ? "text" : "password"}
              name="password"
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
            className="absolute top-[470px] right-[-40px] text-red-600 dark:text-red-400 w-48"
            component={"span"}
          />
          <button
            type="submit"
            className="w-full sm:w-4/5 h-[48px] shadow-md absolute top-[580px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
          >
            ورود به حساب
          </button>

          <div className="absolute top-[520px] right-0 w-full sm:w-4/5 h-10">
            <Link
              to={"/Auth/ForgetPassword"}
              className="h-[36px] absolute rounded-[40px] bg-[#F6F6F6] py-2 px-4 shadow-md"
            >
              <h2 className=" h-[20px] text-[#3772FF] text-[13px] font-semibold text-center ">
                رمزعبور را فراموش کردی؟
              </h2>
            </Link>
            <div className="float-right mt-2 flex gap-1">
              <label htmlFor="save" className="">
                مرا به خاطر بسپار
              </label>
              <input
                type="checkbox"
                id="save"
                className=" appearance-none w-6 h-6 border-2 border-[#DCDCDC] bg-[#F1F1F1] checked:bg-blue-500  rounded-lg"
              />
            </div>
          </div>
          <div className="absolute top-[660px] right-0 w-full sm:w-4/5 h-10 flex">
            {" "}
            <Link
              to={"/"}
              className="w-[140px] mx-auto h-10 border border-[#dcdcdc] text-right text-[#3772FF] sm:right-[35%] rounded-[34px] py-2 px-4 "
            >
              صفحه اصلی
              <BiHomeAlt2 size={17} className="absolute bottom-[10px]" />
            </Link>
          </div>
        </Form>
      </Formik>
    </Fragment>
  );
};

export { LoginForm };
