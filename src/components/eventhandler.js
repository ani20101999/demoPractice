import { useState } from "react";
import React from "react";

export default function EventHandler(){
  
    let [hideText,setHideText] = useState(false)
    console.log(hideText)
  return  <div>
    {(!hideText && <span>this is a text</span>)}
       <div >
       <button onClick={()=>{setHideText(prevValue => !prevValue)}}
       >{hideText==true ? "show it!" : "Hide it!"}</button>
       </div>
       
    </div>
}

