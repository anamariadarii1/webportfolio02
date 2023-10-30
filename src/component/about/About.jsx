import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaUniversity} from 'react-icons/fa' 
import {GiTeamIdea} from 'react-icons/gi' 
import {TbSteam} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About" />
              </div>
          </div>

          <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                      <FaUniversity className='about__icon'/>
                      <h5>Faculty of Automatic Control and Computer Science</h5>
                      <small>Third year </small>
                  </article>
                  
                  <article className='about__card'>
                      <GiTeamIdea className='about__icon'/>
                      <h5> Responsible for Fundraising </h5>
                      <small>BESTEM'23</small>
                  </article>

                  <article className='about__card'>
                      <TbSteam className='about__icon'/>
                      <h5>Active Volunteer</h5>
                      <small>6+ Years</small>
                  </article>
                </div>
                <div>
                  <p>
                  I am a passionate and dedicated software developer who loves to work collaboratively with others. I believe in the power of teamwork and communication, and I love to bring a positive and collaborative spirit to any project I work on. In addition to my technical skills, I also enjoy volunteering and getting involved in social causes because I believe in giving back to the community and making the world a better place. I'm responsible, loyal, and determined to perform to the best of my abilities, and I'm always eager to learn and grow in my career. With my positive attitude and team-oriented approach, I would be a great fit for any position where my skills and experience are a good match. If you're looking for a team player who's also a fun and friendly human, I'm your person!
                  </p>
                  <a href='#contact' className='btn btn-primary'>Let's Talk</a>
              </div>
          </div>
      </div>
    </section>
  )
}

export default About