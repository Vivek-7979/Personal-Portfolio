import React from 'react'
import githubicon from '../assets/githubicon.svg'
import linkdeinicon from '../assets/linkdeinicon.svg'
import twittericon from '../assets/twittericon.svg'

function Footer() {
  return (

    <div id='footer'> {/* IS andar sab kuch hai ehi ga footer section  */}

      <hr className="border-0 border-t border-slate-400/30 mt-40 w-[82%] mx-auto" /> {/* Eh gi apni line jo separate krdi footer nu  */}



    <div  className='w-full flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8'> {/* eh bhi div ohi ga full vadda bs line paune krke upr 2 bnaune paye but shuru itho hi aw kaam  */}



      <div className='w-[80%] min-h-[20vh] flex flex-col items-center justify-center gap-6 sm:gap-7 min-[1000px]:w-[88%] min-[1000px]:min-h-[20vh] min-[1000px]:flex-row min-[1000px]:justify-between min-[1000px]:gap-4'> 
      {/* Eh div andar 3 div ge [text hai pehle vich , 2-icons , 3-text] teh ehde pr css styling kiti vi flex vgera and responsiveness bhi lgie vi talwind css duwara  */}


        <div className='text-center min-[1000px]:text-left'>  {/* 1st div -> is vich hai apna styled text in left side  */}

          <h1 className=' tracking-tight leading-[1.05]'>

            <span style={{ textShadow: '0 0 14px rgba(125, 211, 252, 0.25)' }} className='text-violet-300 text-2xl md:text-2xl lg:text-3xl font-bold'>
              PORTFOLIO
            </span> {/* PORTFOLIO word nu alag toh style kita va  */}

            <br />
            FRONT-END DEVELOPER  {/* line break krke simple h1 text likhya va  */}
          </h1>
        </div>

        <div className='mt-0 ml-0 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 min-[1000px]:mt-0 min-[1000px]:ml-30'>
          {/* 2nd div -> jis vich icons neh + responsive hai saab talwind css naal . copy pasted them from hero section  */}


          <img
            src={githubicon}
            alt='GitHub'
            className='h-5 w-5 cursor-pointer brightness-0 invert drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 max-[640px]:h-6 max-[640px]:w-6'
            onClick={() => window.open('https://github.com/Vivek-7979', '_blank')}
          />
          <img
            src={linkdeinicon}
            alt='LinkedIn'
            className='h-5 w-5 cursor-pointer drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 max-[640px]:h-6 max-[640px]:w-6'
            onClick={() => window.open('https://linkedin.com/in/vivek-kumar-441754299', '_blank')}
          />
          <img
            src={twittericon}
            alt='Twitter'
            className='h-5 w-5 cursor-pointer drop-shadow-[0_0_10px_rgba(148,163,184,0.25)] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 max-[640px]:h-6 max-[640px]:w-6'
            onClick={() => window.open('https://x.com/Vivek00855', '_blank')}
          />


        </div>


       {/* 3rd -> Last div in the right side which have the info about me and styled text  */}
        <div className='mb-0 text-center text-sm sm:mb-0 min-[1000px]:mb-0 min-[1000px]:text-left'>

          <p>
            2026 Made with {''}
            <span className='text-violet-400'>♥</span> {/* made the color of the heart violet by using span tag  */}
            {''} by <span className='text-violet-300'>VIVEK KUMAR</span>
          </p>
        </div>
      </div>
    </div>
 </div>   
  )
}


{/*

Made Everything responisve by using the talwind CSS . 
  
like : 
In Tailwind, sm and md are responsive breakpoints:

sm: → 640px and above
md: → 768px and above
lg: → 1024px and above
xl: → 1280px and above
2xl: → 1536px and above

 */}

export default Footer
