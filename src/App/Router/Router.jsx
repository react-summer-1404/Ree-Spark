import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { Landing } from "../../pages/Landing";
import { Course } from "../../components/course/Course";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Login } from "../../pages/auth/login/Login";
import { VerifyNumber } from "../../pages/auth/login/VerifyNumber";
import { NewPassword } from "../../pages/auth/forgetpass/NewPassword";
import { ForgetPassword } from "../../pages/auth/forgetpass/ForgetPassword";
import { Panel } from "../../pages/Panel";
import { MyCourse } from "../../pages/MyCourse";
import { MyReserve } from "../../pages/MyReserve";
import { FavoriteCourse } from "../../pages/FavoriteCourse";
import { Blog } from "../../pages/Blog";
import { Register } from "../../pages/auth/register/Register";
import { SendCode } from "../../pages/auth/register/SendCode";
import { PersonalInfo } from "../../pages/auth/register/PersonalInfo";
import { Teacher } from "../../pages/Teacher";
import { TeacherDetail } from "../../pages/TeacherDetail";
import CourseDetail from "../../pages/CourseDetail";
import BlogDetail from "../../pages/BlogDetail";
import Loading from "../../components/common/Loading";
import NotFound from "../../pages/NotFound";
import DashboardLayout from "../../components/layout/DashboardLayout";
import FavoriteBlog from "../../pages/FavoriteBlog";

import Profile from "../../pages/Profile";
import Information from "../../pages/profile/Information";
import Picture from "../../pages/profile/Picture";
import Links from "../../pages/profile/Links";
import MapSelector from "../../pages/profile/Location";

const Routes = createBrowserRouter([
  // auth pages
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
  // main pages of site
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },

      { path: "course/:id", element: <CourseDetail /> },
      { path: "Courses", element: <Course /> },
      { path: "Blog", element: <Blog /> },

      { path: "BlogDetail/:id", element: <BlogDetail /> },

      { path: "Teacher", element: <Teacher /> },
      { path: "TeacherDetail/:id", element: <TeacherDetail /> },
      { path: "Loading", element: <Loading /> },
    ],
  },

  { path: "*", element: <NotFound /> },
  // dashboard and panel pages
  {
    path: "/Dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "panel", element: <Panel /> },
      { path: "MyCourse", element: <MyCourse /> },
      { path: "MyReserve", element: <MyReserve /> },
      { path: "FavoriteCourse", element: <FavoriteCourse /> },
      { path: "FavoriteBlog", element: <FavoriteBlog /> },

      {
        path: "profile",
        element: <Profile />,
        children: [
          { index: true, element: <Information /> },
          { path: "Picture", element: <Picture /> },
          // { path:"location", element: <MapSelector /> },
          { path: "links", element: <Links /> },
        ],
      },
    ],
  },
]);

export { Routes };
