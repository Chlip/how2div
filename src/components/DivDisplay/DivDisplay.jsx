import React, {useContext} from 'react'
import './DivDisplay.css'
import divContext from '../../context/context'
function DivDisplay({idk}) {
    const divctx = useContext(divContext)
    let style = {}
    divctx.div.map((e)=>{style = {...style, ...e}})
    return (
        <div className={"Display"} style={style}>
            
        </div>
    )
}

export default DivDisplay
