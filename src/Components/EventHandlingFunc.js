import React from 'react'

export default function EventHandlingFunc() {
    const eventHandling=()=>{
        console.log(" hello from eventHandling");
    }
  return (
    <div>
        <button onClick={eventHandling}>Click me </button>
    </div>
  )
}
