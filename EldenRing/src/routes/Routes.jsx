import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Bosses from "../pages/BossesPage";
import ArmadurasPage from "../pages/ArmadurasPage";
import MunicoesPage from "../pages/MunicoesPage";
import ClassesPage from "../pages/ClassesPage";
import CinzasPage from "../pages/CinzasPage";
import CriaturasPage from "../pages/CriaturasPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bosses",
    element: <Bosses />,
  },
  { path: "municoes", element: <MunicoesPage /> },

  { path: "armaduras", element: <ArmadurasPage /> },
  { path: "cinzas", element: <CinzasPage /> },
  { path: "classes", element: <ClassesPage /> },
  { path: "criaturas", element: <CriaturasPage /> },
]);

export default router;
