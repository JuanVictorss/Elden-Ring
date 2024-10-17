import consumirDados from "./Api";
const classes = consumirDados("/classes?limit=100");
export default classes;
