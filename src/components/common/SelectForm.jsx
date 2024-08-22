const SelectForm = ({title, className=""}) => {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-base font-normal">{title}</span>
        </div>
        <select className={`select select-bordered ${className}`}>
          <option disabled selected>
            Pick one
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
    </div>
  );
};
export default SelectForm;
