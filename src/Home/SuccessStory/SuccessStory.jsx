import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SuccessStory.css";

function SuccessStory() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/casestory"
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="slider-section">
      <div className="text-center mb-12">
        <h1 className="text-white text-4xl font-extrabold">
          Success Stories
        </h1>

        <p className="text-gray-300 mt-3">
          Intern journeys and outcomes from real project experience at
          MAHADAKSHA Foundation
        </p>
      </div>

      <div className="slider-container py-2">
        <div className="marquee">
          {data.map((item, index) => (
            <div className="slider-item" key={`${item.id}-${index}`}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStory;

export const Card = ({ data }) => {
  return (
    <div className="card flex ">
      <div className="flex-0.5  rounded-2xl">
        <img src={data.image} alt={data.name}
        className="object-cover rounded-2xl"
        />
      </div>

     <div className="flex-1">
         <h2>{data.name}</h2>

      <h3>{data.role}</h3>

      <p>{data.description}</p>
     </div>
    </div>
  );
};