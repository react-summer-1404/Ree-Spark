import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { BiHomeAlt2 } from "react-icons/bi";
const SendCode = () => {
  const validation = yup.object().shape({
    sendCode: yup.number().required("شماره همراه خود را وارد کنید ⚠️"),
  });
  const navigate = useNavigate();
  const onSubmit = (event) => {
    console.log("form submit=", event);
    navigate("/auth/PersonalInfo");
  };
  return (
    <div className="relative">
      <div className="flex justify-center gap-2 sm:gap-0 sm:justify-evenly flex-col-reverse sm:flex-row">
        <div className=" w-full sm:w-[160px] h-10 ">
          <div className="h-2 bg-[#DCDCDC] rounded-lg"></div>
          <div className="text-center sm:text-right text-[15px] mt-1 text-[#707070]">
            واردکردن اطلاعات شخصی
          </div>
        </div>
        {/*  */}
        <div className=" w-full sm:w-[160px] h-10">
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
            واردکردن شماره همراه
          </div>
        </div>
      </div>
      <h2 className="text-[28px] font-semibold absolute right-0 top-[150px] sm:top-[115px] ">
        تایید کد ارسال شده
      </h2>
      <h5 className="text-base text-[#707070] dark:text-slate-300 absolute right-0 top-[200px] sm:top-[167px] w-4/6 text-right">
        لطفا کد ارسال شده به شماره همراه  <strong className="text-blue-600">0938</strong> را وارد کنید
      </h5>
      {/*  */}
      <Formik
        initialValues={{ sendCode: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        <Form>
          <h3 className="w-[134px] h-[23px] absolute top-[300px] sm:top-[260px] right-0 text-[15px] text-right font-medium dark:text-white">
            کد تایید
          </h3>
          <Field
            className="border border-[#DCDCDC] dark:bg-slate-200 dark:text-black w-full sm:w-4/5 text-sm absolute top-[330px] sm:top-[292px] right-0 h-12 rounded-3xl text-right pr-2 outline-blue-600"
            placeholder="کد تایید خود را وارد کنید"
            name="sendCode"
          />
          <ErrorMessage
            name="sendCode"
            className="absolute top-[390px] sm:top-[350px] right-[10px] text-red-600 dark:text-red-400 w-52"
            component={"span"}
          />
          <button
            onClick={navigate}
            type="submit"
            className="w-full sm:w-4/5 h-[48px] absolute top-[430px] sm:top-[380px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
          >
            ارسال کد تایید
          </button>
          <div className="absolute top-[480px] right-0 w-full sm:w-4/5 h-10 flex">
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
    </div>
  );
};

export { SendCode };
