
import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import BorderWidth from './BorderWidth'
import Color from '../Color/Color'
import BorderContext from './BorderContext'
function BorderStyle() {
    const borderctx = useContext(BorderContext)
    const [border, setborder] = useState(false)
    const [style, setstyle] = useState("")
    const componentJustMounted = useRef(true)
    useEffect(() => {

        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if(style==="none" || style ==="hidden"){
                setborder(false)
            }
            else{
                setborder(true)
            }
            borderctx.setborder(prev=>[prev[0],prev[1],style,prev[3]])
        }
        return () => { }
    }, [style])
    return (
        <div>
            <select name="borderStle" id="" onChange={(e)=>{
                setstyle(prev=>e.target.value)
                }}>
                <option value="none">none</option>
                <option value="hidden">hidden</option>
                <option value="dashed">dashed</option>
                <option value="dotted">dotted</option>
                <option value="double">double</option>
                <option value="inset">inset</option>
                <option value="outset">outset</option>
                <option value="ridge">ridge</option>
                <option value="solid">solid</option>
            </select>
            {border && <Color name={"borderColor"}></Color>}
            {border && <BorderWidth></BorderWidth>}
        </div>
    )
}

export default BorderStyle
