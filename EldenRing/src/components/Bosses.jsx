import hookBosses from "../hooks/BossesHook";
import { Card } from "../styles/BossCard";
import offline from "../assets/offline.jpg";
import noImage from "../assets/noImage.jpg";

const Bosses = () => {
  const boss = hookBosses();

  return (
    <Card>
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
    </Card>
  );
};

export default Bosses;
