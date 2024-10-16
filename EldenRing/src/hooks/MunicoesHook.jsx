import { useEffect, useState } from "react";
import municoes from "../services/MunicoesApi";

const hookMunicoes = () => {
  const [municao, setMunicao] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await municoes;
      setMunicao(dados.data);
    };
    pegarDados();
  }, []);
  return municao;
};

export default hookMunicoes;
