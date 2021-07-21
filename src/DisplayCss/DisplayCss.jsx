import React, {useEffect} from 'react'

function DisplayCss({div}) {
    useEffect(() => {
        console.log(style)
        return () => {
            
        }
    }, [div])
    let style = {}
    div.map((e)=>{style = {...style, ...e}})
    
    return (
        <div>
            
        </div>
    )
}

export default DisplayCss
