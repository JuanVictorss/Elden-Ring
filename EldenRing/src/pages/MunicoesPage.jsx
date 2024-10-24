import { CardGeral } from "../styles/Cards/CardGeral";
import offline from "../assets/offline.jpg";
import BarraLateral from "../components/Painel";
import hookGeral from "../hooks/HookGeral";
import { Menu } from "../components/Menu";

const Municoes = () => {
  const municao = hookGeral("municao");

  return (
    <>
      <Menu />
      <BarraLateral />
      <CardGeral>
        {municao ? (
          <ul>
            {municao.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <img
                  src={navigator.onLine ? item.image : offline}
                  alt={item.name}
                />
                <strong>Descrição:</strong>
                <p>{item.description}</p>
                <strong>Tipo:</strong>
                <p>{item.type}</p>
                <strong>Poder de Ataque:</strong>
                <div className="poder-de-ataque">
                  {item.attackPower.map((power, indice) => (
                    <p key={indice}>
                      {power.name} : {power.amount}
                    </p>
                  ))}
                </div>
                <strong>Passiva:</strong>
                <p>{item.passive}</p>
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

export default Municoes;
