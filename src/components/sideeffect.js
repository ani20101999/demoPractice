import React, { useEffect, useState } from "react";

function SideEffect({name}){
       let[time,setTime] = useState(new Date().toLocaleTimeString());
       let[date,setDate] = useState(new Date().toLocaleDateString());


       useEffect(()=>{
        console.log("the updated name" , name)
       } , [name])
    return <span>
        {time}
        <button onClick={()=> setTime(new Date().toLocaleTimeString())}>update</button>
        {date}
        
        <button onClick={()=> setDate(new Date().toLocaleDateString())}>change</button>
        <div>
            name:{name}
        </div>
    </span>
    
}

 export default function Examples(){
    let [name,setName] = useState("ANIMESH")
    return <div>
        time:<SideEffect name={name} />
        <button onClick={() => setName("RISHU")}>UPDATE</button>
    </div>
}


;
