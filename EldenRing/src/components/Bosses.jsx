import hookBosses from "../hooks/BossesHook";
import { Card } from "../styles/BossCard";

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
                  item.image
                    ? item.image
                    : "https://png.pngtree.com/png-vector/20191004/ourmid/pngtree-alert-icon-isolated-on-abstract-background-png-image_1779868.jpg"
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
