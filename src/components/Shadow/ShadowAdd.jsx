import React, {useContext} from 'react'
import ShadowContext from './ShadowContext'

function ShadowAdd() {
    const shadowctx = useContext(ShadowContext)
    return (
        <button onClick={()=>shadowctx.setlist(prev=>[...prev,""])}>Add Shadow</button>
    )
}

export default ShadowAdd
