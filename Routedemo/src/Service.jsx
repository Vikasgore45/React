
import Button from 'react-bootstrap/Button';
export default function Service() {
    function test (){
        alert("You clicked me!")

    }
 

  return (
    <>
    
        <h1>Welcome to the Routedemo Service Page</h1>
        <Button variant="info" onClick={test}>Info</Button>
        
      
      
    </>
  )
}
