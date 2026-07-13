import { ExternalLink } from "lucide-react";

export default function MapCard({ item }) {
  return (
    <div className="bg-[#161222] border border-[#2d2343] rounded-3xl text-xs p-7">

      <h2 className="text-white text-2xl font-semibold mb-6">
        Location on Google Maps
      </h2>

      <iframe
    src={item.Location}
    className="w-full h-64 rounded-xl border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
    title="Google Map"
  />

  <a
    href={item.Location}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 text-violet-500 hover:text-violet-400"
  >
    Open Map
    <ExternalLink size={18} />
  </a>
    </div>
  );
}