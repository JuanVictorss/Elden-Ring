import { useEffect, useState } from "react";
import {
  armaduras,
  armas,
  bosses,
  cinzas,
  classes,
  criaturas,
  encantamentos,
  escudos,
  espiritos,
  feiticos,
  itens,
  localizacoes,
  municoes,
  npcs,
  talismas,
} from "../services/ApiLinks";

const hookGeral = (param) => {
  let informacoes;
  if (param === "armadura") {
    informacoes = armaduras;
  } else if (param === "arma") {
    informacoes = armas;
  } else if (param === "boss") {
    informacoes = bosses;
  } else if (param === "cinza") {
    informacoes = cinzas;
  } else if (param === "classe") {
    informacoes = classes;
  } else if (param === "criatura") {
    informacoes = criaturas;
  } else if (param === "encantamento") {
    informacoes = encantamentos;
  } else if (param === "escudo") {
    informacoes = escudos;
  } else if (param === "espirito") {
    informacoes = espiritos;
  } else if (param === "feitico") {
    informacoes = feiticos;
  } else if (param === "item") {
    informacoes = itens;
  } else if (param === "localizacao") {
    informacoes = localizacoes;
  } else if (param === "municao") {
    informacoes = municoes;
  } else if (param === "npc") {
    informacoes = npcs;
  } else if (param === "talisma") {
    informacoes = talismas;
  }

  const [item, setItem] = useState([]);

  useEffect(() => {
    const pegarDados = async () => {
      const dados = await informacoes;
      setItem(dados.data);
    };
    pegarDados();
  }, []);
  return item;
};

export default hookGeral;
