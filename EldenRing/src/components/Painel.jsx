import React from "react";
import { Painel } from "../styles/Painel";

const NavBar = () => {
  return (
    <Painel>
      <div className="menu">
        <a href="#">Menu</a>
      </div>
      <ul>
        <li>Munições</li>
        <li>Armaduras</li>
        <li>Bosses</li>
        <li>Classes</li>
        <li>Criaturas</li>
        <li>Encantamentos</li>
        <li>Itens</li>
        <li>Localizações</li>
        <li>NPCs</li>
        <li>Escudos</li>
        <li>Feitiços</li>
        <li>Espíritos</li>
        <li>Talismãs</li>
        <li>Armas</li>
      </ul>
    </Painel>
  );
};

export default NavBar;
