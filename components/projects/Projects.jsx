import React, { useEffect, useState } from 'react'
import '../projects/projects.css';
import ec1 from '../../src/img/ec2.png'
import ec2 from '../../src/img/ec1.jpg'
import islamic from '../../src/img/islamic.png'
import book from '../../src/img/book.jpg'
import food from '../../src/img/food.jpg'
import gym from '../../src/img/gym.jpg'
import porto from '../../src/img/porto.jpg'
export const Projects = () => {
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
            <svg class="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle class="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" stroke-width="8" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle class="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" stroke-width="7" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle class="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" stroke-width="6" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle class="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle class="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" stroke-width="4" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle class="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg>
         </div>
    :    
        <div className='projects'>
            <h1>Work<span></span></h1>
            <div className='project'>
                <a href="https://shop-bravo.vercel.app/" target='_blank'>
            <div class="card">
                <img src="" alt="" srcSet={ec1} />
            </div>
                </a>
                <a href="https://65a79498df1f61890eb58e72--tubular-longma-831c4b.netlify.app/?fbclid=IwZXh0bgNhZW0CMTEAAR0pojkvzOq0_smiNYL1v51t3mVa9fiit-EDENg5T23iDManvy4Ajjb9sj0_aem_ZmFrZWR1bW15MTZieXRlcw#contacts" target='_blank'>
            <div class="card two">
                <img src="" alt="" srcSet={ec2} />
            </div>
                </a>
                <a href="https://tarik-alganh.vercel.app/" target='_blank'>
            <div class="card three">
                <img src="" alt="" srcSet={islamic} />
            </div>
                </a>
                <a href="https://ahmedelsaayed.github.io/books./" target='_blank'>
            <div class="card four">
                <img src="" alt="" srcSet={book} />
            </div>
                </a>
                <a href="https://ahmedelsaayed.github.io/shop/" target='_blank'>
            <div class="card five">
                <img src="" alt="" srcSet={food} />
            </div>
                </a>
                <a href="https://ahmedelsaayed.github.io/my-website./?fbclid=IwZXh0bgNhZW0CMTEAAR2SYAayz0x3CQcyYeQ0P34lauoCt7lkOinvx-lz42c899RXq7IJKDa8DmA_aem_ZmFrZWR1bW15MTZieXRlcw#home" target='_blank'>
            <div class="card sex">
                <img src="" alt="" srcSet={porto} />
            </div>
                </a>
                <a href="https://dancing-unicorn-a1ee78.netlify.app/" target='_blank'>
            <div class="card seven">
                <img src="" alt="" srcSet={gym} />
            </div>
                </a>
            </div>
        </div>
        }
        </>
    )
}