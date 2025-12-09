import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { BiHomeAlt2 } from "react-icons/bi";
import toast from "react-hot-toast";
import { verifyCodeApi } from "../../../core/services/api/Auth/register/VerifyMessage.api";
import { HiOutlineChevronLeft } from "react-icons/hi";

const SendCode = () => {
  const gmail = localStorage.getItem("gmail");
  const validation = yup.object().shape({
    sendCode: yup.string().required("کد تایید را وارد کنید⚠️"),
  });
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const verifyCode = values.sendCode;

      const res = await verifyCodeApi({ verifyCode });

      if (res.success) {
        toast("کد تایید درست است ", { duration: 3000 });
        navigate("/auth/PersonalInfo");
      } else {
        toast.error(res.message || "کد تایید اشتباه است ");
      }
    } catch (err) {
      toast.error("مشکلی پیش آمده لطفا دوباره تلاش کنید");
      console.error(err);
    }
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
      <h5 className="text-base text-[#707070] dark:text-slate-300 absolute right-0 top-[200px] sm:top-[167px] w-96 text-right">
        لطفا کد ارسال شده به ایمیل{" "}
        <strong className="text-blue-600">{gmail}</strong> را وارد کنید
      </h5>
      {/*  */}
      <Formik
        initialValues={{ sendCode: "" }}
        onSubmit={onSubmit}
        validationSchema={validation}
      >
        {({ isSubmitting }) => (
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
              className="absolute text-right top-[390px] sm:top-[350px] right-[10px] text-red-600 dark:text-red-400 w-52"
              component={"span"}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-4/5 shadow-lg h-[48px] absolute top-[430px] sm:top-[380px] right-0 rounded-[40px] bg-[#3772FF]  text-center  leading-10 text-[16px] font-medium text-[#FCFCFC]"
            >
              ارسال کد تایید
            </button>
            <div className="absolute top-[500px] sm:top-[460px] right-0 w-full sm:w-4/5 h-10 flex">
              {" "}
              <Link
                to={"/auth/register"}
                className="w-[110px] mx-auto h-10 border border-[#dcdcdc] text-right text-[#3772FF] sm:right-[35%] rounded-[34px] py-2 px-4 "
              >
                بازگشت
                <HiOutlineChevronLeft
                  size={17}
                  className="absolute bottom-[10px]"
                />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { SendCode };
