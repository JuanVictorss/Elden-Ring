import consumirDados from "./Api";

const armas = consumirDados("/weapons?limit=100");
const armaduras = consumirDados("/armors?limit=100");
const bosses = consumirDados("/bosses?limit=100");
const classes = consumirDados("/classes?limit=100");
const cinzas = consumirDados("/ashes?limit=100");
const criaturas = consumirDados("/creatures?limit=100");
const encantamentos = consumirDados("/incantations?limit=100");
const escudos = consumirDados("/shields?limit=100");
const espiritos = consumirDados("/spirits?limit=100");
const feiticos = consumirDados("/sorceries?limit=100");
const itens = consumirDados("/items?limit=100");
const localizacoes = consumirDados("/locations?limit=100");
const municoes = consumirDados("/ammos");
const npcs = consumirDados("/npcs?limit=100");
const talismas = consumirDados("/talismans?limit=100");

export {
  armas,
  armaduras,
  bosses,
  classes,
  cinzas,
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
};
