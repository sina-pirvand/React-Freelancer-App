const Textfield = ({
  label,
  name,
  type,
  register,
  required,
  validationSchema,
  errors,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-bold text-secondary-500 my-3 text-xl"
      >
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type || "text"}
        id={name}
        className="textfield-input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default Textfield;
