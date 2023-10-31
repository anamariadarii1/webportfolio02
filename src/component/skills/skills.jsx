import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './skills.css'

const skills = () => {
  return (
    <section id='skills'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container skills__container">
            <div className="skills__programming">
                <h3>Programming Languages</h3>
                <div className="skills__content">
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>C</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>C++</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>C#</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>Verilog</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>SQL</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>MATLAB</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>Simulink</h4>
                        </div>
                    </article>
                </div>
            </div>

            <div className="skills__web">
                <h3>Web Development</h3>
                <div className="skills__content">
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>React</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>HTML</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>CSS</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>JavaScript</h4>
                        </div>
                    </article>
                </div>
            </div>

            <div className="skills__tools">
                <h3>Software and Tools</h3>
                <div className="skills__content">
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>Unity</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>Autocad</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>LabVIEW</h4>
                        </div>
                    </article>
                    <article className='skills__details'>
                        <BsPatchCheckFill className='skills__icon'/>
                        <div>
                          <h4>Logisim</h4>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    </section>
  )
}

export default skills