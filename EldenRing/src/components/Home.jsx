import React from "react";
import EldenRing from "../assets/EldenRing.jpg";
import BarraLateral from "./Painel";
import { EstiloHome } from "../styles/Home";

const Home = () => {
  return (
    <EstiloHome>
      <BarraLateral />
      <div>
        <img src={EldenRing} alt="" />
      </div>
    </EstiloHome>
  );
};

export default Home;
