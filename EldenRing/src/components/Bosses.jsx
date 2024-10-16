import hookBosses from "../hooks/BossesHook";
import { BossCard } from "../styles/Cards/BossCard";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";

const Bosses = () => {
  const boss = hookBosses();

  return (
    <BossCard>
      {boss ? (
        <ul>
          {boss.map((item) => (
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
                <strong>Localização: </strong>
                <br />
                {item.location}
              </p>
              <p>
                <strong>Drops: </strong> <br />
                {item.drops}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </BossCard>
  );
};

export default Bosses;
