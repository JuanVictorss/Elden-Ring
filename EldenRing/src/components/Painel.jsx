import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Painel } from "../styles/Painel";
import ListaLinks from "./Links";

const BarraLateral = () => {
  return (
    <Painel>
      <ListaLinks />
    </Painel>
  );
};

export default BarraLateral;
