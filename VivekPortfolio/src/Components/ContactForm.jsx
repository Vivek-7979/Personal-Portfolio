import contactImage from '../assets/contactImage.PNG'
import rightarrow from '../assets/right-arrow.svg'


const ContactForm = () => {
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

          {/* Left Form */}
          <div className="w-full lg:w-1/2 max-w-xl">

            <form className="space-y-3" action="#" method="post">

              {/* Name */}
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
                  className="w-full px-3 py-2.5 rounded-lg
                  bg-white/5 border border-slate-400/20
                  text-white placeholder:text-slate-500
                  outline-none focus:border-violet-300
                  transition text-sm"
                />
              </div>

              {/* Email */}
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
                  className="w-full px-3 py-2.5 rounded-lg
                  bg-white/5 border border-slate-400/20
                  text-white placeholder:text-slate-500
                  outline-none focus:border-violet-300
                  transition text-sm"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm text-slate-300 mb-1.5">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-3 py-2.5 rounded-lg
                  bg-white/5 border border-slate-400/20
                  text-white placeholder:text-slate-500
                  outline-none focus:border-violet-300
                  transition text-sm"
                />
              </div>

              {/* Message */}
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
                  className="w-full px-3 py-2.5 rounded-lg
                  bg-white/5 border border-slate-400/20
                  text-white placeholder:text-slate-500
                  outline-none focus:border-violet-300
                  resize-none transition text-sm"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2
                w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-2.5
                rounded-lg bg-violet-300 text-slate-950
                font-semibold hover:bg-violet-200
                transition duration-300 text-sm sm:text-[0.95rem]
                shadow-[0_8px_20px_rgba(168,85,247,0.25)]
                focus:outline-none focus:ring-2 focus:ring-violet-200/80"
              >
                <span>Submit</span>
                <img
                  src={rightarrow}
                  alt="Submit arrow"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 object-contain transition-transform duration-300 group-hover:translate-x-1"
                  style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(25%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(92%)' }}
                />
              </button>

            </form>
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


