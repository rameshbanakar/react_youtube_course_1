import React from 'react'

export default function jsx() {
  return (
   React.createElement("div",null,React.createElement('h1',{id:"hello",className:"dummyClass"},"hello world"))
  )
}

// jsx stands for javascript xml which help us to write the HTML code in the react application

// jsx diff compare to html 

// 1.class-->className
// 2.for-->htmlFor 
// 3.camleCase proprty naming convetion
//    onclick-->onClick