import Soundbar from "./Soundbar";
import BackButton from "./BackButton";
import { useEffect, useCallback } from "react";
import ModesChoose from "./ModesChoose";

const Modes = ({ setMessage, setMenu, setModePath }) => {
  const memoizedSetMenu = useCallback(setMenu, [setMenu]);
  useEffect(() => {
    memoizedSetMenu(false);
  }, [memoizedSetMenu]);

  const handleMouseEnterButton1 = () => {
    setModePath("/modes/mode1");
    localStorage.setItem("modePath", "/modes/mode1");
    setMessage(
      "Tryb polega na zebraniu 50pkt wykonując działania matematyczne. Punkty dostajesz za dobrze wykonane działania, a za złą odpowiedź je tracisz."
    );
  };

  const handleMouseEnterButton2 = () => {
    setModePath("/modes/mode2");
    localStorage.setItem("modePath", "/modes/mode2");
    setMessage(
      "Tryb polega na zdobyciu jak największej ilości poprawnych odpowiedzi. Posiadasz tylko 3 życia. Za błędną odpowiedź odbierane jest jedno życie"
    );
  };

  return (
    <div className="modes-container">
      <div className="modes-top-bar">
        <BackButton toLink="/" />
        <Soundbar />
      </div>
      <ModesChoose
        onMouseEnter1={handleMouseEnterButton1}
        onMouseEnter2={handleMouseEnterButton2}
        path={"/modes/difficulty"}
      />
    </div>
  );
};

export default Modes;
