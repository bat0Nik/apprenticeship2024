const Input = ({ value, onChange, disabled }) => {
  return (
    <>
      {disabled ? (
        <input type="number" value={value} onChange={onChange} disabled />
      ) : (
        <input type="number" value={value} onChange={onChange} />
      )}
    </>
  );
};

export default Input;
