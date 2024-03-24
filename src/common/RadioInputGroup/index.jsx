import RadioInput from "../RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 mt-6">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-4 flex-1 text-center">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default RadioInputGroup;
