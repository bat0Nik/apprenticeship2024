import { useState, useEffect } from "react";
import Input from "./Input";

const ModeInputs = ({
  points,
  setPoints,
  lives,
  setLives,
  countPoints,
  setMessage,
  setBadAnswer,
  setDisplay,
  windowWidth,
  setGoodAnswer,
  difficulty,
  incrementStreak,
  badAnswersChart,
  setBadAnswersChart,
}) => {
  const handleInputFocus = () => {
    if (windowWidth <= 770) setDisplay(false);
  };

  const handleInputBlur = () => {
    setDisplay(true);
  };

  const [lost, setLost] = useState(false);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operation, setOperation] = useState("");
  const [userInput, setUserInput] = useState("");
  const [expectedResult, setExpectedResult] = useState(0);
  const [isPositive, setIsPositive] = useState(false);
  const [minNumber1, setMinNumber1] = useState(1);
  const [maxNumber1, setMaxNumber1] = useState(12);
  const [minNumber2, setMinNumber2] = useState(1);
  const [maxNumber2, setMaxNumber2] = useState(13);
  const [goodAnswers, setGoodAnswers] = useState(0);
  const [badAnswers, setBadAnswers] = useState(0);
  const [level, setLevel] = useState(1);
  const updateLives = async () => {
    await setLives((prevLives) => prevLives - 1);
  };

  const handleButtonClick = () => {
    const parsedUserInput = parseInt(userInput);
    if (parsedUserInput === expectedResult) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }

    if (lives < 1) setLost(true);
    setUserInput("");
  };

  const handleCorrectAnswer = () => {
    setBadAnswer(false);
    setGoodAnswer(true);
    setLevel((prevLevel) => prevLevel + 1);

    if (countPoints) {
      const pointsToAdd = level < 20 ? 1 : 2;
      setPoints((prevPoints) => prevPoints + pointsToAdd);
    }

    setGoodAnswers(goodAnswers + 1);
    setMessage("Poprawna odpowiedź!");
  };

  const handleIncorrectAnswer = () => {
    setGoodAnswer(false);
    setBadAnswer(true);
    setBadAnswers(badAnswers + 1);
    setMessage("Nieprawidłowa odpowiedź");

    if (countPoints && points !== 0) setPoints((prevPoints) => prevPoints - 1);
    if (lives > 0) updateLives();
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
    }
    if (points === 50) {
      setMessage("Udało się! Wygrana!");
      handleWinning()
    }
  }, [lives, points,]);
  useEffect(() => {
    generateNumbers();
  }, [level, minNumber1, maxNumber1, minNumber2, maxNumber2]);

  useEffect(() => {
    if (level % 5 === 4) {
      setIsPositive(!isPositive);
    }
  }, [level]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateNumbers = () => {
    let newNumber1,
      newNumber2,
      newOperation,
      newExpectedResult,
      maxDivider,
      maxDivisableNumbers;

    if (difficulty === "easy") {
      if (level <= 25) {
        if (!isPositive) {
          setMinNumber1(1);
          setMaxNumber1(12);
          setMinNumber2(1);
          setMaxNumber2(13);
        } else {
          setMinNumber1(15);
          setMaxNumber1(25);
          setMinNumber2(1);
          setMaxNumber2(14);
        }
      } else if (level > 25) {
        if (!isPositive) {
          setMinNumber1(1);
          setMaxNumber1(50);
          setMinNumber2(1);
          setMaxNumber2(50);
        } else {
          setMinNumber1(50);
          setMaxNumber1(100);
          setMinNumber2(1);
          setMaxNumber2(49);
        }
      }
    } else if (difficulty === "hard") {
      if (level <= 25) {
        if (!isPositive) {
          setMinNumber1(1);
          setMaxNumber1(5);
          setMinNumber2(1);
          setMaxNumber2(5);
        } else {
          maxDivider = 10;
          maxDivisableNumbers = 18;
        }
      } else if (level > 25) {
        if (!isPositive) {
          setMinNumber1(1);
          setMaxNumber1(10);
          setMinNumber2(1);
          setMaxNumber2(10);
        } else {
          maxDivider = 13;
          maxDivisableNumbers = 78;
        }
      }
    }
    if (difficulty === "hard" && isPositive) {
      let n1 = divisiblebleNumbers[getRandomNumber(0, maxDivisableNumbers)];
      let n2 = dividers[getRandomNumber(0, maxDivider)];

      while (n1 % n2 !== 0) {
        n2 = dividers[getRandomNumber(0, 10)];
      }

      newNumber1 = n1;
      newNumber2 = n2;
    } else {
      newNumber1 = getRandomNumber(minNumber1, maxNumber1);
      newNumber2 = getRandomNumber(minNumber2, maxNumber2);
    }

    if (difficulty === "easy") {
      if (!isPositive) {
        newOperation = "+";
        newExpectedResult = newNumber1 + newNumber2;
      } else {
        newOperation = "-";
        newExpectedResult = newNumber1 - newNumber2;
      }
    } else if (difficulty === "hard") {
      if (!isPositive) {
        newOperation = "*";
        newExpectedResult = newNumber1 * newNumber2;
      } else {
        newOperation = ":";
        newExpectedResult = newNumber1 / newNumber2;
      }
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
  const handleWinning = () => {
    incrementStreak()
  };

  
  return (
    <div className="inputs-container">
      {lost ? (
        <>
          <h1>Poprawne odpowiedzi: {goodAnswers}</h1>
          <button
            className="play-again-btn"
            onClick={() => {
              if (lives === 0) {
                setLives(3);
                setLost(false);
                setMessage("");
                setBadAnswer(0);
                setGoodAnswer(0);
              }
            }}
          >
            Zagraj jeszcze raz
          </button>
        </>
      ) : points === 50 ? (
        <>
          
          <h1>Poprawne odpowiedzi: {goodAnswers}</h1>
          <h1>Błędne odpowiedzi: {badAnswers}</h1>
          <button
            className="play-again-btn"
            onClick={() => {
              if (points === 50) {
                setPoints(0);
                setMessage("");
                setBadAnswer(0);
              }
            }}
          >
            Zagraj jeszcze raz
          </button>
        </>
      ) : (
        <>
          <div className="level-bar">
            <h1>Poziom {level}</h1>
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
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <button onClick={handleButtonClick} className="check">
            Sprawdz wynik
          </button>
        </>
      )}
    </div>
  );
};

export default ModeInputs;
