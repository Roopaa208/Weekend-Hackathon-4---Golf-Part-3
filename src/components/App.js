import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
import ReactDOM from "react-dom";
let x=0,y=0;
const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  //const [x, setX] = useState(0);
  //const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
 x=0;
 y=0;
    setBallPosition({left:"0px",top:"0px"});
    setRenderBall(false);
    renderChoice();
  };
  const renderChoice = () => {
      if(renderBall)
      return (<div className="ball" style={{position:"absolute",left:x+"px",top:y+"px"}}></div>);
      else
      return (<button className="start" onClick={getBall}>Start</button>);

   
  };
  function getBall()
  {
      setRenderBall(true);
      renderChoice();
     
  }
    
  useEffect(function(){
    document.addEventListener("keydown",(event)=>{
        if(event.key=="ArrowLeft"||event.keyCode=='37')
        x=x-5;
        if(event.key=="ArrowUp"||event.keyCode=='38' )
        y=y+5;
        if( event.key=="ArrowRight"||event.keyCode=='39' )
        x=x+5;
        if(event.key=="ArrowDown"||event.keyCode=='40' )
        y=y-5;
        setBallPosition({left: x+"px",top: y+"px"});
        console.log(event.key+" "+x+" "+y);
      });
  },[]);
    


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
