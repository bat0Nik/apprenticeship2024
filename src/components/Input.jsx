const Input = ({ value, onChange, onKeyDown, disabled }) => {
  return (
    <>
      {disabled ? (
        <input type="number" value={value} onChange={onChange} disabled />
      ) : (
        <input
          type="number"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
    </>
  );
};

export default Input;
