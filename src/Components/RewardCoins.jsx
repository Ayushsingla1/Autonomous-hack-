// import { useNavigate } from "react-router-dom";

function RewardCoins() {
    // const navigate = useNavigate();
  return (
    // <button id="checkout-button" className="flex gap-2 border-2 px-4 py-2 rounded-full"></button>
        
    <button className="relative flex px-1 py-1 font-medium text-white bg-white rounded-full">
    <span className="absolute inset-0 p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full"></span>
    <span className="flex relative px-4 py-2 gap-2 bg-gray-900 rounded-full">
      <img src="https://pngimg.com/uploads/gold/gold_PNG11020.png" alt="coin" className="w-8"/>
      <div className="">$100</div>
    </span>
  </button>
  )
}

export default RewardCoins
