import { useEffect, useState } from "react";
import { classes } from "../services/ApiLinks";

const hookClasses = () => {
  const [classe, setClasse] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await classes;
      setClasse(dados.data);
    };
    pegarDados();
  }, []);
  return classe;
};

export default hookClasses;
