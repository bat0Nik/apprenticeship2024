import { useState, useEffect } from "react";
import PopUp from "./PopUp";
import Input from "./Input";

const ModeInputs = ({ points, setPoints, lives, setLives, countPoints }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("");
  const [userInput, setUserInput] = useState("");
  const [expectedResult, setExpectedResult] = useState(0);
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState(1);
  const [showPopUp, setShowPopUp] = useState(false);
  const [minNumber1, setMinNumber1] = useState(1);
  const [maxNumber1, setMaxNumber1] = useState(12);
  const [minNumber2, setMinNumber2] = useState(1);
  const [maxNumber2, setMaxNumber2] = useState(13);
  const [lost, setLost] = useState(false);

  const handleButtonClick = () => {
    if (parseInt(userInput) === expectedResult) {
      console.log("Powinien sie zmienic level");
      setLevel((prevLevel) => prevLevel + 1);
      if (countPoints) setPoints((prevPoints) => prevPoints + 1);
      generateNumbers(level);
      setMessage("Poprawna odpowiedź!");
    } else {
      setMessage("Nieprawidłowa odpowiedź");
      if (countPoints && points !== 0)
        setPoints((prevPoints) => prevPoints - 1);
      if (lives > 0) setLives((prevLives) => prevLives - 1);
    }

    setUserInput("");

    setShowPopUp(true);
  };
  let divadableNumbers = [];

  for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      divadableNumbers.push(i);
    }
  }

  useEffect(() => {
    generateNumbers(level);
  }, [level, minNumber1, maxNumber1, minNumber2, maxNumber2]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateNumbers = (lvl) => {
    if (lvl < 5) {
      setMinNumber1(1);
      setMaxNumber1(12);
      setMinNumber2(1);
      setMaxNumber2(13);
      // } else if (level > 5) {
      //   setMinNumber1(1);
      //   setMaxNumber1(50);
      //   setMinNumber2(1);
      //   setMaxNumber2(50);
      // }
    } else if (lvl >= 5 && lvl < 10) {
      setMinNumber1(15);
      setMaxNumber1(25);
      setMinNumber2(1);
      setMaxNumber2(14);
      //  else {
      //   setMinNumber1(50);
      //   setMaxNumber1(100);
      //   setMinNumber2(1);
      //   setMaxNumber2(49);
    } else if (lvl >= 10 && lvl < 15) {
      setMinNumber1(2);
      setMaxNumber1(5);
      setMinNumber2(2);
      setMaxNumber2(5);
      //  else {
      //   setMinNumber1(2);
      //   setMaxNumber1(10);
      //   setMinNumber2(2);
      //   setMaxNumber2(10);
      // }
    }
    const num1 = getRandomNumber(minNumber1, maxNumber1);
    const num2 = getRandomNumber(minNumber2, maxNumber2);
    setNumber1(num1);
    setNumber2(num2);

    if (lvl < 5) {
      console.log("level: " + lvl);
      setOperation("+");
      setExpectedResult(num1 + num2);
    } else if (lvl >= 5 && lvl < 10) {
      setOperation("-");
      setExpectedResult(num1 - num2);
    } else if (lvl >= 10 && lvl < 15) {
      setOperation("*");
      setExpectedResult(num1 * num2);
    } else if (lvl >= 30) {
      setOperation("/");
      setExpectedResult(num1 / num2);
    }
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="inputs-container">
      <div className="level-bar">
        <h1>Level {level}</h1>
      </div>
      <div className="inputs-cont">
        <Input value={number1} disabled={true} />
        <p>{operation}</p>
        <Input value={number2} disabled={true} />
        =
        <Input value={userInput} onChange={handleUserInput} />
      </div>
      <button onClick={handleButtonClick} className="check">
        Sprawdz wynik
      </button>
      {showPopUp && (
        <PopUp
          info={message}
          lost={lost}
          onClick={() => {
            setShowPopUp(false);
            setMessage("");
            if (lives === 0) {
              setLives(3);
            }
            setLost(false);
          }}
        />
      )}
    </div>
  );
};

export default ModeInputs;
