import React, { useState } from 'react'
import './App.css';
import Color from './components/Color/Color';
import DivContext from './context/context';
import DivDisplay from './components/DivDisplay/DivDisplay';
import BorderRadius from './components/Border/BorderRadius';
import BoxSizing from './components/BoxSizing/BoxSizing';

import DisplayCss from './DisplayCss/DisplayCss';
import Button from './components/Button';
import Border from './components/Border/Border';

function App() {

  const [div, setdiv] = useState([])
  return (
    <DivContext.Provider value={{ div, setdiv }}>
      <div className={"App"}>
        <div className={"left"}>

          <Button name={"borderStyle"}>
            <Border></Border>
          </Button>
          <Button name={"boxSizing"}>
            <BoxSizing></BoxSizing>
          </Button>
          <Button name={"borderRadius"}>
            <BorderRadius></BorderRadius>
          </Button>
          
          <Button name={"backgroundColor"}><Color name={"backgroundColor"}></Color></Button>
        </div>
        <div className={"right"}>
          <DivDisplay></DivDisplay>
        </div>
      </div>
    </DivContext.Provider>
  );
}


export default App;
