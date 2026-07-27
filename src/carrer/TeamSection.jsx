import React from "react";

const team = [
  {
    id: 1,
    name: "Development",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700",
  },
  {
    id: 2,
    name: "Design",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700",
  },
  {
    id: 3,
    name: "Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700",
  },
  {
    id: 4,
    name: "Management",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#0A0914] py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <p className="uppercase tracking-[5px] text-violet-500 text-sm font-semibold text-center">
          Meet Our Team
        </p>

        <h2 className="text-white text-center font-bold mt-4
        text-3xl
        sm:text-4xl
        md:text-5xl">
          Our Incredible Workforce
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Work with passionate professionals building innovative digital
          solutions and creating meaningful impact together.
        </p>

        {/* Cards */}

        <div className="grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        mt-16">

          {team.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-[#171329] border border-white/10 hover:border-violet-600 transition duration-300"
            >
              {/* Image */}

              <div className="overflow-hidden h-72">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-7">
                  Join our talented {item.name.toLowerCase()} team and help
                  shape the future of technology.
                </p>

                <button className="mt-6 bg-violet-600 hover:bg-violet-700 transition px-5 py-3 rounded-lg text-white font-medium w-full">
                  View Openings
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}