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
  return (
    <div className="app">
      <div className="container">
        <AudioProvider>
          <Routes>
            <Route path="/" element={<Menu setMessage={setMessage} />} />
            <Route path="/modes" element={<Modes setMessage={setMessage} />} />
            <Route path="/modes/mode1" element={<Mode1 setMessage={setMessage} />} />
            <Route path="/modes/mode2" element={<Mode2 setMessage={setMessage} />} />
          </Routes>
        </AudioProvider>
        <Avatar message={message} />
      </div>
    </div>
  );
}

export default App;
