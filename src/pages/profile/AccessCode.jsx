import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import SecurityApi from "../../core/services/api/Auth/AccessCode.api";
import ToggleSwitch from "./ToggleSwitch";
import toast from "react-hot-toast";

const AccessCode = () => {
  const gmail = localStorage.getItem("gmail");
  const [twoStep, setTwoStep] = useState(false);

  const validation = yup.object().shape({
    RecoveryGmail: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("ایمیل خود را وارد کنید⚠️"),
    telegramUser: yup.string().required("این فیلد الزامی است"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = {
        twoStepAuth: twoStep,
        recoveryEmail: values.RecoveryGmail,
        telegramUsername: values.telegramUser
          .replace(/^@/, "")
          .replace(/@$/, ""), // پاکسازی
      };

      console.log("TOKEN:", localStorage.getItem("token"));
      console.log("payload", payload);

      const data = await SecurityApi.editSecurity(payload);

      toast.success(data.message || "تغییرات ذخیره شد");
    } catch (error) {
      console.log(error.response?.data); // لاگ دقیق ارور
      toast.error(error.response?.data?.message || "خطا در اتصال");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-8">
      <ToggleSwitch value={twoStep} onChange={setTwoStep} />

      <div className="mx-auto">
        کد دومرحله ای: {twoStep ? "فعال" : "غیرفعال"}
      </div>

      <Formik
        initialValues={{
          RecoveryGmail: gmail || "",
          telegramUser: "",
        }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              className="border border-[#DCDCDC] w-full sm:w-4/5 text-sm h-12 rounded-3xl text-right pr-2 outline-blue-500"
              placeholder="ایمیل خود را وارد کنید"
              name="RecoveryGmail"
            />
            <ErrorMessage
              name="RecoveryGmail"
              className="text-right text-red-600 w-52"
              component={"span"}
            />

            <Field
              className="border border-[#DCDCDC] mt-8 w-full sm:w-4/5 text-sm h-12 rounded-3xl text-right pr-2 outline-blue-500"
              placeholder="یوزرنیم تلگرام"
              name="telegramUser"
            />
            <ErrorMessage
              name="telegramUser"
              className="text-right text-red-600 w-52"
              component={"span"}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 mt-14 hover:bg-blue-700 py-2 px-3 rounded-2xl text-white"
            >
              {isSubmitting ? "در حال ارسال..." : "اعمال تغییرات"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccessCode;
