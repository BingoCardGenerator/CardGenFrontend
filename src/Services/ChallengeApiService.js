import axios from "axios";

const port = "7078";
const apihost = `https://localhost:${port}`;

export async function GetAllChallenges() {
  const response = await axios.get(`${apihost}/challenges`);
  return response.data;
}

// export async function GetChallenge(){
//   const response = await axios.get(`${apihost}/`)
// }
