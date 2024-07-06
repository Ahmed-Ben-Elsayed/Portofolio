import React, { useEffect, useState } from 'react'
import '../About/about.css'
import { FaCode } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

export const About = () => {
      // spiiner 
  let [spinner , setspinner] = useState(true);
  useEffect(()=>{
    setspinner(true);
    setTimeout(()=>{
      setspinner(false);
    },3000)
  },[])
    return (
        <>
        {spinner ? 
        <div className="spinner">
           <svg className="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle className="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" stroke-width="8" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle className="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" stroke-width="7" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle className="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" stroke-width="6" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle className="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle className="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" stroke-width="4" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle className="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg>
        </div>
    :    
        <div className='about'>
            <h1>About ME <span></span></h1>
            <p>Hello, I am Ahmed Al-Sayed. I study at the Faculty of Science, Zagazig University,
                Department of Computer Science. In the year 2021, I started learning the web,
                especially Front End, and I strive to achieve all goals in this field and achieve very high
                experience.
                💻🌐</p>
            <h1>What i Do !<span></span></h1>
            <div className='skill'>
                <div className='skills one'>
                    <h4><FaCode className='icon-side' />
                        Web Developement</h4>
                    <p>Elevating your online presence, I specialize in crafting dynamic and responsive websites using leading web frameworks like React js  and Flask. From sleek user interfaces to robust backend systems, I bring your digital vision to life with expertise in technologies such as laravel Framework, Postman APi </p>
                </div>
                <div className='skills two'>
                    <h4><IoIosSettings className='icon-side' />
                        Automation</h4>
                    <p>Streamlining operations with a touch of magic, I leverage automation to eliminate repetitive tasks, optimize data pipelines, and orchestrate complex workflows. From backend processes to intricate task management, my automation solutions enhance efficiency, allowing you to focus on strategic priorities.
                    </p>
                </div>
                <div className='skills two'>
                    <h4><FaCode className='icon-side' />
                        Convert designs to HTML CSS code</h4>
                    <p>I excel at converting designs into HTML, CSS and JS code, bringing creative visions to life on the web with precision and responsiveness.</p>
                </div>
                <div className='skills one'>
                    <h4><IoCodeWorking className='icon-side' />
                        Clean Code
                    </h4>
                    <p>Writing clean, maintainable code that adheres to industry standards and best practices.</p>
                </div>
            </div>
        </div>
        }
        </>
    )
}
