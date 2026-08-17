import { Ticket } from "lucide-react";

export default function RegistrationCard() {
  return (
    <div className="bg-[#161222] border border-[#2d2343] rounded-3xl p-7 text-xs">

      <p className="uppercase text-violet-500 text-sm tracking-widest mb-4">
        Registration
      </p>

      <p className="text-gray-300 leading-8">
        Reserve your slot for this event.
        Registration flow is currently demo-only
        and will be connected to APIs soon.
      </p>

      <button
        className="mt-8 w-full rounded-xl bg-violet-600 py-4 font-semibold text-white hover:bg-violet-700 duration-300 flex justify-center gap-2 cursor-pointer"
      >
        <Ticket size={20} />
        Register Now
      </button>

    </div>
  );
}