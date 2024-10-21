import React from "react";
import hookGeral from "../hooks/HookGeral";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import { CardGeral } from "../styles/Cards/CardGeral";
import BarraLateral from "../components/Painel";
import { Menu } from "../components/Menu";

const ItensPage = () => {
  const item = hookGeral("item");
  return (
    <>
      <Menu />
      <BarraLateral />
      <CardGeral>
        {item ? (
          <ul>
            {item.map((dado) => (
              <li key={dado.id}>
                <h2>{dado.name}</h2>
                <img
                  src={
                    navigator.onLine
                      ? dado.image
                        ? dado.image
                        : noImage
                      : offline
                  }
                  alt=""
                />
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
    </>
  );
};

export default ItensPage;
