// Import Web3
import Web3 from "web3";
import { ABI, Address, testrpc } from "../contract";

const Web3Comp = ({eventId}) => {

    // Set up Web3 instance and connect to Ethereum network (you can replace this with a provider, like Infura or Alchemy)
    const web3 = new Web3(testrpc);
    
    // ABI and Contract Address (replace these with your actual contract's ABI and address)
    const contractABI = ABI;
    const contractAddress = Address;
    
    // Create a new contract instance
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    
    // Call a read-only (view) function
    async function readContractData(eventId) {
        try {
            const result = await contract.methods.getEventDetails(eventId).call();
            console.log("Data from contract:", result);
        } catch (error) {
            console.error("Error reading contract data:", error);
        }
    }

    return (
        <button onClick={() => {readContractData(eventId)}}>get Details</button>
    );
}

export default Web3Comp;

// Call a write function (requires sending a transaction)
// async function sendTransactionData(inputValue) {
//     try {
//         const accounts = await web3.eth.getAccounts();
//         const senderAddress = accounts[0]; // Get the first account (you can also specify an account)

//         const receipt = await contract.methods.yourWriteMethod(inputValue).send({
//             from: senderAddress,
//             gas: 2000000, // Adjust gas limit as needed
//         });
//         console.log("Transaction receipt:", receipt);
//     } catch (error) {
//         console.error("Error sending transaction:", error);
//     }
// }

// Example usage
// (async () => {
//     // Call the read function
//     await readContractData(0);

//     // Send data to the contract (replace 'inputValue' with actual data)
//     // const inputValue = "some value";
//     // await sendTransactionData(inputValue);
// })();




