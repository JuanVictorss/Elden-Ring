import React from "react";
import { Link } from "react-router-dom";
import { Painel } from "../styles/Painel";

const BarraLateral = () => {
  return (
    <Painel>
      <div className="menu">
        <a href="#">Menu</a>
      </div>
      <ul>
        <li>
          <Link to="/municoes" className="linkCor">
            Munições
          </Link>
        </li>
        <li>
          <Link to="/armaduras" className="linkCor">
            Armaduras
          </Link>
        </li>
        <li>
          <Link to="/cinzas" className="linkCor">
            Cinzas de Guerra
          </Link>
        </li>
        <li>
          <Link to="/bosses" className="linkCor">
            Bosses
          </Link>
        </li>
        <li>
          <Link to="/classes" className="linkCor">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/criaturas" className="linkCor">
            Criaturas
          </Link>
        </li>
        <li>
          <Link to="/encantamentos" className="linkCor">
            Encantamentos
          </Link>
        </li>
        <li>
          <Link to="/itens" className="linkCor">
            Itens
          </Link>
        </li>
        <li>
          <Link to="/localizacoes" className="linkCor">
            Localizações
          </Link>
        </li>
        <li>
          <Link to="/npcs" className="linkCor">
            NPCs
          </Link>
        </li>
        <li>
          <Link to="/escudos" className="linkCor">
            Escudos
          </Link>
        </li>
        <li>
          <Link to="/feiticos" className="linkCor">
            Feitiços
          </Link>
        </li>
        <li>
          <Link to="/espiritos" className="linkCor">
            Espíritos
          </Link>
        </li>
        <li>
          <Link to="/talismas" className="linkCor">
            Talismãs
          </Link>
        </li>
        <li>
          <Link to="/armas" className="linkCor">
            Armas
          </Link>
        </li>
      </ul>
    </Painel>
  );
};

export default BarraLateral;
