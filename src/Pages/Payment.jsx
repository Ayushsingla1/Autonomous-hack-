import BillingEventCard from "../Components/BillingEventCard";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Taylor from '../assets/Taylor.jpg';
import 'flowbite';

const Payment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsCollection = collection(db, 'EventsInfo'); 
                const querySnapshot = await getDocs(eventsCollection);
                const eventsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                
                const eventIndex = parseInt(id) - 1;
                if (eventIndex >= 0 && eventIndex < eventsData.length) {
                    setItem(eventsData[eventIndex]);
                } else {
                    console.error('Event ID is out of bounds');
                }
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchEvents();
    }, [id]); 

    if (loading) {
        return (
            <div className="flex w-screen h-screen justify-center items-center bg-black">
            <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div> 
            </div>
        );
    } else {
        return (
            <div className="flex flex-col justify-center w-screen h-screen gap-y-20 overflow-hidden">
                <div className="text-5xl text-[#00CC30] text-center font-semibold">Payment Success!!</div>
                <div className="flex w-screen justify-center items-center gap-32">
                    <div className="rounded-md flex p-10 justify-between bg-white flex-col w-6/12 gap-y-2 shadow-lg shadow-black">
                        <h3 className="text-[36px] font-bold ">Event-Details</h3>
                        <div className="flex flex-col gap-y-2 my-3 overflow-hidden justify-center items-center">
                            <BillingEventCard event={item} />
                        </div>
                        <button 
                            className="py-2 rounded-lg px-4 max-w-[204px] bg-green-500 font-semibold text-[24px] text-black self-end"
                            onClick={() => navigate('/Events')}>
                            Browse Events
                        </button>
                    </div>
                    <div>
                        <img src={Taylor} alt="Error loading image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Payment;
