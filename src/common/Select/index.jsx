const Select = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textfield-input text-secondary-500 text-xs font-bold bg-secondary-100 border border-secondary-300 min-w-36"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value} className="font-bold">
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
