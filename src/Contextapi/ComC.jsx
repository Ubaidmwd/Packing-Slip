import React from 'react'
// import ComB from './ComB'
import {Name} from "../App"
const ComC = () => {
  return (
    <>
    <Name.Consumer>
    {(name)=>{
        return <h1>my name {name}</h1>
        
    }}
    </Name.Consumer>
   
    
   
    </>
  )
}

export default ComC;