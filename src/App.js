import React, { useState } from 'react'
import './App.css';
import BgColor from './components/BgColor/BgColor';
import divContext from './context/context';
import DivDisplay from './components/DivDisplay/DivDisplay';
import BorderRadius from './components/Border/BorderRadius';
import BorderWidth from './components/Border/BorderWidth';
import BoxSizing from './components/BoxSizing/BoxSizing';
import BorderStyle from './components/Border/BorderStyle';
import BorderColor from './components/Border/BorderColor';
import DisplayCss from './DisplayCss/DisplayCss';


function App() {

  const [div, setdiv] = useState([])
  return (
    <divContext.Provider value={{ div, setdiv }}>
      <div className="App">
        
        <BgColor></BgColor>
        <DivDisplay></DivDisplay>
        <BorderRadius></BorderRadius>
        <BorderWidth></BorderWidth>
        <BoxSizing></BoxSizing>
        <BorderStyle></BorderStyle>
        <BorderColor></BorderColor>
        <DisplayCss div={div}></DisplayCss>
      </div>
    </divContext.Provider>
  );
}


export default App;
