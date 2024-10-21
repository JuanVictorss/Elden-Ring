import React from "react";
import BarraLateral from "../components/Painel";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import { CardGeral } from "../styles/Cards/CardGeral";
import hookGeral from "../hooks/HookGeral";
import { Menu } from "../components/Menu";

const EncantamentosPage = () => {
  const encantamento = hookGeral("encantamento");

  return (
    <>
      <Menu />
      <BarraLateral />
      <CardGeral>
        {encantamento ? (
          <ul>
            {encantamento.map((item) => (
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
                  <strong>Descrição: </strong>
                  <br />
                  {item.description}
                </p>
                <p>
                  <strong>Tipo:</strong>
                  <br />
                  {item.type}
                </p>
                <p>
                  <strong>Custo: </strong>
                  <br />
                  {item.cost}
                </p>
                <p>
                  <strong>Slots:</strong>
                  <br />
                  {item.slots}
                </p>
                <p>
                  <strong>Efeitos: </strong>
                  <br />
                  {item.effects}
                </p>
                <p>Rquisitos N/A</p>
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

export default EncantamentosPage;
