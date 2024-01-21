import React,{useState} from 'react'

function StateFuncComp() {
    const [data,setData]=useState(0)
    const buttonClicked=()=>{
      setData(data+1)
    }
  return (
    <div>
      <p>{data}</p>
      <button onClick={buttonClicked}>Click me</button>
    </div>
  );
}

export default StateFuncComp