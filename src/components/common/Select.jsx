const Select = ({title}) => {
  return (
    <label className="form-control w-60 max-w-xs">
      <div className="label">
        <span className="label-text text-md font-bold">{title}</span>
      </div>
      <select className="select select-bordered">
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
  );
};
export default Select;
