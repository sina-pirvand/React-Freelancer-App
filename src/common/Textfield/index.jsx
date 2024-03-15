const Textfield = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-bold text-secondary-400 my-3 text-xl"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="textfield-input"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default Textfield;
