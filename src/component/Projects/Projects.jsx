import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Panou Solar Smart ',
    link: 'https://docs.google.com/document/d/1_y6_de0VjZqgSEs6Mlj6Mu-fHTtnX7TPBTWn7100d5Q/edit?usp=sharing',
    locatia:'Prezentare',
    demo: 'https://youtu.be/JXtWSkUu1iw'
},
    {
      id: 1,
      image: IMG2,
      title: 'Green Bird - Unity Game',
      link: 'https://ana-mariadarii.itch.io/green-bird',
      locatia:'Itch project',
      demo: 'https://ana-mariadarii.itch.io/green-bird'
  }
   
]
const Projects = () => {
  return (
    <section id='projects'>
      <h5>What Skills I Have</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
          {
            data.map(({id,image,title,link,locatia,demo}) => {
                return( 
                <article key={id} className='portfolio__item'>
                    <div className="portfolio__item-image">
                    <img src={image} alt={title}></img>
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={link} className='btn' target='_blank'>{locatia}</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
              </article>)
            } )
          } 
      </div>
    </section >
  )
}

export default Projects