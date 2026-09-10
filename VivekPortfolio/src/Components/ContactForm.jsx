import React from 'react'

function ContactForm() {
  return (
    <div id='contact' style={{ height: '100vh', width: '100vw' }}>
      


<div className='flex justify-between items-center'> 
    <div> Contact Me</div>

    <div> <form action="submit">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
    </form></div>
    
</div>

    </div>
  )
}

export default ContactForm
