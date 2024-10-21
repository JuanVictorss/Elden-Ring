import { CardGeral } from "../styles/Cards/CardGeral";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import BarraLateral from "../components/Painel";
import hookGeral from "../hooks/HookGeral";
import { Menu } from "../components/Menu";

const Classes = () => {
  console.log("Classes carregadas");
  const classe = hookGeral("classe");
  return (
    <>
      <Menu />
      <BarraLateral />
      <CardGeral>
        {classe ? (
          <ul>
            {classe.map((item) => (
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
                <div className="atributos">
                  <strong>Atributos: </strong>
                  <p>Nível: {item.stats.level}</p>
                  <p>Vigor: {item.stats.vigor}</p>
                  <p>Mente: {item.stats.mind}</p>
                  <p>Resistencia {item.stats.endurance}</p>
                  <p>Força: {item.stats.strength}</p>
                  <p>Destreza: {item.stats.dexterity}</p>
                  <p>Inteligencia: {item.stats.intelligence}</p>
                  <p>Fé: {item.stats.faith}</p>
                  <p>Arcano: {item.stats.arcane}</p>
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

export default Classes;
