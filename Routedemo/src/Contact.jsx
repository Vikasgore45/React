
import Button from 'react-bootstrap/Button';
export default function Contact() {
    function test (){
        alert("You clicked me!")

    }
 

  return (
    <>
      
        <h1>Welcome to the Routedemo Contact Page</h1>
        <Button variant="danger" onClick={test}>Danger</Button>
        
     
      
    </>
  )
}
