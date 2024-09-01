const SelectForm = ({title, className=""}) => {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-base font-medium">{title}</span>
        </div>
        <select className={`select select-bordered ${className}`}>
          <option disabled selected>
            Pick one
          </option>
          <option>Harry</option>
          <option>Lord</option>
          <option>Planet</option>
          <option>Star</option>
        </select>
      </label>
    </div>
  );
};
export default SelectForm;
