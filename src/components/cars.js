 import React from "react"
import Car from "./car"  

 
     let carList = [{
        name:"mercedes",
        price:1000,
     },
    {
        name:"porsche",
        price:2000,  
    },
{
         name:"lexus",
         price:3000,
},
{
         name:"bucatti",
         price:4000,
}
]
 
function Cars(){
  

return <div>
    <ul>
       {carList.map((car)=> {
           return  <li>Model: {car.name} || Price: {car.price} </li>
       })}
    </ul>
</div>
 }
 
 export default Cars