import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import Slider from '../Slider'
function BgColor(props) {
    const divctx = useContext(divContext)
    const [red, setred] = useState(0)
    const [green, setgreen] = useState(0)
    const [blue, setblue] = useState(0)
    const [alpha, setalpha] = useState(1)
    let rgba = {
        backgroundColor: `rgba(${red},${blue},${green},${alpha})`
    }
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if (divctx.div.find((e) => { return "backgroundColor" in e })) {

                let newdiv = divctx.div.map((e) => {
                    if ("backgroundColor" in e) {
                        e.backgroundColor = rgba.backgroundColor
                    }
                    return e
                })
                divctx.setdiv(prev => newdiv)
            }
            else {
                divctx.setdiv(prev => [...prev, rgba])
            }


        }
        return () => { }
    }, [red, blue, green, alpha])
    return (
        <div>
            <Slider name={"red"} setstate={setred} min={0} max={255} step={1} ></Slider>
            <Slider name={"green"} setstate={setgreen} min={0} max={255} step={1} ></Slider>
            <Slider name={"blue"} setstate={setblue} min={0} max={255} step={1} ></Slider>
            <Slider name={"alpha"} setstate={setalpha} min={0} max={1} step={0.1} ></Slider>

        </div>
    )
}

export default BgColor
