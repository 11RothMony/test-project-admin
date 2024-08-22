const InputForm=({title, className = ""})=>{
    return(
        <div>
            <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-normal">{title}</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered ${className}`}
            />
          </label>
        </div>
    )
}
export default InputForm;