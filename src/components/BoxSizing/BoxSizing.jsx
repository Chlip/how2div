import React, { useState, useContext, useEffect, useRef } from 'react'
import DivContext from '../../context/context'
function BoxSizing() {
    const divctx = useContext(DivContext)
    const [box, setbox] = useState(0)
    let w = {
        boxSizing: `${(box===0)?"content-box":"border-box"}`
    }
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            if (divctx.div.find((e) => { return "boxSizing" in e })) {
                let newdiv = divctx.div.map((e) => {
                    if ("boxSizing" in e) {
                        e.boxSizing = w.boxSizing
                    }
                    return e
                })
                divctx.setdiv(prev => newdiv)
            }
            else {
                divctx.setdiv(prev => [...prev, w])
            }


        }
        return () => { }
    }, [box])
    return (
        <div>
            <form>
                <label htmlFor="border">border-box</label>
                <input type="radio" name="boxtype" id="border" onChange={()=>(setbox(prev=>1))} checked={(box===1)?true:false}/>
                <label htmlFor="content">content-box</label>
                <input type="radio" name="boxtype" id="content" onChange={()=>(setbox(prev=>0))} checked={(box===0)?true:false}/>
            </form>
        </div>
    )
}

export default BoxSizing
