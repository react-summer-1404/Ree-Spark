import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { HiOutlineChevronLeft } from "react-icons/hi";
const VerifyForm = () => {
const validation = yup.object().shape({
    phoneNumber: yup.number().required(""),
  });
  const navigate = useNavigate();
  const onSubmit = (event) => {
    console.log("form submit=", event);
    navigate("/");
  };
    return (
      <Fragment>
        <Formik
          initialValues={{ verifyCode: "" }}
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
              name="verifyCode"
            />
            <ErrorMessage
              name="verifyCode"
              className="absolute top-[350px] right-[10px] text-red-600 w-52"
              component={"span"}
            />
            <button
              onClick={navigate}
              type="submit"
              className="w-full sm:w-4/5 h-[48px] absolute top-[380px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
            >
              ورود به حساب
            </button>
            <div className="absolute top-[480px] right-0 w-full sm:w-4/5 h-10">
              {" "}
              <Link
                to={"/Auth/Login"}
                className="w-[110px] mx-auto h-10 border border-[#dcdcdc] text-right text-[#3772FF] absolute right-[40%] sm:right-[35%] rounded-[34px] py-2 px-4 "
              >
                بازگشت
                <HiOutlineChevronLeft size={17} className="absolute bottom-[10px]" />
              </Link>
            </div>
          </Form>
        </Formik>
      </Fragment>
    );
  };

export { VerifyForm };
