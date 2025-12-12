import { Field, Form, Formik } from "formik";
import React from "react";

const AddAccountForm = () => {
  return (
    <>
      <Formik>
        <Form>
          <Field
            name="NewAccGmail"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full px-3 py-2 border rounded mb-3 dark:bg-gray-700 dark:text-white outline-blue-500"
          />
          <input
            name="NewAccPass"
            placeholder="رمز عبور خود را وارد کنید"
            className="w-full px-3 py-2 border rounded mb-3 dark:bg-gray-700 dark:text-white outline-blue-500"
          />
        </Form>
      </Formik>
    </>
  );
};

export default AddAccountForm;
