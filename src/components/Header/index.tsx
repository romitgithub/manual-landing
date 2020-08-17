import React from "react";
import { useHistory } from "react-router-dom";
import ManualLogo from "../../assets/img/manual-symbol.svg";

import "./index.scss";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <img src={ManualLogo} className="logo" alt="Manual" />

      <div className="title-text">
        Be good <br /> to yourself
      </div>
      <div className="desc-text">
        We’re working around the clock to bring you a holistic approach to your
        wellness. From top to bottom, inside and out.
      </div>
      <button onClick={() => history.push("/quiz")} className="take-quiz-btn">
        Take the quiz
      </button>
    </div>
  );
};

export default Header;
