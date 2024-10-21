import React from "react";
import ListaLinks from "./Links";
import { HomePainelEstilo } from "../styles/HomePainelEstilo";

const HomePainel = () => {
  return (
    <>
      <HomePainelEstilo>
        <ListaLinks />
      </HomePainelEstilo>
      ;
    </>
  );
};

export default HomePainel;
