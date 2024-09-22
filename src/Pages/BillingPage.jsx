import { useState } from "react";
// import nftTokenImg from "../../public/magicstudio-art.jpg"
import BillingEventCard from "../Components/BillingEventCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useParams , useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import PayEth from "../Components/PayEth";
import { db } from "../firebase";
import Loader from "../Components/Loader";
import Web3 from 'web3';
import Temp from "./temp";

const BillingPage = () => {
    const EventTicketNFTABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_eventId",
          "type": "uint256"
        }
      ],
      "name": "buyTicket",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_artistName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_totalTickets",
          "type": "uint256"
        }
      ],
      "name": "createEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721IncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721InsufficientApproval",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721NonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "_tokenIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "events",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "artistName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalTickets",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "availableTickets",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getTicketDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ticketToEvent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
    ]
    const contractAddress = '0x494B0e287f24a1D3E0f89a5823D420705B9A5f84';
    const [contract, setContract] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();
    const [item,setitem] = useState({});
    const [account, setAccount] = useState(null);
    const [user1,setUser1] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [tickets, setTickets] = useState(() => {
        const savedTickets = localStorage.getItem('tickets');
        return savedTickets ? parseInt(savedTickets) : 1;
    });
    const [loading,setLoading] = useState(true)

    const connectWallet = async () => {
        if (window.ethereum) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            console.log('Connected account:', accounts[0]);
          } catch (error) {
            console.error('Error connecting to MetaMask:', error);
          }
        } else {
          alert('MetaMask not found. Please install MetaMask!');
        }
      };

      const decreaseCount = () => {
        if(tickets > 1){
            setTickets((prev) => {
                const updatedTickets = prev - 1;
                localStorage.setItem('tickets', updatedTickets); 
                return updatedTickets;
            });
        }
    }

    const increaseCount = () => {
        if(tickets < 6){
            setTickets((prev) => {
                const updatedTickets = prev + 1;
                localStorage.setItem('tickets', updatedTickets); 
                return updatedTickets;
            });
        }
    }
    useEffect(() => {
        setLoading(true)
        const fetchEvents = async () => {
            try {
              const eventsCollection = collection(db, 'EventsInfo'); 
              const querySnapshot = await getDocs(eventsCollection);
              const eventsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setitem(eventsData[id-1]);
            } catch (error) {
              console.error('Error fetching events:', error);
            }
            finally{
                setLoading(false)
            }
          };
          const auth = getAuth();
          const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            console.log(user.photoURL)
            setUser1(user);
            if (user) {
              setIsLoggedIn(true);
            } else {
              setIsLoggedIn(false);
            }
          });
          fetchEvents();
          return () => unsubscribe();
        }, [id]);

        if(loading){
            return (<div className="w-screen h-screen bg-black flex justify-center items-center"><Loader/></div>)
        }
        else {
            return(
            <div className="overflow-hidden flex-col gap-y-4 bg-Siuu w-screen min-h-screen flex items-center ">
        <div className="w-10/12 h-[70px] mt-[44px] flex justify-end items-center gap-x-3">
        <button className="px-4 py-2 text-[24px] max-h-[50px] border border-black rounded-md" onClick={connectWallet}>{account ? (<div>{account.slice(0,4) + '...' + account.slice(-4)}</div>):(<div>Connect Wallet</div>)}</button>
        {user1? (<img src={user1.photoURL} className="w-[50px] h-[50px] rounded-full"/>) : (<div className="bg-purple-600 w-[50px] h-[50px] rounded-full"></div>)}
        </div>
        <div className="w-10/12 mt-[20px] flex gap-x-3 flex-col justify-center gap-y-6">
            <h3 className="uppercase text-[54px] w-full flex items-center font-bold">Billing</h3>
            <div className="w-full justify-between flex gap-x-10">
                <div className="rounded-md flex p-10 justify-between bg-white flex-col w-6/12 gap-y-2 shadow-lg shadow-black">
                    <h3 className="text-[36px] font-bold ">Event-Details</h3>
                    <div className="flex flex-col gap-y-2 my-3 overflow-hidden justify-center items-center">
                        <BillingEventCard event={item} />
                    </div>
                    <button className="py-2 rounded-lg px-4 max-w-[204px] bg-green-500 font-semibold text-[24px] text-black self-end" onClick={()=>{
                        navigate('/Events')
                    }}>
                        Browse Events
                    </button>
                </div>
                <div className="rounded-md flex flex-col w-6/12 bg-white p-10 justify-between items-center shadow-lg shadow-black">
                        <h3 className="uppercase font-bold text-[36px]">Checkout Details</h3>
                        <div className="w-8/12 flex flex-col items-center border-b border-black pb-3 ">
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">No. Of Tickets : <div className="flex gap-x-3">
                                                                                                                                    <div className="border border-black rounded-full h-10 w-10 flex justify-center items-center" onClick={decreaseCount}><div>-</div></div>{tickets}<div className="border border-black rounded-full h-10 w-10 flex justify-center items-center" onClick={increaseCount}><div>+</div></div>
                                                                                                                                </div></div>
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">Price : <span>{(item["Price"] * tickets).toFixed(2)}</span></div>
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">Currency : <span>ETH</span></div>
                            <div className="flex justify-between w-full items-center text-[24px] font-semibold">NFT Preview : <img className="w-[50px] h-[50px] rounded-full" src={item["NFTimg"]}/></div>
                        </div>
                        <div className="flex justify-between text-[28px] w-8/12 px-2 pt-1">
                            <span>Total</span>
                            <div>{(item.Price * tickets).toFixed(2)} ETH</div>
                        </div>
                        {account ? (<Temp tickets={tickets} event={item} account={account}/>) : (<Temp tickets={tickets} event={item} />)}
                </div>
            </div>
        </div>
        <div className="flex mt-[38px] justify-center w-10/12">
            <h1 className="uppercase font-bold text-[48px]">Get yourself a NFT, Buy ticket now !!</h1>
        </div>
    </div>
            )
        }
}
 
export default BillingPage;