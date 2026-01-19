
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
export default function Home() {
  
  const [nm,SetNm]=useState("")
  let getnm=(e)=>{
   SetNm(e.target.value)
  }
 function test(){
    alert("You Clicked Me...."+nm)
 }
    
 

  return (
    <>
      
        <h1>Welcome to the Routedemo Home</h1>
         Name <input type='text' onChange={getnm}></input>
        <Button variant="dark" onClick={test}>Dark</Button>
        <h1>{nm}</h1>
        
    

      
    </>
  )
}
