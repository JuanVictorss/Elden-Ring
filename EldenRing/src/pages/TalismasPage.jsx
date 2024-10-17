import React from "react";
import BarraLateral from "../components/Painel";
import { CardGeral } from "../styles/Cards/CardGeral";
import hookGeral from "../hooks/HookGeral";

export const TalismasPage = () => {
  const talisma = hookGeral("talisma");
  return (
    <>
      <BarraLateral />
      <CardGeral>
        {talisma ? (
          <ul>
            {talisma.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <img src={item.image} alt="" />
                <p>
                  <strong>Descrição:</strong>
                  <br />
                  {item.description}
                </p>
                <p>
                  <strong>Efeito:</strong>
                  <br />
                  {item.effect}
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
