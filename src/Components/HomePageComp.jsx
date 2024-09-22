import Taylor from '../assets/Taylor.jpg'
import { NavLink} from 'react-router-dom';
const HomePageComp = () => {
  return (<div className=" flex items-center min-h-screen w-screen">

      <div className="text-white flex w-10/12 justify-between px-16">
        <div className="flex gap-y-8 flex-col mt-40">
          <div className="text-6xl font-happyMonkey max-w-md"><i><u>Fun</u></i> is a language in itself</div>
          <p className="text-lg font-poppins max-w-lg">
          Welcome to Ticketing, your ultimate destination for concert tickets! Explore an exciting lineup of upcoming music events, featuring top artists and unforgettable performances across genres..
          </p>
          <NavLink to = '/Events'><button className="w-[320px] h-[69px] bg-gray-800 text-white text-2xl font-roboto rounded-2xl shadow-lg flex justify-center items-center">
            Browse Events
          </button>
          </NavLink>
        </div>

        
        <div className="flex space-x-4 justify-center w-6/12 mt-[160px]">
          <div className="min-w-[400px] relative  h-auto">
            <img className="w-full" src={Taylor} alt="Error" />
          </div>
          <div className="min-w-[400px] absolute right-[80px] top-[94px] h-auto">
            <img className="w-full" src={Taylor} alt="Error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComp;
