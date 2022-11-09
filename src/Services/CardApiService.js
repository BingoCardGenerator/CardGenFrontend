import axios from "axios";

const port = "7001";
const apihost = `https://localhost:${port}/Api/BingoCard`;

export async function GetAllBingoCards() {
  const response = await axios.get(apihost);
  return response.data;
}
