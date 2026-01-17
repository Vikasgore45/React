import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import App from './App.jsx'
import About from './About.jsx'
import NavScrollExample from './NavScrollExample.jsx'
import ListGroupWithHeaderExample from './ListGroupWithHeaderExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavScrollExample />
    <ListGroupWithHeaderExample />
    <App />
    <Home />
    <About />
  </StrictMode>,
)
