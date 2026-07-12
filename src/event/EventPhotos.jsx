export default function EventPhotos({ item }) {

  const images = [
    item.image1,
    item.image2,
    item.image3,
  ];

  return (
    <div className="bg-[#161222] border border-[#2d2343] rounded-3xl p-8">

      <h2 className="text-xl font-bold text-white mb-2">
        Event Photos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt=""
            className="rounded-2xl h-60 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
          />

        ))}

      </div>

    </div>
  );
}