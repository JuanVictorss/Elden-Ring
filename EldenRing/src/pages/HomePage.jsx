import React from "react";
import EldenRing from "../assets/EldenRing.jpg";
import BarraLateral from "../components/Painel";
import { EstiloHome } from "../styles/Home";
import { Menu } from "../components/Menu";

const Home = () => {
  return (
    <EstiloHome>
      <div className="geral">
        <Menu />
        <BarraLateral />
        <div>
          <img src={EldenRing} alt="" />
        </div>
      </div>
    </EstiloHome>
  );
};

export default Home;
