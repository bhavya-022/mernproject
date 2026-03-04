import React from 'react'
import {useState} from 'react'

const State = () => {


    const[count,setCount]=useState(0)

  return (
    <div>
    <h1>state example</h1>
    <h3>count:{count}</h3>
    <button onClick={()=>setCount(count+1)}>+</button>
      
    </div>
  )
}

export default State
