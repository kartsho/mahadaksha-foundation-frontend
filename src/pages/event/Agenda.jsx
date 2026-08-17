import React from 'react'

const Agenda = ({ event }) => {
  return (
    <div className="bg-[#161222] border border-[#2d2343] rounded-3xl mt-10 p-5">
      <h2 className="text-2xl font-bold text-white mb-8">
        Agenda
      </h2>

      <div className="space-y-4 text-white ">
        {event?.agenda?.map((item) => (
          <div key={item._id} className='border border-[#2d2343] mt-2 p-2 rounded-2xl '>
            <p><span>{item.time} - </span>{item.topic}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Agenda