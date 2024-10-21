import axios from "axios";
const online = "https://eldenring.fanapis.com/api";
const local = "http://localhost:3000/api";
const ApiURL = navigator.onLine ? online : local;

async function consumirDados(destino) {
  try {
    const response = await axios.get(`${ApiURL}${destino}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default consumirDados;
