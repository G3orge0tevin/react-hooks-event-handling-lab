import React from "react";

function EyesOnMe(){
    const handleFocus = () =>{
        console.log('Good!')
    };

    const handelBlur = () =>{
        console.log('Hey! Eyes on me!')
    };

    
    return(
        <div>
            <button 
            onFocus={handleFocus}
            onBlur={handelBlur}
             >'Eyes on me'</button>
        </div>
    )
}

export default EyesOnMe
