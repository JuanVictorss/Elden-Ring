import consumirDados from "./Api";
const criaturas = consumirDados("/creatures?limit=100");
export default criaturas;
