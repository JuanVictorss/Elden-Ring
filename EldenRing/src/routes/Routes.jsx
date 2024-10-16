import { createBrowserRouter } from "react-router-dom";
import BarraLateral from "../components/Painel";
import Bosses from "../pages/BossesPage";
import Home from "../components/Home";
import { MunicoesPage } from "../pages/MunicoesPage";

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
  //{ path: "armaduras", element: <Armaduras /> },
]);

export default router;
