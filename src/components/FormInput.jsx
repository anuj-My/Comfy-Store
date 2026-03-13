const FormInput = ({ label, type, name, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input"
      />
    </fieldset>
  );
};

export default FormInput;
