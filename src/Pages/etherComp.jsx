import { ABI, Address } from "../contract";
import { ethers } from "ethers";

const EtherComp = () => {
  // Connect to the Ethereum network (you can replace this with your own provider, e.g., Infura, Alchemy)
  // const provider = new ethers.providers.Web3Provider(testrpc); ``// For browser-based wallet like MetaMask
  const provider = new ethers.BrowserProvider(window.ethereum);
  // const provider = new ethers.JsonRpcProvider(testrpc); // For local test network like Hardhat

  // Contract ABI and Address (replace these with your actual contract details)
  const contractABI = ABI;
  const contractAddress = Address;

  // Create a new ethers Contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Function to send a transaction to the contract's payable function
  async function sendPayableTransaction() {
    try {
      // Request access to the user's Ethereum account
      await provider.send("eth_requestAccounts", []);

      // Get the signer (the account that will send the transaction)
      const signer = await provider.getSigner();

      // Attach the signer to the contract to send transactions
      const contractWithSigner = contract.connect(signer);
      console.log(signer);

      // Amount of Ether to send (in this example, 0.01 ETH)
      const valueInEther = "0.02";

      // Send the transaction with ETH
      const tx = await contractWithSigner.buyTickets(
        1,
        1,
        [
          "https://gateway.pinata.cloud/ipfs/QmYwXhcu3hoy6bxqDfGz85KBeK3CnhqUznQBWjMRf6Mvmu4",
        ],
        {
          value: ethers.parseEther(valueInEther), // Convert ether to Wei
        }
      );

      console.log("Transaction sent:", tx);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction mined:", receipt);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  }

  return (
    <button
      onClick={() => {
        sendPayableTransaction();
      }}
    >
      Buy Ticket
    </button>
  );
};

export default EtherComp;
