import React, { useState } from "react";
import Crumb1 from "./crumb-1";
import Crumb2 from "./crumb-2";
import Crumb3 from "./crumb-3";

export default function Parent(){
   let[cru1,setCru1] = useState(true);
   let[cru2,setCru2] = useState(false);
   let[cru3,setCru3] = useState(false);


   function onClicking(val){
       if(val==="crumb1"){
          setCru1(false);
          setCru2(true)
          setCru3(false)
       }
       else if(val==="crumb2"){
         setCru2(false)
         setCru3(true)
         setCru1(false)
       }
       else{
         setCru2(false)
         setCru3(false)
         setCru1(true)
       }
   }
 return <>
 <div id="main1">
    <div className="nav-bar">
     <ul>
        <li className={cru1 && "active"} onClick={()=>{
          setCru1(true)
          setCru2(false)
          setCru3(false)
        }}>crumb-1</li>
        <li className={cru2 && "active"}
        onClick={()=>{
          setCru1(false)
          setCru2(true)
          setCru3(false)
        }}>crumb-2</li>
        <li className={cru3 && "active"}
        onClick={()=>{
          setCru1(false)
          setCru2(false)
          setCru3(true)}}>crumb-3</li>
     </ul>
    </div>
    <div className="body">
      {cru1 && <Crumb1 value={onClicking} />}
      {cru2 && <Crumb2 value={onClicking}/>}
      {cru3 && <Crumb3 value={onClicking}/>}
      </div>
 </div>
 </>
}