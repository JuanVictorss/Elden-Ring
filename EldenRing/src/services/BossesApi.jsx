import consumirDados from "./Api";
const bosses = consumirDados("/bosses?limit=100");
export default bosses;
