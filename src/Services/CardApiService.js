import axios from "axios";

const port = "7001";
const apihost = `https://localhost:${port}`;

export async function GetAllBingoCards() {
  const response = await axios.get(`${apihost}/bingocards`);
  return response.data;
}
export async function GetCardChallenges(cardid) {
  const response = await axios.get(
    `${apihost}/challenges/bingocardchallenges?cardid=${cardid}`
  );
  console.log(response.data);
  return response.data;
}
