import React from 'react'
import resume from '../assets/resume.svg'
import VivekResume from '../assets/Vivek-Kumar_Frontend_Developer_Resume.pdf'




function Navbar() {

{/* Loical handling . like  -> resume will be downloaded in the browser of the user   */}
 const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = VivekResume
    link.download = 'Vivek-Kumar_Frontend-Developer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (

    <div className='flex justify-center '> {/* Overall navbar inisde this div where it is centered horizontally */}
 
 
 {/* The actual navbar inside the nav tag  and "navbar" is the special classname that is defined in the app.css */}
  <nav
    className="
       navbar
        
        fixed     
        top-6
        w-[85%]

        left-1/2 
        -translate-x-1/2
        z-50

        

        flex
        items-center
        justify-between

        px-8

        bg-[#060918]/10
        backdrop-blur-sm

        border
        border-white/20

        rounded-4xl

        shadow-[0_4px_30px_rgba(0,0,0,0.25)]
      "
    >


      {/* LEFT SIDE : jo div vich hai jis vich saare links nehh , "navbar-links" -> coustom css class haii */}
      <div className="navbar-links flex items-center gap-2 sm:gap-4 lg:gap-10 max-[400px]:gap-1.5">
        <a
          href="#projects"
          className="
            text-white
            text-[9px] sm:text-[11px] lg:text-[15px]
            font-medium
            tracking-tight
            transition
            duration-300
            hover:text-white/40
            max-[400px]:text-[8px]
            max-[360px]:hidden
          "
        >
          PROJECTS
        </a>

        <a
          href="#about"
          className="hidden md:inline text-white text-[11px] sm:text-[12px] lg:text-[15px] font-medium tracking-tight transition duration-300 hover:text-white/40 max-[400px]:text-[8px]"
        >
          ABOUT
        </a>

        <a
          href="#skills"
          className="hidden lg:inline text-white text-[15px] font-medium tracking-tight transition duration-300 hover:text-white/40 max-[400px]:text-[8px]"
        >
          SKILLS
        </a>

        <a
          href="#contact"
          className="
            text-white
            text-[9px] sm:text-[11px] lg:text-[15px]
            font-medium
            tracking-tight
            transition
            duration-300
            hover:text-white/40
            max-[400px]:text-[8px]
            max-[260px]:hidden
          "
        >
          CONTACT
        </a>
      </div>

      {/* CENTER LOGO : "navbar-logo" : css is defined in the app.css */}
      <div
        className="navbar-logo
          absolute
          left-1/2
          -translate-x-1/2
          block
        "
      >

        <a href='#hero'>
        <h2
          className="
            text-white
            text-[14px] sm:text-[22px] lg:text-[25px]
            max-[400px]:text-[2px]

            cursor-pointer
            tracking-tight

            transition
            duration-300
            hover:text-white/40
            whitespace-nowrap
          "
        >
<span style={{fontFamily: 'Poppins' , fontWeight: '700',marginRight: '0.25rem' ,
     background: 'linear-gradient(135deg, #98f5ff 0%, #7aa6ff 45%, #c7b7ff 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 700,
    }}
    
    className='max-[390px]:ml-4'
    >
       VIVEK 
       </span> 

          <span style={{fontFamily: 'Poppins', fontWeight: '300'}}> KUMAR </span>

        </h2>
      </a>
        
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-actions flex items-center gap-2 sm:gap-4 lg:gap-6">

        {/* GET IN TOUCH wala button . "navbar-button" -> hai own css vaste */}
        <button
         type='button'
        onClick={handleResumeDownload}
          className="navbar-button
            px-2 py-1.5 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3
            max-[400px]:px-2 max-[400px]:py-1.5

            rounded-full

            border
            border-white/40

            text-white
            text-[9px] sm:text-[11px] lg:text-[15px]
            max-[400px]:text-[8px]
            font-medium

            bg-transparent

            transition
            duration-300

            hover:bg-white/15
            hover:border-white/60
            whitespace-nowrap
            flex items-center justify-center
            max-[360px]:hidden
          "
        >
           <span> <span className='max-[390px]:hidden'> My </span>
            <span>Resume</span> </span>
      <img
      src={resume}
       alt='Resume icon'
       className='h-2.5 w-2.5 ml-1 inline-block brightness-0 invert sm:h-4 sm:w-4 lg:h-5 lg:w-5 max-[400px]:h-2.5 max-[400px]:w-2.5'
            />
        </button>


      </div>
      
    </nav>
  

</div>  
  )
}

export default Navbar
