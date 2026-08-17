import React from 'react'

const EventPhotos = ({ event }) => {

  return (
    <div className="bg-[#161222] border border-[#2d2343] rounded-3xl p-8">

      <h2 className="text-xl font-bold text-white mb-2">
        Event Photos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          event?.eventImage?.map((item) => (
            <div key={item._id}>
              {item.img1 && (
                <img
                  src={item.img1}
                  alt="eventsImages"
                  className="rounded-2xl h-60 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
                />
              )}

              {item.img2 && (
                <img
                  src={item.img2}
                  alt="eventsImages"
                  className="rounded-2xl h-60 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
                />
              )}

              {item.img3 && (
                <img
                  src={item.img3}
                  alt="eventsImages"
                  className="rounded-2xl h-60 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
                />
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default EventPhotos