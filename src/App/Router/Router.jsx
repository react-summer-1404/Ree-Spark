import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Landing } from "../../pages/Landing";
// import { Course } from "../../components/course/Course";
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

import Loading from "../../components/common/Loading";
import NotFound from "../../pages/NotFound";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Panel } from "../../pages/Panel";
import { MyCourse } from "../../pages/MyCourse";
import { MyReserve } from "../../pages/MyReserve";
import { FavoriteCourse } from "../../pages/FavoriteCourse";
import FavoriteBlog from "../../pages/FavoriteBlog";

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
