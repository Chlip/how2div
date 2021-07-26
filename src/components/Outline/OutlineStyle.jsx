import React from 'react'

function OutlineStyle({ setstate }) {
    return (
        <select name="outlineStyle" id="" onChange={(e) => {
            setstate(prev => e.target.value)
        }}>
            <option value="none">none</option>
            <option value="hidden">hidden</option>
            <option value="dashed">dashed</option>
            <option value="dotted">dotted</option>
            <option value="double">double</option>
            <option value="inset">inset</option>
            <option value="outset">outset</option>
            <option value="ridge">ridge</option>
            <option value="solid">solid</option>
        </select>
    )
}

export default OutlineStyle
