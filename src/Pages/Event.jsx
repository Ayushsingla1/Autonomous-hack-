import EventElement from "../Components/EventElement";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "../Components/Loader";

const Event = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    console.log(id); 

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
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
                    console.error('Event ID is out of range');
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
            <div className="w-screen h-screen bg-black flex justify-center items-center">
                <Loader />
            </div>
        );
    }
    return (
        <div className="bg-black w-screen h-screen overflow-hidden">
            <EventElement item={item} />
        </div>
    );
}

export default Event;
