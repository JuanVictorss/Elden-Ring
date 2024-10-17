import hookMunicoes from "../hooks/MunicoesHook";
import { MunicaoCard } from "../styles/Cards/MunicaoCard";
import offline from "../assets/offline.jpg";
import BarraLateral from "../components/Painel";

const Municoes = () => {
  const municao = hookMunicoes();

  return (
    <>
      <BarraLateral />
      <MunicaoCard>
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
      </MunicaoCard>
    </>
  );
};

export default Municoes;
