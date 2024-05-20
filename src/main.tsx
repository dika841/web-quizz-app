import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryProvider } from "@libs/services";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>
);
