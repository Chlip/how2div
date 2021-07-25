import React, { useContext } from 'react'
import ShadowContext from './ShadowContext'

function ShadowDel({ index, value }) {
    const shadowctx = useContext(ShadowContext)
    return (

        <button onClick={() => {
            shadowctx.setlist(prev=>{
                prev[index] = null
                return prev.filter(e=>e !== null)
            })

        }}>X</button>

    )
}

export default ShadowDel
