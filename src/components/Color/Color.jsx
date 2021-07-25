import React, { useState, useContext, useEffect, useRef } from 'react'
import DivContext from '../../context/context'
import BorderContext from '../Border/BorderContext'
import ShadowContext from '../Shadow/ShadowContext'
import Slider from '../Slider'
import './Color.css'
function Color({name}) {
    const divctx = useContext(DivContext)
    const borderCtx = useContext(BorderContext)
    const shadowctx = useContext(ShadowContext)
    const [red, setred] = useState(0)
    const [green, setgreen] = useState(0)
    const [blue, setblue] = useState(0)
    const [alpha, setalpha] = useState(1)
    const componentJustMounted = useRef(true)
    let rgba = `rgba(${red},${blue},${green},${alpha})`   
    let result ={}
    result[name] = rgba
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if(borderCtx){
                borderCtx.setborder(prev=>[...prev.splice(0,3),[red,green,blue,alpha]])  
            }
            if(shadowctx){
                shadowctx.setcolor(prev=>[red,green,blue,alpha])
            }
            else{
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
            


        }
        return () => { }
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
