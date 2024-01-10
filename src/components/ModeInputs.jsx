import { useState, useEffect } from "react";
import PopUp from "./PopUp";

const ModeInputs = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("");
  const [userInput, setUserInput] = useState("");
  const [expectedResult, setExpectedResult] = useState(0);
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 10);
    setNumber1(num1);
    setNumber2(num2);

    if (level <= 10) {
      setOperation("+");
      setExpectedResult(num1 + num2);
    } else if (level > 10 && level <= 20) {
      setOperation("-");
      setExpectedResult(num1 - num2);
    } else if (level > 20 && level <= 30) {
      setOperation("*");
      setExpectedResult(num1 * num2);
    } else if (level > 30) {
      setOperation("/");
      setExpectedResult(num1 / num2);
    }
    setUserInput("");
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const checkResult = () => {
    const userInputNumber = parseInt(userInput);
    if (userInputNumber === expectedResult) {
      setMessage("Poprawna odpowiedź!");
      setLevel(level + 1);
    } else {
      setMessage("Nieprawidłowa odpowiedź");
    }

    setShowPopUp(true);
    generateNumbers();
  };

  return (
    <div className="inputs-container">
      <div className="level-bar">
        <h1>Level {level}</h1>
      </div>
      <div className="inputs-cont">
        <input type="number" value={number1} disabled />
        <p>{operation}</p>
        <input type="number" value={number2} disabled />
        =
        <input type="number" value={userInput} onChange={handleUserInput} />
      </div>
      <button onClick={checkResult} className="check">Sprawdź wynik</button>
      {showPopUp && (
        <PopUp
          info={message}
          onClick={() => {
            setShowPopUp(false);
            setMessage("");
          }}
        />
      )}
    </div>
  );
};

export default ModeInputs;
