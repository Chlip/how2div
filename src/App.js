import React, { useState } from 'react'
import './App.css';
import Color from './components/Color/Color';
import divContext from './context/context';
import DivDisplay from './components/DivDisplay/DivDisplay';
import BorderRadius from './components/Border/BorderRadius';
import BoxSizing from './components/BoxSizing/BoxSizing';
import BorderStyle from './components/Border/BorderStyle';
import DisplayCss from './DisplayCss/DisplayCss';
import Button from './components/Button';


function App() {

  const [div, setdiv] = useState([{ backgroundColor: 0 }])
  return (
    <divContext.Provider value={{ div, setdiv }}>
      <div className={"App"}>
        <div className={"left"}>
          <Button name={"borderStyle"}>
            <BorderStyle id="borderStyle"></BorderStyle>
          </Button>
          <Button name={"boxSizing"}><BoxSizing></BoxSizing></Button>
          <Button name={"borderRadius"}><BorderRadius></BorderRadius></Button>
          <DisplayCss div={div}></DisplayCss>
          <Button name={"backgroundColor"}><Color name={"backgroundColor"}></Color></Button>
          
          
        </div>
        <div className={"right"}>
          <DivDisplay></DivDisplay>
          <div className="test"></div>
        </div>
      </div>
    </divContext.Provider>
  );
}


export default App;
