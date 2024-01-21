import React from 'react'
import "./App.css"
import FuncComp from './Components/FuncComp'
import {ArrowComp} from "./Components/ArrowComp"
import ClassComp from './Components/ClassComp'
import Jsx from "./Components/jsx"
import Props from "./Components/Props"
import PropsClassComp from './Components/PropsClassComp'
import StateFuncComp from './Components/StateFuncComp'
import StateClassComp from './Components/StateClassComp'
const App = () => {
  return (
    <div>
      {/* <Jsx /> */}
      {/* <FuncComp/> */}
      {/* <ArrowComp/>
     <ClassComp/> */}
     {/* <Props name="ramesh">
      <p>this is childern tag</p>
     </Props> */}
     {/* <PropsClassComp name="ramesh"/> */}
     {/* <StateFuncComp/> */}
     <StateClassComp/>
    </div>
  );
}

export default App
