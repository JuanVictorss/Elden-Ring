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
  { path: "/Elden-Ring/", element: <HomePage /> },
  { path: "Elden-Ring/armas", element: <ArmasPage /> },
  { path: "Elden-Ring/armaduras", element: <ArmadurasPage /> },
  { path: "Elden-Ring/bosses", element: <BossesPage /> },
  { path: "Elden-Ring/classes", element: <ClassesPage /> },
  { path: "Elden-Ring/cinzas", element: <CinzasPage /> },
  { path: "Elden-Ring/criaturas", element: <CriaturasPage /> },
  { path: "Elden-Ring/encantamentos", element: <EncantamentosPage /> },
  { path: "Elden-Ring/escudos", element: <EscudosPage /> },
  { path: "Elden-Ring/espiritos", element: <EspiritosPage /> },
  { path: "Elden-Ring/feiticos", element: <FeiticosPage /> },
  { path: "Elden-Ring/itens", element: <ItensPage /> },
  { path: "Elden-Ring/localizacoes", element: <LocalizacoesPage /> },
  { path: "Elden-Ring/municoes", element: <MunicoesPage /> },
  { path: "Elden-Ring/npcs", element: <NpcsPage /> },
  { path: "Elden-Ring/talismas", element: <TalismasPage /> },
]);

export default router;
