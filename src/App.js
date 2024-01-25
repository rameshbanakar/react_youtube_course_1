import React, { useState } from "react";
import "./App.css";
// import FuncComp from './Components/FuncComp'
// import {ArrowComp} from "./Components/ArrowComp"
// import ClassComp from './Components/ClassComp'
// import Jsx from "./Components/jsx"
// import Props from "./Components/Props"
// import PropsClassComp from './Components/PropsClassComp'
// import StateFuncComp from './Components/StateFuncComp'
// import StateClassComp from './Components/StateClassComp'
// import DestructureProps from './Components/DestructureProps'
// import EventHandlingFunc from "./Components/EventHandlingFunc"
// import EventHandlingClass from './Components/EventHandlingClass'
// import EventBinding from './Components/EventBinding'
// import ConditionalRendering from './Components/ConditionalRendering'
import MemoComp from "./Components/MemoComp";

const App = () => {
  const [name,setName]=useState()
  console.log();

  setInterval(() => {
    setName("ramesh");
  }, 2000);

  
  return (
    <div>
     <MemoComp name={name}/>
    </div>
  );
};

export default App;
