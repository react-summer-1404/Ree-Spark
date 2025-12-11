import { Field, Form, Formik } from "formik";
import React from "react";

const Links = () => {
  return (
    <div dir="rtl">
      <Formik initialValues={{ linkdin: "", telegramLink: "" }}>
        <Form>
          <h4>لینک تلگرام</h4>
          <Field
            name="telegramLink"
            className="border border-[#DCDCDC] w-[570px] h-12 rounded-[24px] outline-blue-500 pr-2 mt-2"
            placeholder="لینک تلگرام خود را وارد کنید"
          />{" "}
          <h4 className="mt-9">لینک لینکدین</h4>
          <Field
            name="linkdin"
            className="border border-[#DCDCDC] w-[570px] h-12 rounded-[24px] outline-blue-500 pr-2 mt-2"
            placeholder="لینک لینکدین خود را وارد کنید"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Links;
