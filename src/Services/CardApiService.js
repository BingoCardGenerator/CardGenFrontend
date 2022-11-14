import axios from "axios";

const port = "7001";
const apihost = `https://localhost:${port}`;

export async function GetAllBingoCards() {
  const response = await axios.get(`${apihost}/bingocards`);
  return response.data;
}
