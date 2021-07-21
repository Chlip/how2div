import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
function BorderColor() {
    const divctx = useContext(divContext)
    const [color, setcolor] = useState("")
    let br = {
        borderColor: `${color}`
    }
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if(divctx.div.find((e)=>{return "borderColor" in e})){
                let newdiv = divctx.div.map((e)=>{
                    if("borderColor" in e){
                        e.borderColor = br.borderColor
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
    }, [color])
    return (
        <div>
            <label htmlFor="color">add color value in hex: </label>
            <input type="text" id="color" onChange={(e)=>{setcolor(prev=>e.target.value)}}/>
        </div>
    )
}

export default BorderColor
