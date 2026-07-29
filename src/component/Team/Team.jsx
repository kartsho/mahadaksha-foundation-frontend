import TeamCard from "./TeamCard";
import teamData from "../../data/teamData";

const Team = () => {
  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-10 xl:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-violet-500 uppercase tracking-widest">
          OUR TEAM
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Meet Our Team
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Work alongside passionate engineers, designers,
          product managers and innovators building amazing
          digital products.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-hide pt-10">
        <div className="flex gap-6 w-max pb-4">
          {teamData.map((member) => (
            <div key={member.id} className="min-w-[260px]">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;