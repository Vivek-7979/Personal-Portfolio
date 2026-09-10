const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#05051f] text-white px-6 md:px-12 lg:px-20 py-6 flex items-center justify-center overflow-hidden mt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-center mb-3">
          <p className="text-sm md:text-lg tracking-[0.2em] text-violet-300 uppercase bg-violet-400/10 px-4 py-4 font-semibold rounded w-full text-center mb-7">
            About Me
          </p>
        </div>

        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] mb-4 lg:mb-5">
          Building digital
          <br className="mb-2 block" />
          <span className="text-violet-300">experiences</span> with code.
        </h1>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-5 lg:gap-6 items-center">
          <div className="space-y-3 text-center lg:text-left">
            <p className="text-base md:text-lg leading-relaxed text-slate-200">
              I’m <span className="text-white font-semibold bg-violet-400/10 px-1 rounded">Vivek Kumar</span>,
              a <span className="text-violet-300 font-semibold">front-end developer</span> passionate about creating
              <span className="text-white font-semibold"> modern</span>,
              <span className="text-violet-300 font-semibold"> responsive</span> and
              <span className="text-white font-semibold"> user-friendly</span> web experiences.
            </p>

            <p className="text-sm md:text-base leading-6 text-slate-400">
              I enjoy turning ideas and designs into functional interfaces
              using modern web technologies. My primary focus is on building
              clean and maintainable <span className="text-violet-300 font-semibold">React.js</span> applications,
              while paying close attention to usability, performance and
              consistent design.
            </p>

            <p className="text-sm md:text-base leading-6 text-slate-400">
              I believe good development is more than just writing code.
              It is about understanding the problem, designing a simple
              solution and creating an experience that feels natural to the
              person using it.
            </p>

            <p className="text-sm md:text-base leading-6 text-slate-400">
              I’m continuously improving my skills by building real-world
              projects, exploring new technologies and learning
              <span className="text-violet-300 font-semibold"> backend development</span>
              to become a full-stack developer.
            </p>
          </div>

          <div className="space-y-4">
            <div className="group border border-white/10 rounded-2xl p-3 md:p-4 bg-white/2 hover:bg-white/5 hover:border-violet-400/40 transition-all duration-300">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300 mb-1">
                What I do
              </p>

              <h3 className="text-lg font-semibold mb-1">
                Front-End Development
              </h3>

              <p className="text-slate-400 leading-5 text-xs md:text-sm">
                Creating responsive interfaces and interactive web
                applications using modern front-end technologies.
              </p>
            </div>

            <div className="group border border-white/10 rounded-2xl p-3 md:p-4 bg-white/2 hover:bg-white/5 hover:border-violet-400/40 transition-all duration-300">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300 mb-1">
                Currently focused on
              </p>

              <h3 className="text-lg font-semibold mb-1">
                React & Moving to MERN Stack
              </h3>

              <p className="text-slate-400 leading-5 text-xs md:text-sm">
                Building React interfaces and learning backend work with
                Node.js, Express and MongoDB for full-stack growth.
              </p>

              
            </div>

           
          </div>
        </div>
         <hr className="border-0 border-t border-slate-400/20 mt-40 w-[95%]  mx-auto" />
      </div>
      
    </section>

    
  );
};

export default About;