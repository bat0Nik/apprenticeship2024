const Input = ({ value, onChange, onKeyDown, disabled, onFocus, onBlur }) => {
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
          onFocus={onFocus}
          onBlur={onBlur}
          min={1}
          max={3}
        />
      )}
    </>
  );
};

export default Input;
