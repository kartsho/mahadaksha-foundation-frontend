const TeamCard = ({ member }) => {
  return (
    <div
      className="
        w-full
        bg-[#14141d]
        border
        border-gray-800
        rounded-2xl
        p-4
        sm:p-5
        hover:border-violet-500
        duration-300
        hover:-translate-y-2
      "
    >
      <img
        src={member.image}
        alt={member.name}
        className="
          w-20
          h-20
          sm:w-24
          sm:h-24
          rounded-full
          mx-auto
          object-cover
        "
      />

      <h3 className="text-lg sm:text-xl font-bold text-center mt-4">
        {member.name}
      </h3>

      <p className="text-center text-violet-400 mt-2 text-sm sm:text-base">
        {member.role}
      </p>

      <button
        className="
          mt-5
          w-full
          py-2
          rounded-lg
          bg-violet-600
          hover:bg-violet-700
          duration-300
          text-white
          text-sm
          sm:text-base
        "
        onClick={() => window.open(member.profileUrl, "_blank")}
      >
        View Profile
      </button>
    </div>
  );
};

export default TeamCard;