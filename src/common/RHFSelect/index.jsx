const RHFSelect = ({ label, name, register, options, required }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-bold text-secondary-500/80 my-3 text-xl"
      >
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={name}
        className="textfield-input mt-2 block text-secondary-500"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFSelect;
