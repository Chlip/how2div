import React, { useState, useContext, useEffect, useRef } from 'react'
import ShadowContext from './ShadowContext'
import Shadow from './Shadow'
import ShadowAdd from './ShadowAdd'
import DivContext from '../../context/context'
function ShadowList() {
    const [list, setlist] = useState([""])
    const divctx = useContext(DivContext)
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false
        }
        else {
            let newlist = list.join(",")
            if (divctx.div.find((e) => { return "boxShadow" in e })) {

                let newdiv = divctx.div.map((e) => {
                    if ("boxShadow" in e) {
                        e["boxShadow"] = newlist
                    }
                    return e
                })
                divctx.setdiv(prev => newdiv)
            }
            else {
                divctx.setdiv(prev => [...prev, {boxShadow:newlist}])
            }
        }


    }, [list])
    return (
        <ShadowContext.Provider value={{ list, setlist }}>
            <ShadowAdd></ShadowAdd>
            {list.map((e, i) => {
                return (
                    <Shadow key={i} index={i}></Shadow>
                )
            })}

        </ShadowContext.Provider>


    )
}

export default ShadowList
