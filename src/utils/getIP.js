import { GET_IP_URL } from "./constants";

export const getIPAddress = async () => {
console.log("this many times")
  const apiUrl = GET_IP_URL;

  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.ip;
};
