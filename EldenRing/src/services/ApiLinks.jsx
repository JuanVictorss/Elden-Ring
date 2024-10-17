import consumirDados from "./Api";

const municoes = consumirDados("/ammos");

const armaduras = consumirDados("/armors?limit=100");

const cinzas = consumirDados("/ashes?limit=100");

const bosses = consumirDados("/bosses?limit=100");

const classes = consumirDados("/classes?limit=100");

const criaturas = consumirDados("/creatures?limit=100");

export { municoes, armaduras, cinzas, bosses, classes, criaturas };
