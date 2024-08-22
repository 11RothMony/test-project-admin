const StarRating = ({ rating, totalStars = 5, className = "" }) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: totalStars }, (_, index) => (
          <span
            key={index}
            className={`mask mask-star-2 ${className} ${
              index < rating ? 'bg-yellow-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };
  
  export default StarRating;
  