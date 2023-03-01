import React, { useEffect, useState } from "react"

function ToDOApp(){

    let [Todolist,setTodolist] = useState([])
    const [error ,setError] = useState({
        error:false,
        message:""
    })
    let [Todotext,setTodotext] = useState("")

    // useEffect(()=>{

    //     setTodolist([...Todolist,"shubham"])
    // },[Todotext])

    const validateField = (e) => {
        if(!e.target.value){
            setError({
                error:true,
                message:"This field is required"
            })
        }else{
            setError({
                error:false,
                message:""
            })
        }
            setTodotext(e.target.value)
    
    }

return <>
<h3>To DO APP</h3>
<form method="POST" action="#" onSubmit={(e)=>{
    e.preventDefault();
    setTodolist(Todolist=>([
        ...Todolist,
        Todotext
    ]) )
    setTodotext("")
}}>
<div>
    <label>Input:-</label>
    <input 
      type="text"
      placeholder="Enter your list"
      onChange={(e)=>validateField(e)}
      value={Todotext}/>
   {error.error && <span>{error.message}</span>}
</div>
<div>
    <button type="submit">ADD</button>
</div>
</form>
<ul>
    {
        Todolist.map((todo,index)=>{
         return   <li key={index}>{todo}</li>
    })
    }
</ul>
</>
}

export default ToDOApp