import React, {useState} from 'react'
import './Button.css'
function Button(props) {
    const [active, setactive] = useState(true)
    return (
        <div className="btn">
            <button onClick={()=>setactive(prev=>!prev)}>{props.name}</button>
            <div className="content" hidden={active}>{props.children}</div>
            
        </div>
    )
}

export default Button
