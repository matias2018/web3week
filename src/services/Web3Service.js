import Web3 from "web3";
import ABI from "./ABI.json";

// const CONTRACT_ADDRESS = "0xE13Cb6e6E0d65bAf515A3B3fAc8b47f7c6CD680d";
const CONTRACT_ADDRESS = "0x0Ec0E3D2Da2Fa6Fa24C6B263d61053c90827904D";

export async function doLogin() {
  if (!window.ethereum) throw new Error("No Metamask wallet found!");

  const web3 = new Web3(window.ethereum);
  // get permission to access wallet in navigator and ask for it's address
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error("Wallet not found or not allowed!");

  localStorage.setItem("wallet", accounts[0].toLowerCase());
  return accounts[0];
}

export async function getOpenRequests(lastId = 0) {
  if (!window.ethereum) throw new Error("Sem Metamask instalada!");

  const from = localStorage.getItem("wallet");
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });

  const requests = await contract.methods.getOpenRequests(lastId + 1, 10).call();
  // let's filter empty requests because the contract returns an array with 10 elements
  return requests.filter(rq => rq.title !== "");
}