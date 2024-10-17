import { MunicaoCard } from "../styles/Cards/MunicaoCard";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import hookArmaduras from "../hooks/ArmadurasHook";
import BarraLateral from "../components/Painel";

const Bosses = () => {
  const armadura = hookArmaduras();

  return (
    <>
      <BarraLateral />
      <MunicaoCard>
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
                  a div
                  {item.dmgNegation.map((damage) => (
                    <p>
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
      </MunicaoCard>
    </>
  );
};

export default Bosses;
