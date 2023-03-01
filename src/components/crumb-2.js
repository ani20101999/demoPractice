import React from "react";

export default function Crumb2({value}){
    return <div>
    <button onClick={()=>value("crumb2")}>button2</button>
  </div>
}