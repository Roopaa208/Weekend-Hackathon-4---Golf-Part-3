import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
  setX(0);
  setY(0);
    setBallPosition({left:"0px"});
    setBallPosition({top:"0px"});
  };
  const renderChoice = () => {
    window.addEvenListener("keydown",(event)=>{
      if(event.keyCode=='37' || event.key=='LeftArrow')
      setX(x-5);
     else if(event.keyCode=='38' || event.key=='UpArrow')
      setY(y+5);
      else if(event.keyCode=='39' || event.key=='RightArrow')
      setX(x+5);
      else if(event.keyCode=='40' || event.key=='DownArrow')
      setY(y+5);
      setBallPosition({left:x+"px", top:y+"px"});
    }); 
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
