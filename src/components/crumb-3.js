import React from "react";

export default function Crumb3({value}){
    return <div>
    <button onClick={()=>value("crumb3")}>button3</button>
  </div>
}