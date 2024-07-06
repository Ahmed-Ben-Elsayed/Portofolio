import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from '../components/navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { About } from '../components/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Resume } from '../components/resume/Resume'
import { Projects } from '../components/projects/Projects'
import { Footer } from '../components/footer/Footer'
import { Contact } from '../components/contact/Contact'
function App() {
  // scroll buttom
  const up = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.onscroll = () => {
    if (window.scrollY == 0) {
      document.querySelector('.button').style.display = "none"
    }
    else {
      document.querySelector('.button').style.display = "flex"
    }
  }
  // dark mode
  let [dark, setdark] = useState(false);
  const chang = () => {
    setdark(!dark)
  }
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
    <div className='spinner'>
    <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
    <div className="wheel"></div>
    <div className="hamster">
      <div className="hamster__body">
        <div className="hamster__head">
          <div className="hamster__ear"></div>
          <div className="hamster__eye"></div>
          <div className="hamster__nose"></div>
        </div>
        <div className="hamster__limb hamster__limb--fr"></div>
        <div className="hamster__limb hamster__limb--fl"></div>
        <div className="hamster__limb hamster__limb--br"></div>
        <div className="hamster__limb hamster__limb--bl"></div>
        <div className="hamster__tail"></div>
      </div>
    </div>
    <div className="spoke"></div>
  </div> 
    </div>
  :  
      <div className={dark ? 'dark' : 'ligth'}>
        <div className={"App"}>
          <button onClick={up} className="button">
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                ></path>
            </svg>
          </button>

          <BrowserRouter>
            <Navbar chang={chang} />
            <div className='app-down'>
              <Routes>
                <Route path="/" element={<About spinner={spinner} />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Sidebar />
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
  }
    </>
  )
}

export default App
