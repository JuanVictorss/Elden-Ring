import { useEffect, useState } from "react";
import criaturas from "../services/CriaturasApi";

const hookCriaturas = () => {
  const [criatura, setCriatura] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await criaturas;
      setCriatura(dados.data);
    };
    pegarDados();
  }, []);
  return criatura;
};

export default hookCriaturas;
