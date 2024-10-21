import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles.jsx";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter basename="/Elden-Ring/" />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
