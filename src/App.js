import React from 'react'
import "./App.css"
import FuncComp from './Components/FuncComp'
import {ArrowComp} from "./Components/ArrowComp"
import ClassComp from './Components/ClassComp'
const App = () => {
  return (
    <div>
     {/* <FuncComp/> */}
     <ArrowComp/>
     <ClassComp/>
    </div>
  )
}

export default App
