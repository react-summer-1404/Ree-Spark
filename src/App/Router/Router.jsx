import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Landing } from "../../pages/Landing";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Register } from "../../pages/auth/Register";
import { Login } from "../../pages/auth/login/Login";
import { VerifyNumber } from "../../pages/auth/login/VerifyNumber";
import { NewPassword } from "../../pages/auth/forgetpass/NewPassword";
import { ForgetPassword } from "../../pages/auth/forgetpass/ForgetPassword";
import { SendCode } from "../../pages/auth/SendCode";
import { PersonalInfo } from "../../pages/auth/PersonalInfo";
import CourseDetail from "../../pages/CourseDetail";
import BlogDetail from "../../pages/BlogDetail";




const Routes = createBrowserRouter([
  {
    path: "/Auth",
    element: <AuthLayout />,
    children: [
      { path: "Login", element: <Login /> },
      { path: "VerifyNumber", element: <VerifyNumber /> },  
      { path: "Register", element: <Register /> },
      { path: "SendCode", element: <SendCode /> },
      { path: "PersonalInfo", element: <PersonalInfo /> },
      { path: "ForgetPassword", element: <ForgetPassword /> },
      { path: "NewPassword", element: <NewPassword /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Landing /> },
      {path:'courseDetail', element: <CourseDetail/>},
      {path:'BlogDetail', element: <BlogDetail/>},


    ],
  },
]);

export { Routes };
