import React from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Router/Router";
import { Toaster } from "react-hot-toast";
import ScrollWheelHandler from "react-scroll-wheel-handler";

const App = () => {
  return (
    <>
      <ScrollWheelHandler
        upHandler={() => window.scrollBy({ top: -550, behavior: "smooth" })}
        downHandler={() => window.scrollBy({ top: 550, behavior: "smooth" })}
      >
        <RouterProvider router={Routes} />
        <Toaster
          position="top-center"
          toastOptions={{ duration: 3000 }}
          style={{
            borderRadius: "10px",
          }}
        />
      </ScrollWheelHandler>
    </>
  );
};

export default App;
