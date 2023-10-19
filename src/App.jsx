import { useState } from "react";

import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOPen] = useState(true);

  const handleNext = () => {
    if (step < 3) setStep((count) => count + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((count) => count - 1);
  };

  const handleClose = () => {
    setIsOPen((PrevValue) => !PrevValue);
  };

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <div className="message">
            step {step}: {messages[step - 1]}{" "}
          </div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
