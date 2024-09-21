const SelectForm = ({title,name, className="", onChange}) => {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-base font-medium">{title}</span>
        </div>
        <select onChange={onChange} name={name} className={`select select-bordered ${className}`}>
          <option disabled selected>
            Choose Category
          </option>
          <option>Women</option>
          <option>Men</option>
          <option>Bags</option>
          <option>Bells</option>
          <option>Shoes</option>
          <option>Watches</option>
        </select>
      </label>
    </div>
  );
};
export default SelectForm;
