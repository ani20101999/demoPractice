import React, {Component, useState} from "react";
import '../styles/App.css';
import Para from "./para";
import Greeting from "./Greeetings";
import Cars from "./cars";
import EventHandler from "./eventhandler";
import CreateForm from "./forms";
import ListExample from "./listexample";
import Examples from "./sideeffect";
import ToDOApp from "./todoapp";
import Toggling from "./toggling";
import Parent from "./parent";

const App = () => {
 
  return  <div>
    <Parent />
    {/* <ToDOApp /> */}
    {/* <SideEffect /> */}
    {/* <Examples /> */}
    {/* <ListExample /> */}
    {/* <CreateForm /> */}
    {/* <EventHandler /> */}
    {/* <Card />
    <Greeting /> */}
  </div>  
    
    
}


export default App;
