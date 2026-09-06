import React from 'react'

function Navbar() {
  return (

    <div className='flex justify-center '> {/* Overall navbar inisde this div where it is centered horizontally */}
 
 
 {/* The actual navbar inside the nav tag  and "navbar" is the special classname that is defined in the app.css */}
  <nav
    className="
       navbar
        
        fixed     
        top-6
        w-[90%]

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
      <div className="navbar-links flex items-center gap-10">
        <a
          href="#projects"
          className="
            text-white
            text-[15px]
            font-medium
             font-family: 'Poppins',
            tracking-tight
            transition
            duration-300
            hover:text-white/40
          "
        >
          PROJECTS
        </a>

        <a
          href="about"
          className="
            text-white
            text-[15px]
            font-family: 'Poppins ',
            font-medium
            tracking-tight
            transition
            duration-300
            hover:text-white/40
          "
        >
          ABOUT
        </a>

        <a
          href="#skills"
          className="navbar-link-skills
            text-white
            text-[15px]
            font-medium
             font-family: 'Poppins',
            tracking-tight
            transition
            duration-300
            hover:text-white/40
          "
        >
          SKILLS
        </a>

        <a
          href="#contact"
          className="navbar-link-contact
            text-white
            text-[15px]
            font-medium
             font-family: 'Poppins',
            tracking-tight
            transition
            duration-300
            hover:text-white/40
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
        "
      >
        <h2
          className="
            text-white
            text-[25px]
          
            tracking-tight
            whitespace-nowrap
          "
        >
         <span style={{fontFamily: 'Poppins' , fontWeight: '700',marginRight: '0.25rem'}}> VIVEK </span> 
          <span style={{fontFamily: 'Poppins', fontWeight: '300'}}> KUMAR </span>
        </h2>

        
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-actions flex items-center gap-6">

        {/* GET IN TOUCH wala button . "navbar-button" -> hai own css vaste */}
        <button
          className="navbar-button
            px-6
            py-3

            rounded-full

            border
            border-white/40

            text-white
            text-[15px]
            font-medium

            bg-transparent

            transition
            duration-300

            hover:bg-white/15
            hover:border-white/60
          "
        >
          Get in touch
        </button>


      </div>
      
    </nav>
  

</div>  
  )
}

export default Navbar
