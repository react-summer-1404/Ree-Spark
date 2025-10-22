import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiHomeAlt2 } from "react-icons/bi";

const NewPassword = () => {
  const validation = yup.object().shape({
    NewPass: yup.string().required("رمز جدید خود را وارد کنید ⚠️"),
  });
  const navigate = useNavigate();
  const onSubmit = (event) => {
    console.log("form submit=", event);
    navigate("/");
  };
  return (
    <div className="sm:mt-2 m-auto flex-col sm:flex-row flex sm:justify-center sm:gap-6 relative">
      <div className="w-2/4 h-2 rounded-lg bg-blue-600">
        <h6 className="text-base absolute top-3 left-[35px] w-[205px] text-right">
          تایید کد ارسال شده دو مرحله‌ای
        </h6>
      </div>
      <div className="w-2/4 h-2 rounded-lg bg-blue-600 relative opacity-[50%]">
        <h6 className="text-base absolute top-3 right-[0px] w-[140px] text-right">
          واردکردن ایمیل
        </h6>
      </div>
      <h2 className="text-[28px] font-semibold absolute right-0 top-[115px]">
        !رمزعبور جدید
      </h2>
      <h5 className="text-base text-[#707070] dark:text-slate-300 absolute right-0 top-[167px] w-4/6 text-right">
        رمزعبور جدید خود را وارد کنید
      </h5>

      {/*  */}
      <Formik
        initialValues={{ NewPass: "", pass: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <h3 className="w-[134px] h-[23px] absolute top-[260px] right-0 text-[15px] text-right font-medium dark:text-white">
            رمزعبور جدید
          </h3>
          <Field
            className="border border-[#DCDCDC] dark:bg-slate-200 w-full sm:w-4/5 text-sm absolute top-[292px] dark:text-black right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="رمزعبور خود را وارد کنید"
            name="NewPass"
          />
          <ErrorMessage
            name="NewPass"
            className="absolute top-[350px] right-[10px] text-red-600 w-52 dark:text-red-400"
            component={"span"}
          />
          <h3 className="w-[134px] h-[23px] absolute top-[380px] right-0 text-[15px] text-right font-medium dark:text-white">
            تکرار رمزعبور جدید
          </h3>
          <Field
            className="border border-[#DCDCDC] dark:bg-slate-200 dark:text-black  text-sm w-full  sm:w-4/5 absolute top-[410px] right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="تکرار رمزعبور خود را وارد کنید"
            type="password"
            name="password"
          />
          <ErrorMessage
            name="password"
            className="absolute top-[470px] right-[-40px] text-red-600 dark:text-red-400 w-48"
            component={"span"}
          />
          <button
            onClick={navigate}
            type="submit"
            className="w-full sm:w-4/5 h-[48px] absolute top-[480px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
          >
            تایید رمزعبور
          </button>

          <Link
            to={"/"}
            className="w-[140px] h-10 border border-[#dcdcdc] dark:border-slate-500 text-right text-[#3772FF] rounded-[34px] absolute top-[580px] right-32 py-2 px-4 "
          >
            صفحه اصلی
            <BiHomeAlt2 size={17} className="absolute bottom-[10px]" />
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export { NewPassword };
