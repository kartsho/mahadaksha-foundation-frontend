export default function Agenda({ item }) {

  const agenda = [
    item.Agenda1,
    item.Agenda2,
    item.Agenda3,
    item.Agenda4,
  ];

  return (
    <div className="bg-[#161222] border border-[#2d2343] rounded-3xl mt-10 p-5">

      <h2 className="text-2xl font-bold text-white mb-8">
        Agenda
      </h2>

      <div className="space-y-4">

        {agenda.map((ag, index) => (

          <div
            key={index}
            className="border border-[#302644] rounded-xl px-5 py-4 bg-[#1b1628] text-gray-300 hover:border-violet-500 duration-300 text-xs"
          >
            {ag}
          </div>

        ))}

      </div>

    </div>
  );
}