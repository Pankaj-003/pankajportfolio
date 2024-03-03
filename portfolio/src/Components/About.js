import React from 'react'

const About = () => {
  return (
<>
  {/* About me section start */}

  <div className="about-main-contanier">
  <div className="about-me-container">
  <h2 className="heading">About Me</h2>
    <p className='about-intro'>My Introduction</p>
    <div className="about-image-details">
      <div className="about-image">
    <img src="images/profile1.jpg" class="profile-picture"/> 
    </div>
    <div className="about-details">
    <p class="details">
      Hi there! My name is <span class="name">Pankaj Biswas</span> and I'm a <span class="occupation">Web Devloper</span>. I love <span class="interests">Coading</span> and I'm passionate about <span class="passion">Learn intersting thing</span>. Feel free to reach out to me at <span class="email">pankajbiswas34343@gmail.com</span> or connect with me on <span class="social-media">8794515265</span>.
    </p>
    <div className="download-cv-btn">
      <button className='BTN'>Download CV <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
      
      <span class="icon2"></span>
      </button>
    </div>
    </div>
  </div>
  </div>

  </div>


  {/* About me section end */}


</>
  )
}

export default About
