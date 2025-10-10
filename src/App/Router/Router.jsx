import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { Landing } from "../../pages/Landing";
import { Login } from "../../components/Login/Login";
import { AuthLayout } from "../../components/layout/AuthLayout";

const Routes = createBrowserRouter([
  {
    path: "/Auth",
    element: <AuthLayout />,
    children: [{ path: "/Auth", element: <Login /> }],
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Landing /> }],
  },
]);

export { Routes };
