import React, {useState} from 'react'

function Slider({ min, max, step, setstate, name, init }) {
    const [value, setvalue] = useState((name==="alpha")?1:0)
    function sliderHandler(e) {
        setstate(prev => e.target.value)
        setvalue(prev => e.target.value)
    }
    return (
        <React.Fragment>
            
            <input type="range" min={min} max={max} step={step} onChange={sliderHandler} value={(init)?init:value} />
            {name}{value}
        </React.Fragment>
    )
}

export default Slider
