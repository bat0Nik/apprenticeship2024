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

  const updateLives = async () => {
    await setLives((prevLives) => prevLives - 1);
  };

  const handleButtonClick = () => {
    let parsedUserInput = parseInt(userInput);
    if (parsedUserInput === expectedResult) {
      console.log("Powinien sie zmienic level");
      setLevel((prevLevel) => prevLevel + 1);
      if (countPoints) setPoints((prevPoints) => prevPoints + 1);
      generateNumbers(level);
      setMessage("Poprawna odpowiedź!");
    } else {
      setMessage("Nieprawidłowa odpowiedź");
      if (countPoints && points !== 0)
        setPoints((prevPoints) => prevPoints - 1);
      if (lives > 0) updateLives();
    }

    if (lives < 1) {
      setLost(true);
      setShowPopUp(false);
    } else setShowPopUp(true);
    setUserInput("");
  };
  let divisiblebleNumbers = [];
  const dividers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      divisiblebleNumbers.push(i);
    }
  }
  useEffect(() => {
    if (lives < 1) {
      setLost(true);
      setShowPopUp(false);
    }
    generateNumbers(level);
  }, [level, minNumber1, maxNumber1, minNumber2, maxNumber2, lives]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateNumbers = (lvl) => {
    let newNumber1, newNumber2, newOperation, newExpectedResult;
    if (lvl < 5) {
      setMinNumber1(1);
      setMaxNumber1(12);
      setMinNumber2(1);
      setMaxNumber2(13);
    } else if (lvl >= 5 && lvl < 10) {
      setMinNumber1(15);
      setMaxNumber1(25);
      setMinNumber2(1);
      setMaxNumber2(14);
    } else if (lvl >= 10 && lvl < 15) {
      setMinNumber1(2);
      setMaxNumber1(5);
      setMinNumber2(2);
      setMaxNumber2(5);
    }

    if (lvl >= 15 && lvl < 20) {
      let n1 = divisiblebleNumbers[getRandomNumber(0, 18)];
      let n2 = dividers[getRandomNumber(0, 10)];

      while (n1 % n2 !== 0) {
        n2 = dividers[getRandomNumber(0, 10)];
      }

      newNumber1 = n1;
      newNumber2 = n2;
    } else {
      newNumber1 = getRandomNumber(minNumber1, maxNumber1);
      newNumber2 = getRandomNumber(minNumber2, maxNumber2);
    }

    if (lvl < 5) {
      console.log("level: " + lvl);
      newOperation = "+";
      newExpectedResult = newNumber1 + newNumber2;
    } else if (lvl >= 5 && lvl < 10) {
      newOperation = "-";
      newExpectedResult = newNumber1 - newNumber2;
    } else if (lvl >= 10 && lvl < 15) {
      newOperation = "*";
      newExpectedResult = newNumber1 * newNumber2;
    } else if (lvl >= 15 && lvl < 20) {
      newOperation = "/";
      newExpectedResult = newNumber1 / newNumber2;
    }
    setNumber1(newNumber1);
    setNumber2(newNumber2);
    setOperation(newOperation);
    setExpectedResult(newExpectedResult);
  };

  const handleUserInput = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    } else setUserInput(event.target.value);
  };

  return (
    <div className="inputs-container">
      {lost ? (
        <button
          onClick={() => {
            if (lives === 0) {
              setLives(3);
              setLost(false);
            }
          }}
        >
          Zagraj jeszcze raz
        </button>
      ) : (
        <>
          <div className="level-bar">
            <h1>Level {level}</h1>
          </div>
          <div className="inputs-cont">
            <Input value={number1} disabled={true} />
            <p>{operation}</p>
            <Input value={number2} disabled={true} />
            =
            <Input
              value={userInput}
              onChange={handleUserInput}
              onKeyDown={handleUserInput}
            />
          </div>
          <button onClick={handleButtonClick} className="check">
            Sprawdz wynik
          </button>
          {showPopUp && (
            <PopUp
              info={message}
              onClick={() => {
                setShowPopUp(false);
                setMessage("");
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ModeInputs;
