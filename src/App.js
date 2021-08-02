import React, { useState, useEffect } from 'react'
import './App.css';
import Color from './components/Color/Color';
import DivContext from './context/context';
import DivDisplay from './components/DivDisplay/DivDisplay';
import BorderRadius from './components/Border/BorderRadius';
import BoxSizing from './components/BoxSizing/BoxSizing';
import Shadow from './components/Shadow/Shadow'
import DisplayCss from './DisplayCss/DisplayCss';
import Button from './components/Button';
import Border from './components/Border/Border';
import Test from './components/Test';
import ShadowList from './components/Shadow/ShadowList';
import Outline from './components/Outline/Outline';
import DisplayText from './components/DisplayText';

function translateToCss(style){
  for(const key in style){
    for (var i = 0; i < key.length; i++){
      if (key[i] === key[i].toUpperCase()){
        let newKey = key.replace(key[i], `-${key[i].toLowerCase()}`)
        style[newKey] = style[key]
        style[newKey] = style[newKey] + ";"
        delete style[key]
      } 
    }
  }
  return style;

}
function App() {
  let style = {}
  const [div, setdiv] = useState([])
  const [test, settest] = useState({})
  useEffect(() => {
    
    div.map((e) => { style = { ...style, ...e } })
    div.map((e) => { settest(prev=>{return { ...prev, ...e }}) })
    console.log(translateToCss(style))
  }, [div])
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
          <Button name={"backgroundColor"}>
            <Color name={"backgroundColor"}></Color>
          </Button>
          <Button name={"shadow"}>
            <ShadowList></ShadowList>
          </Button>
          <Button name={"outline"}>
            <Outline></Outline>
          </Button>

        </div>
        <div className={"right"}>
          <DivDisplay div={div}></DivDisplay>
          <DisplayText div={JSON.stringify(test)}></DisplayText>
        </div>
      </div>
    </DivContext.Provider>
  );
}


export default App;
