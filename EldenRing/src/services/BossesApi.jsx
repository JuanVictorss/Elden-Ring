import axios from "axios";

const consumirDados = async () => {
  try {
    const response = await axios.get(
      "http://eldenring.fanapis.com/api/bosses?limit=100"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default consumirDados;
