import React, { useState } from "react";


export default function Toggling(){
      let[toggle,setToggle] = useState(false)

   return <div>
    {(toggle===false && <span>Even is unmounted</span>)}
    {(toggle===true && <span>odd is unmounted</span>)}
    <div>
    <button onClick={()=> setToggle(toggle => !toggle)}>
        {toggle==true ? "Even":"odd"}
    </button>
    </div>
   </div>
}

