import './App.css';
import pic from './assets/react.svg';
export default function App() {
  return (
    <div className='a'>
      <h1 id='h'>Hello, World!</h1>
      <img src={pic} height={100} width={250} alt="" />
      <p>This is my Technical Skills</p>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Node.js</li>  
      </ul>
    </div>
  );
}