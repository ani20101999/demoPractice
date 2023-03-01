import React, { useState } from "react";
import Para from "./para";

function GetFullName(firstname,lastname){
    return `${firstname} ${lastname}`
}

function time(cb){
    setTimeout(()=>{
        cb && cb()
    },1000)
}
// function dectime(cb){
//    setTimeout(()=>{
//     cb && cb()
//    },3000)
// }

function Greeting(){
    let [value,setvalue] = useState(0);
    
    let styleobj={
        color:"red"
    }
    
    return  <>
    <div>
        <div style={styleobj}>Counter Value: {value} </div>
        
        <button onClick={function(){
          time(()=>{setvalue(currentValue=> currentValue+=1);
          })
        
        }}>Increment</button>

        <button onClick={function(){
           setvalue(value=0)
        }}>Reset</button>

        <button onClick={function(){
          time(()=>{ setvalue(currentValue=> currentValue-=1);
          
        })
        }}>Decrement</button>

    </div>
   
    </>
}

export default Greeting;