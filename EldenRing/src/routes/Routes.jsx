import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BossesPage from "../pages/BossesPage";
import ArmadurasPage from "../pages/ArmadurasPage";
import MunicoesPage from "../pages/MunicoesPage";
import ClassesPage from "../pages/ClassesPage";
import CinzasPage from "../pages/CinzasPage";
import CriaturasPage from "../pages/CriaturasPage";
import EncantamentosPage from "../pages/EncantamentosPage";
import ItensPage from "../pages/ItensPage";
import { LocalizacoesPage } from "../pages/LocalizacoesPage";
import { NpcsPage } from "../pages/NpcsPage";
import { EscudosPage } from "../pages/EscudosPage";
import { FeiticosPage } from "../pages/FeiticosPage";
import { EspiritosPage } from "../pages/EspiritosPage";
import { TalismasPage } from "../pages/TalismasPage";
import { ArmasPage } from "../pages/ArmasPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "bosses", element: <BossesPage /> },
  { path: "municoes", element: <MunicoesPage /> },
  { path: "armaduras", element: <ArmadurasPage /> },
  { path: "cinzas", element: <CinzasPage /> },
  { path: "classes", element: <ClassesPage /> },
  { path: "criaturas", element: <CriaturasPage /> },
  { path: "encantamentos", element: <EncantamentosPage /> },
  { path: "itens", element: <ItensPage /> },
  { path: "localizacoes", element: <LocalizacoesPage /> },
  { path: "npcs", element: <NpcsPage /> },
  { path: "escudos", element: <EscudosPage /> },
  { path: "feiticos", element: <FeiticosPage /> },
  { path: "espiritos", element: <EspiritosPage /> },
  { path: "talismas", element: <TalismasPage /> },
  { path: "armas", element: <ArmasPage /> },
]);

export default router;
