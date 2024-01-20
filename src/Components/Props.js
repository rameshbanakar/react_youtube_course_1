import React from 'react'

function Props(props) {
    console.log(props)
  return (
    <div>
       <h1>hello {props.name}</h1>
    </div>
  )
}

export default Props



//props stands for properties