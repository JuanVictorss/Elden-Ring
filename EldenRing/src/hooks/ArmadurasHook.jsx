import { useEffect, useState } from "react";
import { armaduras } from "../services/ApiLinks";

const hookArmaduras = () => {
  const [armadura, setArmadura] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await armaduras;
      setArmadura(dados.data);
    };
    pegarDados();
  }, []);
  return armadura;
};

export default hookArmaduras;
