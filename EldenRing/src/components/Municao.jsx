import hookMunicoes from "../hooks/MunicoesHook";
import { MunicaoCard } from "../styles/Cards/MunicaoCard";
const Municoes = () => {
  const municao = hookMunicoes();

  return (
    <MunicaoCard>
      {municao ? (
        <ul>
          {municao.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <strong>Descrição:</strong>
              <p>{item.description}</p>
              <strong>Tipo:</strong>
              <p>{item.type}</p>
              <strong>Poder de Ataque:</strong>
              <div className="poder-de-ataque">
                {item.attackPower.map((power) => (
                  <p>
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
  );
};

export default Municoes;
