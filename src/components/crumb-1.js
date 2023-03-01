import React from "react";

export default function Crumb1({value}){
  return <div>
    <button onClick={()=>value("crumb1")}>button1</button>
  </div>
}