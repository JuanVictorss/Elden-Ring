import { CardGeral } from "../styles/Cards/CardGeral";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import BarraLateral from "../components/Painel";

import React from "react";
import hookGeral from "../hooks/HookGeral";

const CriaturasPage = () => {
  const criatura = hookGeral("criatura");
  return (
    <>
      <BarraLateral />
      <CardGeral>
        {criatura ? (
          <ul>
            {criatura.map((item) => (
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
                />

                <p>
                  <strong>
                    Descrição: <br />
                  </strong>
                  {item.description}
                </p>
                <p>
                  <strong>Localização: </strong>
                  <br />
                  {item.location}
                </p>
                <p>
                  <strong>Drops: </strong>
                  <br />
                  {item.drops}
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

export default CriaturasPage;
