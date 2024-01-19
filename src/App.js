import { useState } from "react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Modes from "./components/Modes";
import Mode1 from "./components/Mode1";
import Mode2 from "./components/Mode2";
import { AudioProvider } from "./components/AudioContext";
import Avatar from "./components/Avatar";

function App() {
  const [message, setMessage] = useState("");
  const [menu, setMenu] = useState(false);
  const [badAnswer, setBadAnswer] = useState(false);
  return (
    <div className="app">
      <div className="container">
        <AudioProvider>
          <Routes>
            <Route path="/" element={<Menu setMessage={setMessage} setMenu={setMenu} />} />
            <Route path="/modes" element={<Modes setMessage={setMessage} setMenu={setMenu} />} />
            <Route path="/modes/mode1" element={<Mode1 setMessage={setMessage} setBadAnswer={setBadAnswer} />} />
            <Route path="/modes/mode2" element={<Mode2 setMessage={setMessage} setBadAnswer={setBadAnswer} />} />
          </Routes>
        </AudioProvider>
        <Avatar message={message} menu={menu} badAnswer={badAnswer} />
      </div>
    </div>
  );
}

export default App;
