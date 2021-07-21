import React, { useState, useContext, useEffect, useRef } from 'react'
import divContext from '../../context/context'
import Slider from '../Slider'
function BorderWidth(props) {
    const divctx = useContext(divContext)
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
            if (divctx.div.find((e) => { return "borderWidth" in e })) {
                let newdiv = divctx.div.map((e) => {
                    if ("borderWidth" in e) {
                        e.borderWidth = w.borderWidth
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
    }, [width])
    return (
        <div>
            <Slider name={"width"} setstate={setwidth} min={0} max={50} step={1}></Slider>


        </div>
    )
}

export default BorderWidth
