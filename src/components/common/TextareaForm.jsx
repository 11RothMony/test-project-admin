const Textarea = ({title, className=""}) => {
  return (
    <div>
      <div className="label">
        <span className="label-text text-base font-normal">{title}</span>
      </div>
      <textarea
        placeholder="Write here"
        className={`textarea textarea-bordered ${className}`}
      ></textarea>
    </div>
  );
};
export default Textarea;
