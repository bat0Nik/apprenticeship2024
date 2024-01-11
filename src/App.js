import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Modes from "./components/Modes";
import Mode1 from "./components/Mode1";
import Mode2 from "./components/Mode2";
import { AudioProvider } from "./components/AudioContext";

function App() {
  return (
    <div className="app">
      <div className="container">
        <AudioProvider>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/modes" element={<Modes />} />

            <Route path="/modes/mode1" element={<Mode1 />} />
            <Route path="/modes/mode2" element={<Mode2 />} />
          </Routes>
        </AudioProvider>
      </div>
    </div>
  );
}

export default App;
