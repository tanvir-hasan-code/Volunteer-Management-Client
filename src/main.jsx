import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
          <span class="loader"></span>
        </div>
      }
    >
      <RouterProvider router={router}/>
    </Suspense>
  </StrictMode>
);
