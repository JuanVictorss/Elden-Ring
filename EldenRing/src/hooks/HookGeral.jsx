import { useEffect, useState } from "react";
import {
  municoes,
  armaduras,
  cinzas,
  bosses,
  classes,
  criaturas,
  encantamentos,
  itens,
  localizacoes,
  npcs,
  escudos,
  feiticos,
  espiritos,
  talismas,
  armas,
} from "../services/ApiLinks";

const hookGeral = (param) => {
  let informacoes;
  if (param === "municao") {
    informacoes = municoes;
  } else if (param === "armadura") {
    informacoes = armaduras;
  } else if (param === "cinza") {
    informacoes = cinzas;
  } else if (param === "boss") {
    informacoes = bosses;
  } else if (param === "classe") {
    informacoes = classes;
  } else if (param === "criatura") {
    informacoes = criaturas;
  } else if (param === "encantamento") {
    informacoes = encantamentos;
  } else if (param === "item") {
    informacoes = itens;
  } else if (param === "localizacao") {
    informacoes = localizacoes;
  } else if (param === "npc") {
    informacoes = npcs;
  } else if (param === "escudo") {
    informacoes = escudos;
  } else if (param === "feitico") {
    informacoes = feiticos;
  } else if (param === "espirito") {
    informacoes = espiritos;
  } else if (param === "talisma") {
    informacoes = talismas;
  } else if (param === "arma") {
    informacoes = armas;
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
