import React, {useContext, useState, useEffect, useRef} from 'react'
import DivContext from '../../context/context'
import Slider from '../Slider'
import Color from '../Color/Color'
import OutlineStyle from './OutlineStyle'
function Outline() {
    const divctx = useContext(DivContext)
    const [color, setcolor] = useState([0,0,0,0])
    const [width, setwidth] = useState(0)
    const [style, setstyle] = useState("")
    const [outline, setoutline] = useState([color,style, width])
    const componentJustMounted = useRef(true)
    useEffect(() => {
        if(componentJustMounted.current){
            componentJustMounted.current=false
        }
        else{
            setoutline(prev=>[color,style,width])
            if (divctx.div.find((e) => { return "outline" in e })) {

                let newdiv = divctx.div.map((e) => {
                    if ("outline" in e) {
                        e["outline"] = `rgba(${outline[0][0]},${outline[0][1]},${outline[0][2]},${outline[0][3]}) ${style} ${width}px`
                    }
                    return e
                })
                divctx.setdiv(prev => newdiv)
            }
            else {
                divctx.setdiv(prev => [...prev, {outline:outline}])
            }
        }
        
    }, [color,width,style])
    return (
        <ul>
            <li><Color setstate={setcolor}></Color></li>
            <li><OutlineStyle setstate={setstyle}></OutlineStyle></li>
            <li><Slider min={0} max={50} setstate={setwidth} name={"outline width"}></Slider></li>
        </ul>
    )
}

export default Outline
