import React, { useState, useContext, useEffect, useRef } from 'react'
import BorderContext from './BorderContext'
import Slider from '../Slider'
function BorderWidth(props) {
    const borderctx = useContext(BorderContext)
    const [width, setwidth] = useState(0)
    let w = {
        borderWidth: `${width}px`
    }
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            borderctx.setborder(prev=>[prev[0], width, prev[2],prev[3]])
        }
        return () => { }
    }, [width])
    return (
        <div>
            <Slider name={"width"} setstate={setwidth} min={0} max={50} step={1}></Slider>


        </div>
    )
}

export default BorderWidth
