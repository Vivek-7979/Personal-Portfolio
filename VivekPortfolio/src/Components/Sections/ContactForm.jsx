import contactImage from '../../assets/contactImage.PNG'
import rightarrow from '../../assets/right-arrow.svg'
import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetStatus = () => {
    setStatus('idle');
    setMessage('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus('error');
      setMessage('The contact form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment file.');
      setIsSubmitting(false);
      return;
    }

    const form = event.target;
    const formData = new FormData(form);
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Message could not be sent.');
      }

      setStatus('success');
      setMessage('Your message has been sent successfully. I will get back to you soon.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitted = status === 'success' || status === 'error';

  return (
    <section id="contact" className="px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Get In <span className="text-violet-300">Touch</span>
          </h2>

          <p className="text-slate-400 mt-3">
            Have a project or opportunity? Let's connect.
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex items-center justify-center gap-8 lg:gap-12">

          {/* Left Form : This is the display that will be seen when the form is submittedd sucessfully / failed : otherwise simple form  */}
          <div className="w-full lg:w-1/2 max-w-xl">
            {isSubmitted ? (
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_50px_rgba(139,92,246,0.1)] backdrop-blur-sm sm:p-8">
                <button
                  type="button"
                  onClick={resetStatus}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:bg-white/10 hover:text-white"
                  aria-label="Back to form"
                >
                  ×
                </button>

                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full ${status === 'success' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300'}`}>
                    {status === 'success' ? '✓' : '!'}
                  </div>

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {status === 'success' ? 'Form Submitted Successfully' : 'Submission Failed'}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
                    {message}
                  </p>

                  <button
                    type="button"
                    onClick={resetStatus}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-violet-300/40 bg-violet-400/10 px-5 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-200 hover:bg-violet-300/20"
                  >
                    <span aria-hidden="true">←</span>
                    <span>Back to form</span>
                  </button>
                </div>
              </div>





            ) : (
              <form className="space-y-3" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm text-slate-300 mb-1.5">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-slate-400/20 text-white placeholder:text-slate-500 outline-none focus:border-violet-300 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm text-slate-300 mb-1.5">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-slate-400/20 text-white placeholder:text-slate-500 outline-none focus:border-violet-300 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm text-slate-300 mb-1.5">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-slate-400/20 text-white placeholder:text-slate-500 outline-none focus:border-violet-300 transition text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm text-slate-300 mb-1.5">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Write your message..."
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-slate-400/20 text-white placeholder:text-slate-500 outline-none focus:border-violet-300 resize-none transition text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-lg bg-violet-300 text-slate-950 font-semibold hover:bg-violet-200 transition duration-300 text-sm sm:text-[0.95rem] shadow-[0_8px_20px_rgba(168,85,247,0.25)] focus:outline-none focus:ring-2 focus:ring-violet-200/80 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                  <img
                    src={rightarrow}
                    alt="Submit arrow"
                    className={`h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain transition-transform duration-300 ${isSubmitting ? '' : 'group-hover:translate-x-1'}`}
                    style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(25%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(92%)' }}
                  />
                </button>
              </form>
            )}
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex w-1/2 justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-violet-400/5 p-4 shadow-[0_20px_50px_rgba(139,92,246,0.08)] backdrop-blur-sm">
              <img
                src={contactImage}
                alt="Contact illustration"
                className="w-full h-auto object-contain opacity-90 contrast-105 drop-shadow-[0_0_30px_rgba(168,85,247,0.18)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;


