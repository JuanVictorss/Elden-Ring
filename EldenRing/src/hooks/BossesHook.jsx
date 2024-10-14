import { useEffect, useState } from "react";
import bosses from "../services/BossesApi";

const hookBosses = () => {
  const [boss, setBoss] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await bosses();
      setBoss(dados.data);
    };
    pegarDados();
  }, []);
  return boss;
};

export default hookBosses;
