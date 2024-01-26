import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Modes from "./components/Modes";
import Mode1 from "./components/Mode1";
import Mode2 from "./components/Mode2";
import { AudioProvider } from "./components/AudioContext";
import Avatar from "./components/Avatar";
import SubModes from "./components/SubModes";

function App() {
  const [message, setMessage] = useState("");
  const [menu, setMenu] = useState(false);
  const [badAnswer, setBadAnswer] = useState(false);
  const [goodAnswer, setGoodAnswer] = useState(false);
  const [display, setDisplay] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modePath, setModePath] = useState("");
  const [difficulty, setDifficulty] = useState(localStorage.getItem('diff') || "");

  useEffect(() => {
    console.log("wywoluje przed ")
    const storedModePath = localStorage.getItem('modePath')
    if (storedModePath) {
      setModePath(storedModePath)
    }
    const storedDifficulty = localStorage.getItem('diff')
    if (storedDifficulty) {
      setDifficulty(storedDifficulty)
    }
    console.log("wywoluje po ")
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <div className="container">
        <AudioProvider>
          <Routes>
            <Route path="/" element={<Menu setMessage={setMessage} setMenu={setMenu} />} />
            <Route path="/modes" element={<Modes setMessage={setMessage} setMenu={setMenu} setModePath={setModePath} />} />
            <Route path="/modes/difficulty" element={<SubModes setMessage={setMessage} setBadAnswer={setBadAnswer} setGoodAnswer={setGoodAnswer} modePath={modePath} setDifficulty={setDifficulty} />} />
            <Route path="/modes/mode1" element={
              <Mode1
                setMessage={setMessage}
                setBadAnswer={setBadAnswer}
                setGoodAnswer={setGoodAnswer}
                setDisplay={setDisplay}
                windowWidth={windowWidth}
                difficulty={difficulty}
              />}
            />
            <Route path="/modes/mode2" element={
              <Mode2
                setMessage={setMessage}
                setBadAnswer={setBadAnswer}
                setGoodAnswer={setGoodAnswer}
                setDisplay={setDisplay}
                windowWidth={windowWidth}
                difficulty={difficulty}
              />}
            />
          </Routes>
        </AudioProvider>
        <Avatar message={message} menu={menu} badAnswer={badAnswer} goodAnswer={goodAnswer} display={display} />
      </div>
    </div>
  );
}

export default App;
