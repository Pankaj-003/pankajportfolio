import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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
    <div>
    {/* <!-- Navigation bar start --> */}
    <nav id="MainNavbar" className={isSticky ? 'navbar sticky' : 'navbar'}>
      <div id="Navbar">
        <div className="nav_logo">
          <h1>Pankaj</h1>
        </div>
        <div className="main_nav_links">
          <div className="nav_links">
            <ul id="nav_acive">
              <li><a href="#Home" className="a_active">Home</a></li>
              <li><a href="#About" className="a_active">About</a></li>
              <li><a href="#Skills" className="a_active">Skills</a></li>
              <li><a href="#Srvices" className="a_active">Services</a></li>
              <li><a href="#Contactme" className="a_active">Contactme</a></li>
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
  
  
    {/* <!-- header section start --> */}
    <header id="main-header">
  <div className="header">
      <div className="header-social-links">
        <div className="header-social-images">
          <a href="#linkedin"><img src="images/linkedin.png" alt="linkedin" width="20px"/></a>
        </div>
        <div className="header-social-images">
          <a href="#github"><img src="images/github.png" alt="github" width="20px"/></a>
        </div>
        <div className="header-social-images">
          <a href="#facebook"><img src="images/facebook.png" alt="facebook" width="20px"/></a>
        </div>
        <div className="header-social-images">
          <a href="#instagram"><img src="images/instagram.png" alt="instagram" width="20px"/></a>
        </div>
        
        
  
  
  
      </div>
  
  <div className="header-details">
  
  <p id="header-details-glowing-text">Hi,I'am Pankaj</p>
  <h3>Frontend Devloper</h3>
  
    <p id="header-details-sub-details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sed eum assumenda? Praesentium magni tempora nostrum modi quos e</p>
    <a href="" className="contact-button">
      Contact Me 
      
    </a>
  </div>
  <div className="header-image">
    <img src="images/profile1.jpg" alt="" width="250px"/>
  </div>
    </div>
  
    </header>
    {/* <!-- header section end --> */}
  
  
  
  
  
  
  
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem maxime, est esse omnis unde quaerat voluptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas uptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamincidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatuuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamuptates facilis ratione distinctio repudiandae tempora illo, veritatis, molestias vero! Autem vel placeat debitis expedita minima, quasi facere est aperiam adipisci animi quos cum dolorem tempore suscipit eius laborum porro dicta corrupti tempora nesciunt ab error? Ut saepe quibusdam omnis. Qui obcaecati, veniam nihil recusandae rerum molestiae, unde voluptas incidunt eos optio, maiores sint laborum eius natus impedit quam labore. Exercitationem reprehenderit architecto eveniet adipisci voluptas aspernatur pariatur aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdamr aut deleniti ratione quaerat molestiae porro ipsum quos maxime nisi officiis, nulla, ea soluta corrupti quibusdam.</p>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    <script src="JS/style.js"></script>
  </div>
  );
}

export default App;
