import axios from "axios";

const online = "http://eldenring.fanapis.com/api/bosses?limit=100";
const local = "http://localhost:3000/api/bosses?limit=100";
const API_URL = navigator.onLine ? online : local;

const consumirDados = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default consumirDados;
