import React from "react";


let CITIES=[
    "bilaspur",
    "kolkata",
    "bangalore",
    "hyderabad",
    "hyderabad"
]

function getClassName(index){
    return ((index+1)%2===0) ? "even" : "odd"  
} 

function ListExample(){
  return <div>
  <h4>
    Cities:
  </h4>
  <ul>
    {
        CITIES.map((city,index) =>
            <li key={index}
            className={getClassName(index)}
            > {city} </li>  
        )}
  </ul>
  </div>
}

export default ListExample