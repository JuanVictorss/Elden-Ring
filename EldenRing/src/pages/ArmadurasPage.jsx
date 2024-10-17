import { CardGeral } from "../styles/Cards/CardGeral";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import hookGeral from "../hooks/HookGeral";
import BarraLateral from "../components/Painel";

const Armaduras = () => {
  const armadura = hookGeral("armadura");

  return (
    <>
      <BarraLateral />
      <CardGeral>
        {armadura ? (
          <ul>
            {armadura.map((item) => (
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
                  <strong>Descrição: </strong> <br />
                  {item.description}
                </p>
                <p>
                  <strong>Categoria: </strong>
                  <br />
                  {item.category}
                </p>
                <div className="dano-negacao">
                  {item.dmgNegation.map((damage, indice) => (
                    <p key={indice}>
                      {damage.name} : {damage.amount}
                    </p>
                  ))}
                </div>
                <p>
                  <strong>Peso: </strong> <br />
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

export default Armaduras;
