import React from "react";
import hookGeral from "../hooks/HookGeral";
import BarraLateral from "../components/Painel";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import { CardGeral } from "../styles/Cards/CardGeral";
import { Menu } from "../components/Menu";

export const FeiticosPage = () => {
  const feitico = hookGeral("feitico");
  return (
    <>
      <Menu />
      <BarraLateral />
      <CardGeral>
        {feitico ? (
          <ul>
            {feitico.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <img
                  src={
                    navigator.onLine
                      ? item.image
                        ? item.image
                        : noImage
                      : offline
                  }
                  alt=""
                />
                <p>
                  <strong>Descrição:</strong>
                  <br />
                  {item.description}
                </p>
                <p>
                  <strong>Tipo:</strong>
                  <br />
                  {item.type}
                </p>
                <p>
                  <strong>Custo:</strong>
                  <br />
                  {item.cost}
                </p>
                <p>
                  <strong>Slots:</strong>
                  <br />
                  {item.slots}
                </p>
                <p>
                  <strong>Efeitos:</strong>
                  <br />
                  {item.effects}
                </p>
                <div className="requisitos">
                  <strong>Requisitos: </strong>
                  {item.requires.map((requisito) => (
                    <p>
                      {requisito.name} : {requisito.amount}
                    </p>
                  ))}
                </div>
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
