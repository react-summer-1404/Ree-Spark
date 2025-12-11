import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { HiOutlineChevronLeft } from "react-icons/hi";

import toast from "react-hot-toast";
import { loginTwoStep } from "../../../core/services/api/Auth/TwoStepLogin.api";

const VerifyForm = () => {
  const navigate = useNavigate();

  const validation = yup.object().shape({
    code: yup.number().required(""),
  });

  const phoneOrGmail = localStorage.getItem("gmail");

  const onSubmit = async (values) => {
    try {
      const result = await loginTwoStep(values.code, phoneOrGmail);

      if (result && result.token) {
        toast.success("ورود با موفقیت انجام شد");
        navigate("/");
      } else {
        toast.error("کد اشتباه است یا منقضی شده");
      }
    } catch (err) {
      toast.error("مشکلی پیش آمده");
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Formik
        initialValues={{ code: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <h3 className="w-[134px] h-[23px] absolute top-[260px] right-0 text-[15px] text-right font-medium dark:text-white">
            کد دو مرحله‌ای
          </h3>

          <Field
            className="border border-[#DCDCDC] dark:bg-slate-200 w-full sm:w-4/5 text-sm absolute top-[292px] right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="کد دو مرحله‌ای خود را وارد کنید"
            name="code"
          />

          <ErrorMessage
            name="code"
            className="absolute top-[350px] right-[10px] text-red-600 w-52"
            component={"span"}
          />

          <button
            type="submit"
            className="w-full sm:w-4/5 h-[48px] absolute top-[380px] right-0 rounded-[40px] bg-[#3772FF] text-center leading-10 text-[16px] font-medium text-[#FCFCFC]"
          >
            ورود به حساب
          </button>

          <div className="absolute top-[480px] right-0 w-full sm:w-4/5 h-10">
            <Link
              to={"/Auth/Login"}
              className="w-[110px] mx-auto h-10 border border-[#dcdcdc] text-right text-[#3772FF] absolute right-[40%] sm:right-[35%] rounded-[34px] py-2 px-4"
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
    </Fragment>
  );
};

export { VerifyForm };
