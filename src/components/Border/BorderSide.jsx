import React, {useState, useContext, useEffect} from 'react'
import BorderContext from './BorderContext'
function BorderSide() {
    const [side, setside] = useState("border")
    const [old, setold] = useState("")
    const borderctx = useContext(BorderContext)
    useEffect(() => {
        borderctx.setborder(prev=>[side,prev[1],prev[2],prev[3]])
        return () => {
            
        }
    }, [side])
    return (
        <div>
            <select name="borderStyle" id="" onChange={(e)=>{
                setold(prev=>side)
                setside(prev=>e.target.value)
                }}>
                <option value="border">all</option>
                <option value="borderRight">borderRight</option>
                <option value="borderLeft">borderLeft</option>
                <option value="borderTop">borderTop</option>
                <option value="borderBottom">borderBottom</option>
            </select>
        </div>
    )
}

export default BorderSide
