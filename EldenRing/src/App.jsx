import BossesPage from "./pages/BossesPage";
import Painel from "./components/Painel";
import { Pagina } from "./styles/Page";
function App() {
  return (
    <>
      <Pagina>
        <Painel />
        <BossesPage />
      </Pagina>
    </>
  );
}

export default App;
