import React, { useState, useEffect } from 'react';
import {  Link  } from "react-router-dom";
const Navbar = () => {
      // ...........................................................
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) { // Adjust this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // ..............................................
  return (
<>




    {/* <!-- Navigation bar start --> */}
    <nav id="MainNavbar" className={isSticky ? 'navbar sticky' : 'navbar'}>
      <div id="Navbar">
        <div className="nav_logo">
          <h1>Pankaj</h1>
        </div>
        <div className="main_nav_links">
          <div className="nav_links">
            <ul id="nav_acive">
              <li><Link to="/" className="a_active">Home</Link></li>
              <li><Link to="/About" className="a_active">About</Link></li>
              <li><Link to="/Skills" className="a_active">Skills</Link></li>
              <li><Link to="/Services" className="a_active">Services</Link></li>
              <li><Link to="/contact" className="a_active">Contactme</Link></li>
            </ul>
          </div>
          <div className="dark_mode_btn">
          
            <button id="night-mode"><a href="#night-mode"><img src="images/night-mode.png" alt="night-mode"
                  width="16px"/></a></button>
            {/* <!-- <button id="day-mode"><a href="#"><img src="images/day-mode.png" alt="day-mode" width="25px"></a></button> --> */}
  
          </div>
        </div>
      </div>
  
  
    </nav>
    {/* <!-- Navigation bar end --> */}










</>
  )
}

export default Navbar
