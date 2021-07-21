import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import Slider from '../Slider'
function BorderRadius({corner}) {
    const divctx = useContext(divContext)
    const [all, setall] = useState(false)
    const [r1, setr1] = useState(0)
    const [r2, setr2] = useState(0)
    const [r3, setr3] = useState(0)
    const [r4, setr4] = useState(0)
    let br = {
        borderRadius: `${r1}% ${(all)?r1:r2}% ${(all)?r1:r3}% ${(all)?r1:r4}%`
    }
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if(divctx.div.find((e)=>{return "borderRadius" in e})){
                let newdiv = divctx.div.map((e)=>{
                    if("borderRadius" in e){
                        e.borderRadius = br.borderRadius
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
    }, [r1,r2,r3,r4])
    return (
        <div>
            <label htmlFor="all">all corners</label>
            <input type="checkbox" onClick={()=>setall(prev=>!prev)} id="all" name="all"/>
            <Slider name={"radius"} setstate={setr1} min={0} max={50} step={1}></Slider>
            {!(all) ?<Slider name={"radius"} setstate={setr2} min={0} max={50} step={1}></Slider>: ""}
            {!(all) ?<Slider name={"radius"} setstate={setr3} min={0} max={50} step={1}></Slider>: ""}
            {!(all) ?<Slider name={"radius"} setstate={setr4} min={0} max={50} step={1}></Slider>: ""}
           
            
        </div>
    )
}

export default BorderRadius
