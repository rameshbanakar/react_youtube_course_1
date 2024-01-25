import React from 'react'

function MemoComp(props) {
  console.log("memo comp");
  return (
    <div>{props.name}</div>
  )
}

export default MemoComp;