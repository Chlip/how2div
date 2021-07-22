
import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import BorderWidth from './BorderWidth'
import BorderRadius from './BorderRadius'
import Color from '../Color/Color'
function BorderStyle() {
    const divctx = useContext(divContext)
    const [border, setborder] = useState(false)
    const [style, setstyle] = useState("")
    let br = {
        borderStyle: `${style}`
    }
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
            console.log(border)
            if(divctx.div.find((e)=>{return "borderStyle" in e})){
                let newdiv = divctx.div.map((e)=>{
                    if("borderStyle" in e){
                        e.borderStyle = br.borderStyle
                    }
                    return e
                })
                divctx.setdiv(prev=>newdiv)
            }
            else{
                divctx.setdiv(prev=>[...prev, br])
            }
            

        }
        return () => { }
    }, [style])
    return (
        <div>
            <select name="borderStle" id="" onChange={(e)=>{setstyle(prev=>e.target.value)}}>
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
