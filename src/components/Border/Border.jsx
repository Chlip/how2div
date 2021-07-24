import React, {useState, useContext, useEffect} from 'react'
import BorderContext from './BorderContext'
import BorderStyle from './BorderStyle'
import BorderWidth from './BorderWidth'
import BorderSide from './BorderSide'
import DivContext from '../../context/context'
function Border() {
    const [border, setborder] = useState(["border",10,"none",[0,0,0,1]])
    const [result, setresult] = useState({})
    const borderctx = useContext(BorderContext)
    const divctx = useContext(DivContext)
    
    result[border[0]] = `${border[1]}px ${border[2]} rgba(${border[3][0]},${border[3][1]},${border[3][2]},${border[3][3]})`
    useEffect(() => {
        
        if (divctx.div.find(e=>border[0] in e)) {
            let newdiv = divctx.div.filter(e=>{
                return e[border[0]] !== "border"
            })
            console.log(newdiv)
            divctx.setdiv(prev=>newdiv)

        }
        
        else {
            divctx.setdiv(prev => [...prev, result])
        }
        return () => {
            
        }
    }, [border])
    return (
        <div>
            <BorderContext.Provider value={{border, setborder}}>
                <BorderStyle></BorderStyle>
                <BorderSide></BorderSide>
            </BorderContext.Provider>
            
            
        </div>
    )
}

export default Border
