import { NavLink } from "react-router-dom";

const SliderCard = ({item})=>{
    return (
    <div className="relative flex justify-center">
        <div style={{ backgroundImage: `url(${item.Image})` }} className="absolute inset-0 bg-cover bg-center filter blur-3xl z-0"></div>
        <div className="relative flex h-1/2 gap-x-20 w-10/12 bg-slate-600 bg-opacity-70 px-10 py-6 rounded-md mt-10 z-10 mb-10">
            <div className="w-4/6 text-white flex flex-col justify-evenly gap-x-10">
                <div className="text-2xl font-bold">{item.EventName}</div>
                <div className="text-justify font-semibold">{item.Description}</div>
                <div className="font-semibold">Artist : {item.Artist}</div>
                <button className="bg-[#38884A] text-white w-28 h-10 self-end rounded-md"><NavLink to = {`/Event/${item.id}`}>Book Now</NavLink></button>
            </div>
            <div className="w-2/6 h-full flex justify-center">
                <img src={item.Image} className="object-fill h-96" />
            </div>
        </div>
    </div>
    )
}

export default SliderCard;