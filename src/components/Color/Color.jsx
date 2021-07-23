import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import Slider from '../Slider'
import './Color.css'
function Color({name}) {
    const divctx = useContext(divContext)
    const test = useRef(0)
    const [red, setred] = useState(test.current)
    const [green, setgreen] = useState(0)
    const [blue, setblue] = useState(0)
    const [alpha, setalpha] = useState(1)
    const componentJustMounted = useRef(true)
    let rgba = `rgba(${red},${blue},${green},${alpha})`   
    let result ={}
    result[name] = rgba
    useEffect(() => {
        console.log(name)
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if (divctx.div.find((e) => { return name in e })) {

                let newdiv = divctx.div.map((e) => {
                    if (name in e) {
                        e[name] = rgba
                    }
                    return e
                })
                divctx.setdiv(prev => newdiv)
            }
            else {
                divctx.setdiv(prev => [...prev, result])
            }


        }
        return () => { test.current = red }
    }, [red, blue, green, alpha])
    return (
        <div className={"container"}>
            <Slider name={"red"} setstate={setred} min={0} max={255} step={1} ></Slider>
            <Slider name={"green"} setstate={setgreen} min={0} max={255} step={1} ></Slider>
            <Slider name={"blue"} setstate={setblue} min={0} max={255} step={1} ></Slider>
            <Slider name={"alpha"} setstate={setalpha} min={0} max={1} step={0.1} ></Slider>
        </div>
    )
}

export default Color
