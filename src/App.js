import React, { useState } from 'react'
import './App.css';
import Color from './components/Color/Color';
import divContext from './context/context';
import DivDisplay from './components/DivDisplay/DivDisplay';
import BorderRadius from './components/Border/BorderRadius';
import BorderWidth from './components/Border/BorderWidth';
import BoxSizing from './components/BoxSizing/BoxSizing';
import BorderStyle from './components/Border/BorderStyle';
import DisplayCss from './DisplayCss/DisplayCss';


function App() {

  const [div, setdiv] = useState([{backgroundColor: 0}])
  return (
    <divContext.Provider value={{ div, setdiv }}>
      <div className="App">
        
        <Color name={"backgroundColor"}></Color>
        <DivDisplay></DivDisplay>
        <BorderRadius></BorderRadius>
        <BorderWidth></BorderWidth>
        <BoxSizing></BoxSizing>
        <BorderStyle></BorderStyle>
        <Color name={"borderColor"}></Color>
        <DisplayCss div={div}></DisplayCss>
      </div>
    </divContext.Provider>
  );
}


export default App;
