import React from 'react'
import "./App.css"
import FuncComp from './Components/FuncComp'
import {ArrowComp} from "./Components/ArrowComp"
import ClassComp from './Components/ClassComp'
import Jsx from "./Components/jsx"
import Props from "./Components/Props"
const App = () => {
  return (
    <div>
      {/* <Jsx /> */}
      {/* <FuncComp/> */}
      {/* <ArrowComp/>
     <ClassComp/> */}
     <Props name="ramesh"/>
    </div>
  );
}

export default App
