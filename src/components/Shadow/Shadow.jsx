import React, { useState, useContext, useEffect, useRef } from 'react'
import ShadowContext from './ShadowContext'
import Slider from '../Slider'
import Color from '../Color/Color'
import DivContext from '../../context/context'
function Shadow() {

    const [offsetX, setoffsetX] = useState(0)
    const [offsetY, setoffsetY] = useState(0)
    const [blur, setblur] = useState(0)
    const [spread, setspread] = useState(0)
    const [color, setcolor] = useState([0, 0, 0, 1])
    const [isinset, setisinset] = useState(false)
    const [shadow, setshadow] = useState([1])
    const componentJustMounted = useRef(true)
    const divctx = useContext(DivContext)
    let result = [(isinset)?"inset": null, `${offsetX}px`, `${offsetY}px`, `${blur}px`, `${spread}px`, `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`].join(" ")
    
    useEffect(() => {
        console.log(result)
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if (divctx.div.find((e) => { return "boxShadow" in e })) {
                let newdiv = divctx.div.map((e) => {
                    if ("boxShadow" in e) {
                        e["boxShadow"] = result
                    }
                    return e
                })
                divctx.setdiv(prev => newdiv)
            }
            else {
                divctx.setdiv(prev => [...prev, {"boxShadow": result}])
            }


        }
    }, [result])
    return (
        <ShadowContext.Provider value={{ shadow, setshadow, setcolor }}>
            {shadow.map((e, i) => {
                return (
                    <ul>
                        <h3>{i}</h3>
                        <li>
                            <form>
                                <label htmlFor="inset">inset</label>
                                <input type="radio" name="boxtype" id="inset" onChange={() => (setisinset(prev => true))} checked={isinset} />
                                <label htmlFor="none">none</label>
                                <input type="radio" name="boxtype" id="none" onChange={() => (setisinset(prev => false))} checked={!isinset} />
                            </form>
                        </li>
                        <li><Slider min={-50} max={50} setstate={setoffsetX} index={i}></Slider></li>
                        <li><Slider min={-50} max={50} setstate={setoffsetY} index={i}></Slider></li>
                        <li><Slider min={0} max={50} setstate={setblur} index={i}></Slider></li>
                        <li><Slider min={0} max={50} setstate={setspread} index={i}></Slider></li>
                        <li><Color></Color></li>
                    </ul>
                )
            })}
        </ShadowContext.Provider>
    )
}

export default Shadow
