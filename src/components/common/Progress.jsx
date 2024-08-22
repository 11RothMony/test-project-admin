const Progress = ({numStar, value, num}) => {
  return (
    <div className="flex gap-2 py-2 items-center">
      <span className="text-lg font-medium text-gray-600">{numStar} Star</span>
      <progress
        className="progress progress-warning w-72 h-3"
        value={value}
        max="10"
      ></progress>
      <span className="text-lg font-medium text-gray-600">({num})</span>
    </div>
  );
};
export default Progress;
