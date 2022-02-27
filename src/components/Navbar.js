import React, { useEffect } from 'react' 
import './nav.css'

function Navbar() {  
    const [show , handleShow] = React.useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100) {
                handleShow(true); 
            } 
            else handleShow(false)
        }); 
        return ()=>{
            window.removeEventListener("scroll")
        }
    },[])


  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img 
            className='nav-logo' 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png'
            alt='Netflix logo'
        /> 
        <img
            className="nav-avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Netflix Logo"
      />
    </div>
  )
}

export default Navbar