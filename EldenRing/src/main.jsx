import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles.jsx";
import router from "./routes/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
