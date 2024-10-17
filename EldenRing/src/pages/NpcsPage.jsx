import React from "react";
import hookGeral from "../hooks/HookGeral";
import { CardGeral } from "../styles/Cards/CardGeral";
import BarraLateral from "../components/Painel";
export const NpcsPage = () => {
  const npc = hookGeral("npc");
  return (
    <>
      <BarraLateral />
      <CardGeral>
        {npc ? (
          <ul>
            {npc.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <img src={item.image} alt="" />
                <p>
                  <strong>Citação: </strong>
                  <br />
                  {item.quote}
                </p>
                <p>
                  <strong>Localização: </strong>
                  <br />
                  {item.location}
                </p>
                <p>
                  <strong>Função</strong>
                  <br />
                  {item.role}
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
