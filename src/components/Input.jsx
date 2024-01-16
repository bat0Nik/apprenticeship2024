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
          min={1}
          max={3}
        />
      )}
    </>
  );
};

export default Input;
