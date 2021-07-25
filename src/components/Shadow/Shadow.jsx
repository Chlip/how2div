import React, { useState, useContext, useEffect, useRef } from 'react'
import ShadowContext from './ShadowContext'
import Slider from '../Slider'
import Color from '../Color/Color'
import ShadowDel from './ShadowDel'
function Shadow({ index }) {

    const [offsetX, setoffsetX] = useState(0)
    const [offsetY, setoffsetY] = useState(0)
    const [blur, setblur] = useState(0)
    const [spread, setspread] = useState(0)
    const [color, setcolor] = useState([0, 0, 0, 1])
    const [isinset, setisinset] = useState(false)
    const [shadow, setshadow] = useState([])
    const componentJustMounted = useRef(true)
    const shadowctx = useContext(ShadowContext)
    
    let result = [(isinset) ? "inset" : null, `${offsetX}px`, `${offsetY}px`, `${blur}px`, `${spread}px`, `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`].join(" ")

    useEffect(() => {
        if(componentJustMounted.current){
            componentJustMounted.current = false
        }
        else{
            console.log(shadow)
            setshadow(prev => [isinset, offsetX, offsetY, blur, spread, color])
            shadowctx.setlist(prev=>{
                prev[index] = result
                return [...prev]
            })
        }
        
            
            

        



    }, [isinset, offsetX, offsetY, blur, spread, color])
    return (
        <React.Fragment>
            <ul>
                <h3>{index}</h3>
                <li>
                    <form>
                        <label htmlFor="inset">inset</label>
                        <input type="radio" name="boxtype" id="inset" onChange={() => (setisinset(prev => true))} checked={isinset} />
                        <label htmlFor="none">none</label>
                        <input type="radio" name="boxtype" id="none" onChange={() => (setisinset(prev => false))} checked={!isinset} />
                    </form>
                </li>
                <li><Slider min={-50} max={50} setstate={setoffsetX} ></Slider></li>
                <li><Slider min={-50} max={50} setstate={setoffsetY} ></Slider></li>
                <li><Slider min={0} max={50} setstate={setblur} ></Slider></li>
                <li><Slider min={0} max={50} setstate={setspread}></Slider></li>
                <li><Color setstate={setcolor}></Color></li>
            </ul>
            <ShadowDel index={index} value={shadow}></ShadowDel>
        </React.Fragment>
    )
}

export default Shadow
