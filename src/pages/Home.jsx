// import Advice from "../components/Advice";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="main-background">
      <div className="container">
        <div className="title">
          <p className="main-title">Advice #117</p>
        </div>
        <div className="advice-box">
          <h1 className="advice">
            "It is easy to sit up and take notice, what's difficult is getting
            up and taking action."
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
          <img className="icon-dice" src="/icon-dice.svg" alt="Dice" />
        </div>
      </div>
    </div>
  );
};

export default Home;
