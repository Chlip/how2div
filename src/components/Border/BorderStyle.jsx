
import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import BorderWidth from './BorderWidth'
import BorderRadius from './BorderRadius'
import Color from '../Color/Color'
function BorderStyle() {
    const divctx = useContext(divContext)
    const [border, setborder] = useState(false)
    const [style, setstyle] = useState("")
    const [side, setside] = useState("border")
    const [prevSide, setprevSide] = useState("")
    
    let sideValue = `${style}`
    let result = {}
    result[side] = sideValue
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            console.log(side)
            console.log(prevSide)
            if(style==="none" || style ==="hidden"){
                setborder(false)
            }
            else{
                setborder(true)
            }
            console.log(border)
            if(divctx.div.find((e)=>{return prevSide in e})){
                let newdiv = divctx.div.map((e)=>{
                    delete e[prevSide]
                    e[side] = sideValue
                    return e
                })
                divctx.setdiv(prev=>newdiv)
            }
            else{
                divctx.setdiv(prev=>[...prev, result])
            }
            

        }
        return () => { }
    }, [style, side])
    return (
        <div>
            <select name="borderStyle" id="" onChange={(e)=>{setstyle(prev=>e.target.value)}}>
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
            <select name="border" id="" onChange={(e)=>{
                
                setside(prev=>e.target.value)
                setprevSide(prev=>side)
            }}>
                <option value="border">all</option>
                <option value="borderTop">borderTop</option>
                <option value="borderBottom">borderBottom</option>
                <option value="borderRight">borderRight</option>
                <option value="borderLeft">borderLeft</option>
            </select>
            {border && <Color name={"borderColor"}></Color>}
            {border && <BorderWidth></BorderWidth>}
        </div>
    )
}

export default BorderStyle
