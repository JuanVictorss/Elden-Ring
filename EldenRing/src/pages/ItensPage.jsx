import React from "react";
import hookGeral from "../hooks/HookGeral";
import { CardGeral } from "../styles/Cards/CardGeral";
import BarraLateral from "../components/Painel";

const ItensPage = () => {
  const item = hookGeral("item");
  return (
    <div className="geral">
      <BarraLateral />
      <CardGeral>
        {item ? (
          <ul>
            {item.map((dado) => (
              <li key={dado.id}>
                <h2>{dado.name}</h2>
                <img src={dado.image} alt="" />
                <p>
                  <strong>Descrição:</strong>
                  <br />
                  {dado.description}
                </p>
                <p>
                  <strong>Tipo: </strong>
                  <br />
                  {dado.type}
                </p>
                <p>
                  <strong>Efeito: </strong>
                  <br />
                  {dado.effect}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </CardGeral>
    </div>
  );
};

export default ItensPage;
