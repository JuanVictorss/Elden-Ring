import React from "react";
import hookGeral from "../hooks/HookGeral";
import BarraLateral from "../components/Painel";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import { CardGeral } from "../styles/Cards/CardGeral";

export const EscudosPage = () => {
  const escudo = hookGeral("escudo");
  return (
    <>
      <BarraLateral />
      <CardGeral>
        {escudo ? (
          <ul>
            {escudo.map((item) => (
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
                <div className="attack">
                  <strong>Ataque: </strong>
                  {item.attack.map((ataque) => (
                    <p>
                      {ataque.name} : {ataque.amount}
                    </p>
                  ))}
                </div>
                <div className="defesa">
                  <strong>Defesa</strong>
                  {item.defence.map((defesa) => (
                    <p>
                      {defesa.name} : {defesa.amount}
                    </p>
                  ))}
                </div>
                <div className="escala">
                  <strong>Escala com:</strong>
                  {item.scalesWith.map((escala) => (
                    <p>
                      {escala.name} : {escala.amount}
                    </p>
                  ))}
                </div>
                <div className="atributo">
                  <strong>Atributos Necessários</strong>
                  {item.requiredAttributes.map((atributo) => (
                    <p>
                      {atributo.name} : {atributo.amount}
                    </p>
                  ))}
                </div>
                <p>
                  <strong>Categoria:</strong>
                  <br />
                  {item.category}
                </p>
                <p>
                  <strong>Peso</strong>
                  <br />
                  {item.weight}
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
