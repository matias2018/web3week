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

function getContract() {
  if (!window.ethereum) throw new Error("No Metamask wallet found!");
  const from = localStorage.getItem("wallet");
  const web3 = new Web3(window.ethereum);
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

export async function getOpenRequests(lastId = 0) {

  const contract = getContract();

  const requests = await contract.methods.getOpenRequests(lastId + 1, 10).call();
  // let's filter empty requests because the contract returns an array with 10 elements
  return requests.filter(rq => rq.title !== "");
}

export async function openRequest({ title, description, contact, goal }) {
  const contract = getContract();

  return contract.methods.openRequest(title, description, contact, Web3.utils.toWei(goal, "ether")).send();
}

export async function closeRequest(id) {
  const contract = getContract();
  return contract.methods.closeRequest(id).send();
}

export async function donate(id, donationInBNB) {
  const contract = getContract();
  return contract.methods.donate(id).send({
    value: Web3.utils.toWei(donationInBNB, "ether")
  });
}