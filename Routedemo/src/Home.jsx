
import Button from 'react-bootstrap/Button';
export default function Home() {
    function test (){
        alert("You clicked me!")

    }
 

  return (
    <>
      
        <h1>Welcome to the Routedemo Home</h1>
        <Button variant="dark" onClick={test}>Dark</Button>
        
    

      
    </>
  )
}
