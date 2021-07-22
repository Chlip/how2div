import React, { useState } from 'react'
import './App.css';
import Color from './components/Color/Color';
import divContext from './context/context';
import DivDisplay from './components/DivDisplay/DivDisplay';
import BorderRadius from './components/Border/BorderRadius';
import BoxSizing from './components/BoxSizing/BoxSizing';
import BorderStyle from './components/Border/BorderStyle';
import DisplayCss from './DisplayCss/DisplayCss';


function App() {

  const [div, setdiv] = useState([{ backgroundColor: 0 }])
  return (
    <divContext.Provider value={{ div, setdiv }}>
      <div className={"App"}>
        <div className={"right"}>
          <DivDisplay></DivDisplay>
        </div>
        <div className={"left"}>
          <Color name={"backgroundColor"}></Color>
          <BorderRadius></BorderRadius>
          <BoxSizing></BoxSizing>
          <BorderStyle></BorderStyle>
          <DisplayCss div={div}></DisplayCss>
        </div>
      </div>
    </divContext.Provider>
  );
}


export default App;
