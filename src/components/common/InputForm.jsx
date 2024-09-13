const InputForm = ({ title, value, onChange, className = "", name }) => {
  return (
    <div>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text text-base font-medium">{title}</span>
        </div>
        <input
          name={name}
          type="text"
          value={value} // Use value instead of defaultValue
          onChange={onChange} // Handle changes with onChange
          placeholder="Type here"
          className={`input input-bordered ${className}`}
        />
      </label>
    </div>
  );
};

export default InputForm;
