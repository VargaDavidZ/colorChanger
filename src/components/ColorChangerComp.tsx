import { useState } from "react";

function randomColor()
{
    let myNum = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#" + myNum;


    return myNum;
}


export function ColorPicker()
{


    const [color, setColor] = useState("");

    return(

        <>
        
        <button onClick={ e => {console.log("#" + randomColor())} }> Random Color Generator </button>
        </>


    )
   







}