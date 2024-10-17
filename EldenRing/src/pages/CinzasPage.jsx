import { CardGeral } from "../styles/Cards//CardGeral";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";
import BarraLateral from "../components/Painel";
import hookGeral from "../hooks/HookGeral";

const CinzasPage = () => {
  const cinza = hookGeral("cinza");
  return (
    <>
      <BarraLateral />
      <CardGeral>
        {cinza ? (
          <ul>
            {cinza.map((item) => (
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
                  <strong>Descrição</strong>
                  <br />
                  {item.description}
                </p>
                <p>
                  <strong>Afinidade: </strong>
                  <br />
                  {item.affinity}
                </p>
                <p>
                  <strong>Skill: </strong>
                  <br />
                  {item.skill}
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

export default CinzasPage;
