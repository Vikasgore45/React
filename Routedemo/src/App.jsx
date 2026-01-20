import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavScroll from "./NavScroll";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Service from "./Service";
import API from "./API";
import UserLogin from "./UserLogin";
import { useState } from "react";
import { Navigate } from "react-router-dom";


// ProtectedRoute component
function ProtectedRoute({ isLoggedIn, children }) {
   return isLoggedIn ? children : <Navigate to="/" replace />;
 }


export default function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Router>
      <NavScroll/> {/* Always render Navbar component */}
      <Routes>
        
       {/* <Route path="/" element={<UserLogin/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/service" element={<Service />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/api" element={<API />} /> */}

        <Route path="/" element={<UserLogin setIsLoggedIn={setIsLoggedIn} />} />

         <Route path="/home" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />   </ProtectedRoute> } />   

      <Route path="/about" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <About />   </ProtectedRoute> } />

       <Route path="/service" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Service />   </ProtectedRoute> } />

       <Route path="/contact" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact />   </ProtectedRoute> } />

       <Route path="/api" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <API />   </ProtectedRoute> } />


      </Routes>
    </Router>

      <div>
        
        
      </div>
      
    </>
  )
}


