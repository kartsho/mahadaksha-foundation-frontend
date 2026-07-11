import { Star } from "lucide-react";

function Stars() {
  // Random rating: 3, 4, or 5
  const rating = Math.floor(Math.random() * 3) + 3;

  return (
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          fill={star <= rating ? "#8B5CF6" : "#4B5563"}
          color={star <= rating ? "#8B5CF6" : "#4B5563"}
        />
      ))}
    </div>
  );
}

export default Stars;