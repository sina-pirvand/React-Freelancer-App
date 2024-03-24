const RadioInput = ({
  name,
  id,
  value,
  label,
  register,
  watch,
  validationSchema = {},
}) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
        className="form-radio text-primary-900 focus:ring-primary-900 cursor-pointer"
      />
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
