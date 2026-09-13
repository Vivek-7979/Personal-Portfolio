import React from 'react'
import githubicon from '../assets/githubicon.svg'
import linkdeinicon from '../assets/linkdeinicon.svg'
import twittericon from '../assets/twittericon.svg'
import resume from '../assets/resume.svg'
import VivekResume from '../assets/Vivek-Kumar_Frontend_Developer_Resume.pdf'

function Footer() {
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = VivekResume
    link.download = 'Vivek-Kumar_Frontend-Developer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer id='footer'>
      <hr className="border-0 border-t border-slate-400/30 mt-40 w-[82%] mx-auto" />

      <div className='w-full flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8'>
        <div className='w-[80%] min-h-[20vh] flex flex-col items-center justify-center gap-6 sm:gap-7 min-[1000px]:w-[88%] min-[1000px]:min-h-[20vh] min-[1000px]:flex-row min-[1000px]:justify-between min-[1000px]:gap-4'>
          <div className='text-center min-[1000px]:text-left'>
            <h2 className='tracking-tight leading-[1.05]'>
              <span style={{ textShadow: '0 0 14px rgba(125, 211, 252, 0.25)' }} className='text-violet-300 text-2xl md:text-2xl lg:text-3xl font-bold'>
                PORTFOLIO
              </span>
              <br />
              FRONT-END DEVELOPER
            </h2>
          </div>

          <div className='mt-0 ml-0 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 min-[1000px]:mt-0 min-[1000px]:ml-30'>
            <button
              type='button'
              aria-label='Open GitHub profile'
              className='p-0 bg-transparent border-0'
              onClick={() => window.open('https://github.com/Vivek-7979', '_blank', 'noopener,noreferrer')}
            >
              <img
                src={githubicon}
                alt='GitHub'
                className='h-5 w-5 cursor-pointer brightness-0 invert drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 max-[640px]:h-6 max-[640px]:w-6'
                loading='lazy'
                decoding='async'
              />
            </button>
            <button
              type='button'
              aria-label='Open LinkedIn profile'
              className='p-0 bg-transparent border-0'
              onClick={() => window.open('https://linkedin.com/in/vivek-kumar-441754299', '_blank', 'noopener,noreferrer')}
            >
              <img
                src={linkdeinicon}
                alt='LinkedIn'
                className='h-5 w-5 cursor-pointer drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 max-[640px]:h-6 max-[640px]:w-6'
                loading='lazy'
                decoding='async'
              />
            </button>
            <button
              type='button'
              aria-label='Open X profile'
              className='p-0 bg-transparent border-0'
              onClick={() => window.open('https://x.com/Vivek00855', '_blank', 'noopener,noreferrer')}
            >
              <img
                src={twittericon}
                alt='Twitter'
                className='h-5 w-5 cursor-pointer drop-shadow-[0_0_10px_rgba(148,163,184,0.25)] sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-9 lg:w-9 max-[640px]:h-6 max-[640px]:w-6'
                loading='lazy'
                decoding='async'
              />
            </button>

            <button
              type='button'
              aria-label='Download resume'
              className='p-0 bg-transparent border-0'
              onClick={handleResumeDownload}
            >
              <img
                src={resume}
                alt='Resume'
                className='h-4 w-4 cursor-pointer brightness-0 invert drop-shadow-[0_0_10px_rgba(148,163,184,0.5)] sm:h-7 sm:w-7 md:h-8 md:w-8 max-[400px]:h-5 max-[400px]:w-5'
                loading='lazy'
                decoding='async'
              />
            </button>
          </div>

          <div className='mb-0 text-center text-sm sm:mb-0 min-[1000px]:mb-0 min-[1000px]:text-left'>
            <p>
              2026 Made with <span className='text-violet-400'>♥</span> by <span className='text-violet-300'>VIVEK KUMAR</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
