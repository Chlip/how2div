import React from 'react'

function DisplayText({div}) {
    return (
        <form action="" style={{"marginLeft":"50px"}}>
            <textarea name="styleText" id="" cols="30" rows="10" value={div}></textarea>
        </form>
        
    )
}

export default DisplayText
