import React, {useState} from 'react'
import './Button.css'
function Button(props) {
    const [active, setactive] = useState(false)
    return (
        <div className="btn">
            <button onClick={()=>setactive(prev=>!prev)}>{props.name}</button>
            {active &&  props.children}
        </div>
    )
}

export default Button
