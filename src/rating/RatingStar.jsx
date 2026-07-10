import React, { useEffect }  from 'react'
import axios from 'axios';
import { Star } from "lucide-react";
import { useState } from 'react';


export default function Rating() {

  
  const [Data, setData] = useState([]);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://6a4e15d1e785c9ef536c4116.mockapi.io/mahadakshaFoundation/About"
    );

    const updatedData = response.data.map((item) => ({
      ...item,
      rating: Math.floor(Math.random() * 4) + 4, // 3, 4, or 5
    }));

    setData(updatedData);
  } catch (error) {
    console.log(error);
  }
};
 
    
  

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
  console.log("Updated Data:", Data);
}, [Data]);

  return (
    <div>

    <div className='flex flex-col items-center justify-center mt-40 mb-40 '>
        <h1 className="text-white text-4xl font-extrabold">
        What clients and learners say
      </h1>
      <p className="text-gray-300 mt-3">
        Real feedback from projects, events, and learning programs.
      </p>
    </div>


    <div className=" slider-container pb-40 ">
         <div className="  marquee p-2 flex flex-row gap-8">
      {[...Data, ...Data].map((item, index) => (
        <Card key={`${item.id}-${index}`}x item={item} />
      ))}
    </div>  


      </div>
    </div>
  );
}


export const Card = ({item}) =>{
  return (
    <div className=" bg-[#100F1A] text-primary-content w-72 rounded-2xl">

 <div className="flex gap-1  pt-3 pl-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            fill={star <= item.rating ? "#8B5CF6" : "#4B5563"}
            color={star <= item.rating ? "#8B5CF6" : "#4B5563"}
          />
        ))}
      </div>

      <div className=" card-body flex items-center justify-center ">
    
 <p className="text-[#C7C3D5]  leading-8">
        "{item.description}"
      </p>
        <div>
          <h3 className="text-white text-xl font-semibold card-title">
            {item.name}
          </h3>


    

        </div>
              {/* Stars */}
     
      </div>
    </div>
  );
}