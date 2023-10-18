import { useState } from "react";
import useGenerateAdvice from "../hooks/useGenerateAdvice";
import "../styles/Home.css";

const Home = () => {
  const { id, data, getAdvice } = useGenerateAdvice();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getNextAdvice = () => {
    setIsButtonDisabled(true);
    getAdvice();

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  };

  return (
    <div className="main-background">
      <div className="container">
        <div className="title">
          <p className="main-title">{`Advice #${id} `}</p>
        </div>
        <div className="advice-box">
          <h1 className="advice">
            <q>{data}</q>
          </h1>
        </div>
        <div className="divider">
          <img
            className="border-divider"
            src="/pattern-divider-desktop.svg"
            alt="Divider"
          />
        </div>
        <div className="dice">
          <button
            onClick={getNextAdvice}
            disabled={isButtonDisabled}
            className={`icon-dice ${isButtonDisabled ? "disabled" : "enabled"}`}
          >
            <img
              src="/icon-dice.svg"
              alt="Dice"
              className={isButtonDisabled ? "icon-disabled" : "icon-enabled"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
