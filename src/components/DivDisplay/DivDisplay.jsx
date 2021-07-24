import React, {useContext} from 'react'
import './DivDisplay.css'
import DivContext from '../../context/context'
function DivDisplay({idk}) {
    const divctx = useContext(DivContext)
    let style = {}
    divctx.div.map((e)=>{style = {...style, ...e}})
    return (
        <div className={"Display"} style={style}>
            
        </div>
    )
}

export default DivDisplay
