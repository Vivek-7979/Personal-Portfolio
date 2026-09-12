import React from 'react'
import profile from '../assets/profile.PNG'
import githubicon from '../assets/githubicon.svg'
import linkdeinicon from '../assets/linkdeinicon.svg'
import twittericon from '../assets/twittericon.svg'

function Hero() {
  const headingStyle = {
    textShadow: '0 0 14px rgba(125, 211, 252, 0.25)',
  }

  const accentText = {
    background: 'linear-gradient(135deg, #98f5ff 0%, #7aa6ff 45%, #c7b7ff 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 700,
  }

  return (
    <div id='hero' className='w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 mt-25'>
      <div className='flex w-[90%] max-w-310 items-center justify-between gap-8 max-[800px]:flex-col max-[800px]:justify-center max-[800px]:text-center max-[800px]:gap-6'>
        <div className='w-full max-w-xl max-[800px]:max-w-lg'>
          <p className='text-sm text-[#D7E3FF] sm:text-base'>Hi, I am</p>

          <h3 className='mt-3 inline-block rounded bg-violet-400/10 px-1 py-1 text-lg font-semibold text-white sm:text-2xl md:text-3xl'>
            Vivek Kumar
          </h3>

          <h1
            style={headingStyle}
            className='mt-3 text-3xl font-semibold text-violet-300 sm:text-4xl md:text-5xl lg:text-6xl'
          >
            FRONT - END
          </h1>

          <h1
            style={headingStyle}
            className='mt-3 text-3xl font-semibold text-violet-300 sm:text-4xl md:text-5xl lg:text-6xl'
          >
            DEVELOPER
          </h1>

          <p className='mt-3 text-sm leading-6 text-[#D7E3FF] sm:text-base md:text-lg'>
            I specialize in crafting seamless user interfaces and delightful
            experiences with <span style={accentText}>React.js</span>. I am a passionate
            front-end developer with experience in creating responsive and user-friendly
            websites.
          </p>

         <a href="#projects">
          <button
            style={{ cursor: 'pointer', filter: 'drop-shadow(0 0 10px rgba(148, 163, 184, 0.75))' }}
            className='mt-6 rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-white/60 hover:bg-white/15 sm:px-6 sm:py-3 sm:text-[15px]'
          >
            View My Work
          </button> </a>


        </div>

        <div className='flex flex-col items-center justify-center max-[800px]:mt-2'>
          <img
            src={profile}
            alt='Profile'
            className='block w-55 h-55 rounded-3xl border border-white/30 object-cover object-center shadow-[0_24px_60px_rgba(15,23,42,0.45)] md:w-75 md:h-87.5 max-[400px]:w-45 max-[400px]:h-45 max-[400px]:rounded-full max-[400px]:object-cover'
          />

          <div className='mt-5 flex items-center justify-center gap-5 sm:gap-7 md:gap-10'>
            <img
              src={githubicon}
              alt='GitHub'
              className='h-8 w-8 cursor-pointer brightness-0 invert drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-9 sm:w-9 md:h-10 md:w-10 max-[400px]:h-7 max-[400px]:w-7'
              onClick={() => window.open('https://github.com/Vivek-7979', '_blank')}
            />
            <img
              src={linkdeinicon}
              alt='LinkedIn'
              className='h-8 w-8 cursor-pointer drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-9 sm:w-9 md:h-10 md:w-10 max-[400px]:h-7 max-[400px]:w-7'
              onClick={() => window.open('https://linkedin.com/in/vivek-kumar-441754299', '_blank')}
            />
            <img
              src={twittericon}
              alt='Twitter'
              className='h-8 w-8 cursor-pointer drop-shadow-[0_0_10px_rgba(148,163,184,0.25)] sm:h-9 sm:w-9 md:h-10 md:w-10 max-[400px]:h-7 max-[400px]:w-7'
              onClick={() => window.open('https://x.com/Vivek00855', '_blank')}
            />
          </div>
        </div>
      </div>
      <div className='border-0 border-t border-slate-400/30 mt-40 w-[82%]  mx-auto'></div>
    </div>
  )
}

export default Hero
