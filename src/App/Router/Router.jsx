import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Landing } from "../../pages/Landing";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Login } from "../../pages/auth/Login";
import { Register } from "../../pages/auth/Register";
import { ForgetPassword } from "../../pages/auth/ForgetPassword";


const Routes = createBrowserRouter([
  {
    path: "/Auth",
    element: <AuthLayout />,
    children: [
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "ForgetPassword", element: <ForgetPassword /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Landing /> }],
  },
]);

export { Routes };
