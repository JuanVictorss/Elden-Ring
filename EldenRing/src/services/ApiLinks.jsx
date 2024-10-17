import consumirDados from "./Api";

const municoes = consumirDados("/ammos");

const armaduras = consumirDados("/armors?limit=100");

const cinzas = consumirDados("/ashes?limit=100");

const bosses = consumirDados("/bosses?limit=100");

const classes = consumirDados("/classes?limit=100");

const criaturas = consumirDados("/creatures?limit=100");

const encantamentos = consumirDados("/incantations?limit=100");

const itens = consumirDados("/items?limit=100");

const localizacoes = consumirDados("/locations?limit=100");

const npcs = consumirDados("/npcs?limit=100");

const escudos = consumirDados("/shields?limit=100");

const feiticos = consumirDados("/sorceries?limit=100");

const espiritos = consumirDados("/spirits?limit=100");

const talismas = consumirDados("/talismans?limit=100");

const armas = consumirDados("/weapons?limit=100");
export {
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
};
