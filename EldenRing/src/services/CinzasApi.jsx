import consumirDados from "./Api";
const cinzas = consumirDados("/ashes?limit=100");
export default cinzas;
