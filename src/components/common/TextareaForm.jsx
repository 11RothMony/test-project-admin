const Textarea = ({title, onChange, value, className="", name}) => {
  return (
    <div>
      <div className="label">
        <span className="label-text text-base font-normal">{title}</span>
      </div>
      <textarea
        name={name}
        placeholder="Write here"
        value={value}
        onChange={onChange}
        className={`textarea textarea-bordered ${className}`}
      ></textarea>
    </div>
  );
};
export default Textarea;
