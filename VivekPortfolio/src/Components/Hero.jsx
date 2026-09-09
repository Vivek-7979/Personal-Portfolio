import React from 'react'
import profile from '../assets/profile.PNG'
import githubicon from '../assets/githubicon.svg'
import linkdeinicon from '../assets/linkdeinicon.svg'
import twittericon from '../assets/twittericon.svg'

function Hero() {
  const headingStyle = {
    color: '#67E8F9',
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
      
<div className='flex justify-between items-center w-full h-screen max-w-full overflow-x-hidden px-6 sm:px-10 lg:pl-30 lg:pr-10 pt-15 mb-6'> 

    <div className='max-w-full overflow-x-hidden'>
        <p style={{ color: '#D7E3FF' }}> Hi , I am </p>
        <h3 style={{color:'#F8FAFC'}} className='text-3xl font-medium mt-0.5 '> Vivek Kumar </h3>

        <h1 style={headingStyle} className='text-5xl font-semibold mt-3'>
            FRONT - END
        </h1>

        <h1 style={headingStyle} className='text-5xl font-semibold mt-3'> DEVELOPER</h1>

        <p className='mt-3 text-m' style={{ color: '#D7E3FF' }}> I specialize in creafting seamless User Interfaces  and delightful <br /> experience with <span style={accentText}>React.js . </span>    
        I am a passionate front-end developer <br/> with experience in creating responsive and user-friendly websites. </p>

    <button  style={{ cursor:'pointer', filter:'drop-shadow(0 0 10px rgba(148, 163, 184, 0.75))'}} 
    className='mt-8 px-6 py-3
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
            hover:border-white/60'> View My Work</button>

    </div>

    <div className='flex flex-col items-center justify-center lg:-ml-12 pr-20'>
      <img src={profile} alt="Profile"   style={{width:'300px' , height:'350px',display:'block', objectFit:'cover', borderRadius:'24px', boxShadow:'0 24px 60px rgba(15, 23, 42, 0.45)', border:'1px solid rgba(148, 163, 184, 0.35)'}}/>

      <div className='mt-5 flex items-center justify-center gap-10'>
        <img src={githubicon} alt="GitHub" style={{ width:'40px', height:'40px', cursor:'pointer', filter:'brightness(0) invert(1) drop-shadow(0 0 10px rgba(148, 163, 184, 0.50))'}} onClick={() => window.open('https://github.com/vivekkumar', '_blank')} />
        <img src={linkdeinicon} alt="LinkedIn" style={{width:'40px', height:'40px', cursor:'pointer', filter:'drop-shadow(0 0 10px rgba(148, 163, 184, 0.50))'}} onClick={() => window.open('https://linkedin.com/in/vivekkumar', '_blank')} />
        <img src={twittericon} alt="Twitter" style={{width:'40px', height:'40px', cursor:'pointer', filter:'drop-shadow(0 0 10px rgba(148, 163, 184, 0.25))'}} onClick={() => window.open('https://github.com/vivekkumar', '_blank')} />
      </div>
    </div>

</div>


   
  )
}

export default Hero
