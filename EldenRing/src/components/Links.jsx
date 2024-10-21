import React from "react";
import { Link, useLocation } from "react-router-dom";

const ListaLinks = () => {
  return (
    <>
      <ul>
        {useLocation().pathname !== "/Elden-Ring" && (
          <li>
            <Link to="/Elden-Ring" className="linkCor">
              Voltar
            </Link>
          </li>
        )}
        <li>
          <Link to="/Elden-Ring/armas" className="linkCor">
            Armas
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/armaduras" className="linkCor">
            Armaduras
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/bosses" className="linkCor">
            Bosses
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/classes" className="linkCor">
            Classes
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/cinzas" className="linkCor">
            Cinzas de Guerra
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/criaturas" className="linkCor">
            Criaturas
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/encantamentos" className="linkCor">
            Encantamentos
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/escudos" className="linkCor">
            Escudos
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/espiritos" className="linkCor">
            Espíritos
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/feiticos" className="linkCor">
            Feitiços
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/itens" className="linkCor">
            Itens
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/localizacoes" className="linkCor">
            Localizações
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/municoes" className="linkCor">
            Munições
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/npcs" className="linkCor">
            NPCs
          </Link>
        </li>
        <li>
          <Link to="/Elden-Ring/talismas" className="linkCor">
            Talismãs
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ListaLinks;
