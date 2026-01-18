
import Button from 'react-bootstrap/Button';
export default function About() {
    function test (){
        alert("You clicked me!")

    }
 

  return (
    <>
      
        <h1>Welcome to the Routedemo About Page</h1>
        <Button variant="success" onClick={test}>Success</Button>
        
     
      
    </>
  )
}
