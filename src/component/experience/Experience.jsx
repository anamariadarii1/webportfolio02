
import './Experience.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const data = [
  {
    name: '1.Programming Instructor \n Logiscool | 01.02.2023 - present ',
    about: "• Teach coding concepts and languages such as HTML, CSS, JavaScript, and Python to students aged 7-18 in both individual and group settings\n• Develop and implement engaging lesson plans, activities, and projects to enhance students' understanding and skills in programming\n• Provide regular feedback to students and parents to track progress and identify areas for improvement\n • Collaborate with colleagues to continuously improve teaching strategies and curriculum"
  },
  {
    name: '2.	PARTICIPANT 21 days of Web Challenge ,\n WellCode | 01.07.2022-22.07.2022 ',
    about: "•	I solved javascript,html and css tasks with increasing difficulty every day\n •	I solved complex functions in javascript and I successfully finished all the tasks from each day of the challenge\n•	I learned how to ask correct questions and how to ask for help from mentors when I need it  "
  },
  {
    name: '3.	TRAINEE GirlsGoIT ,\n TEKEDU | 18.07.2021-24.08.2022',
    about: "•	I worked in team and developed a web application for notes:https://notes.girlsgoit.org/  \n •	I wrote lines of code in the JavaScript language using the vue.js framework \n•	I presented the final model of the application at the final session of the GirlsGoIT program"
  }
]

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Experience </h5>
        <h2>Additional Training </h2>
        
        <Swiper className='container experience__container' 
        slidesPerView={1}
        spaceBetween={40}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}>
          {
            data.map(({name,about},index) =>{
              return(
                <SwiperSlide key={index} className='experiences'>
                  <h5 className='experince__name'>{name}</h5>
                  <small className='about_experience'>{about}</small>
                </SwiperSlide>
              )
            })
          }
          
        </Swiper>



    </section >
  )
}

export default Experience