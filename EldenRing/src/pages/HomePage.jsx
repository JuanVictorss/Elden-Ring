import React from "react";
import EldenRing from "../assets/EldenRing.jpg";
import BarraLateral from "../components/Painel";
import { EstiloHome } from "../styles/Home";

const Home = () => {
  return (
    <EstiloHome>
      <div className="geral">
        <BarraLateral />
        <div>
          <img src={EldenRing} alt="" />
        </div>
      </div>
    </EstiloHome>
  );
};

export default Home;
