import axios from "axios";

const port = "7078";
const apihost = `https://localhost:${port}/Api/challenges`;

export async function GetAllChallenges() {
  const response = await axios.get(apihost);
  return response.data;
}
