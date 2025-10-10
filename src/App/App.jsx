import React from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        style={{
          borderRadius: "10px",
        }}
      />
    </>
  );
};

export default App;
