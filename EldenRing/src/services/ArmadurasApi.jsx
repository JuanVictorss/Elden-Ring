import consumirDados from "./Api";
const armaduras = consumirDados("/armors?limit=100");
export default armaduras;
