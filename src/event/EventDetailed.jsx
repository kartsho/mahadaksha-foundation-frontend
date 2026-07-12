import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BiSolidGroup } from "react-icons/bi";
import Agenda from "./Agenda";
import RegistrationCard from "./RegistrationCard";
import MapCard from "./MapCard";
import EventInfo from "./EventInfo";
import EventPhotos from "./EventPhotos";
function EventDetailed() {
  const { state } = useLocation();
const navigate = useNavigate();
  if (!state) {
    return <h1 className="text-white bg-black text-6xl h-full w-full flex m-auto items-center justify-center pt-70 pb-70 font-extrabold">No Event Data Found</h1>;
  }

  const { item, category } = state;

  console.log(category);
  
  return (
    <div className="bg-[#0d0817] min-h-screen">
      <div className=" h-[500px] overflow-hidden">
        <img
        src={item.titleImage}
        alt={item.title}
        className="absolute inset-0 w-full h-[90%] opacity-25 object-cover "
      />
      </div>
             

        
         
       <div className="absolute top-60 left-32 flex flex-row gap-2 text-white text-xs font-semibold ">
        <button className="flex items-center justify-center gap-2 outline-1 outline-gray-600 p-1 rounded-2xl hover:outline-2 hover:outline-white cursor-pointer" onClick={()=>navigate('/event')} ><FaArrowLeft/> Back to Events</button>
        <section className="bg-[#0d0817] p-1 rounded-2xl px-2 hover:bg-[#281a44]">{category}</section>

        
       </div>
       <div className="top-70 absolute ml-30 mr-30">
        <h2 className="text-3xl text-white font-bold mb-5">
            {item.title}
        </h2>
        <p className="pr-60 text-sm text-white/80 font-semibold">
            {item.description}
        </p>
       </div>
       <div className="absolute flex ml-30 mr-30 items-center justify-center m-auto gap-10 text-xs">

        <div className="bg-[#13111F] p-2 px-10 py-3 rounded-xl ">
            <p>Date</p>
            <div className="flex gap-1 items-center justify-center py-1 font-semibold text-white">
            <CiCalendar/> {item.Date}
            </div>
        </div>



        <div className="bg-[#13111F] p-2 px-10 py-3 rounded-xl ">
            <p>Time</p>
            <div className="flex gap-1 items-center justify-center py-1 font-semibold text-white">
                <IoIosTime/>
                {item.Time}
            </div>
        </div>



        <div className="bg-[#13111F] p-2 px-10 py-3 rounded-xl ">
            <p>Venue</p>
            <div className="flex gap-1 items-center justify-center py-1 font-semibold text-white">
                <IoLocation/>
                {item.Venue}
            </div>
        </div>


        <div className="bg-[#13111F] p-2 px-10 py-3 rounded-xl "  >
            <p>Total Registrations</p>
            <div className="flex gap-1 items-center justify-center py-1 font-semibold text-white">
                <BiSolidGroup/>
                {item.NoRegi}
            </div>
        </div>

      

</div>
        <div className="max-w-7xl mx-auto px-2 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ml-30 mr-30">

        {/* Left */}
        <div className="lg:col-span-2 space-y-8 mt-20 ">

          <Agenda item={item} />

          <EventPhotos item={item} />

        </div>

        {/* Right */}
        <div className="space-y-6 mt-30">

          <RegistrationCard />

          <MapCard item={item} />

          <EventInfo />

        </div>

      </div>

    </div>

       </div>
      
   
    
  );
}

export default EventDetailed;