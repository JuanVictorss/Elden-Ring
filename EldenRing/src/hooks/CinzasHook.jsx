import { useEffect, useState } from "react";
import { cinzas } from "../services/ApiLinks";

const hookCinzas = () => {
  const [cinza, setCinza] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await cinzas;
      setCinza(dados.data);
    };
    pegarDados();
  }, []);
  return cinza;
};

export default hookCinzas;
