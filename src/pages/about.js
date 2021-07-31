import React from 'react';
import './about.css'
import {FaGithub} from 'react-icons/fa';


const About = () => {
  return (
    <div class = "about">
      <div class="about-section">
        <div class="inner-container">
            <h1>About Us</h1>
            <p class="text">
            How Fair's the Air?
              <p>
              The ubiquity of cheap sensors and networked devices means there's more and more live, publicly available air quality data. But is that enough to pull together into something that can provide real-time air quality alerts?
              </p>
              <p>
              This project will focus on researching publicly available data sources, and is really about putting together a service that adds value on top of them using the cloud as a platform. As an open-ended project, the focus is up to the team; from engineering to analytics - as long as it clears up something about the air!
              </p>
              <p>
              Deliverables:
              </p>
              <p>
              The team should complete milestones that sees the project through from end to end:
              </p>
              <p>
              - Planning; coming up with a scope and design
              </p>
              <p>
              - Research into what tools and data sources are required
              </p>
             <p>
             - Implementation, and
             </p>
            <p>
            - Plans for future improvements
            </p>
            <p>
            Tech Stack:
            </p>
            <p>
            -Amazon Web Services (Cloud Computing)
            </p>
            <p>
            -Distributed Systems
            </p>
            <p>
            -Git (Version Control)
            </p>
            <p>
            -Google Cloud (Cloud Computing)
            </p>
            <p>
            -Javascript
            </p>
            <p>
            -Python
            </p>
            <p>
            -REST APIs  
            </p>        
            </p>
            <br></br>
            <h1>Contact Us</h1>
            <p class="text">
            <p>💌 Email: fairairproject@gmail.com</p>
            <p><FaGithub />  Github: https://github.com/mdeng1110/Fair_Air_Project</p>
        </p>
        </div>
    </div>
    </div>
    
  );
};

export default About;
