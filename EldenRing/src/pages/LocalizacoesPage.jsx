import React from "react";
import { CardGeral } from "../styles/Cards/CardGeral";
import BarraLateral from "../components/Painel";
import hookGeral from "../hooks/HookGeral";

export const LocalizacoesPage = () => {
  const localizacao = hookGeral("localizacao");
  return (
    <>
      <BarraLateral />
      <CardGeral>
        {localizacao ? (
          <ul>
            {localizacao.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <img src={item.image} alt="" />
                <p>
                  <strong>Descrição:</strong>
                  <br />
                  {item.description}
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
