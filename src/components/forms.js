import React, { useState } from "react";
import "../styles/form.css"

export default function CreateForm(){

  let [formData,setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    gender : ""
})

     function SubmitForm(e){
        console.log("form submitted");
        e.preventDefault()
        console.log(formData)
     }

     function updateData(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value})

     }

  return  <div id="container">
    <form method="POST" action="#" onSubmit={SubmitForm}>
        <div className="header">
      <label>First Name</label><br></br>
        <input 
           type="text"
           placeholder="john"
           name="firstName"
           onChange={(e)=> updateData(e)}
           value={formData.firstName}
           >
           </input>
       </div>

       <div className="header">
       <label>Last Name</label><br></br>
       <input 
           type="text"
           placeholder="wick"
           name="lastName"
           onChange={(e)=> updateData(e)}
           value={formData.lastName}
           >
           </input>
       </div>
       
       <div className="header">
       <label>Email</label><br></br>
       <input 
           type="email"
           placeholder="johnwick@gmail.com"
           name="email"
           onChange={(e)=> updateData(e)}
           value={formData.email}
           >
           </input>
       </div>
       
       <div className="header">
       <label>Gender</label><br></br>
       <select 
       name="gender"
       onChange={(e)=> updateData(e,"gender")}
           value={formData.gender}>

        <option>Male</option>
        <option>Female</option>
        <option>NA</option>

       </select>

       </div>

       <div className="footer">
        <button type="submit">Submit</button>
       </div>
    </form>
   </div>

}