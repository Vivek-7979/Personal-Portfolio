import React, { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "A web-based movie streaming platform with user authentication, movie browsing, search and watch features.",
    image: "/projects/netflix.png",
    technologies: ["React.js", "Tailwind CSS", "Firebase",  "TMDB API"],
    github: "https://github.com/Vivek-7979/Netflix-Clone",
    live: "#",
  },

  {
    id: 2,
    title: "Blog App",
    description:
      "A full-stack blog application with user authentication, create, edit, delete posts and a modern responsive UI.",
    image: "/projects/blog.png",
    technologies: ["React.js", "Tailwind CSS", "Appwrite", "React Router"],
    github: "https://github.com/Vivek-7979/My-Blog-App-",
    // live: "#", I will soon deploy it but yet i havenot
  },

  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio website designed to showcase my skills, projects, technologies and development journey.",
    image: "/projects/portfolio.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Vivek-7979/Personal-Portfolio",
    live: "#",
  },

  {
    id: 4,
    title: "Weather App",
    description:
      "A responsive weather application that displays current weather information using a weather API.",
    image: "/projects/weather.png",
    technologies: ["React.js", "Tailwind CSS", "Weather API"],
    github: "#",
    // live: "#", I dont have the live link of this 
  },
];

const Project = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full text-white py-24 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Main Container */}
      <div className="w-[90%] max-w-350 mx-auto">

        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between gap-8 mb-8 sm:mb-10 lg:mb-12">

          {/* Heading */}
          <div>
            {/* Small Heading */}
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 sm:w-16 h-0.5 bg-violet-400"></span>

              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-300 font-medium">
                My Work
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              My{" "}
              <span className="text-violet-400">
                Projects
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-7 text-slate-400">
              Here are some of the projects I've built to practice and
              improve my skills. Each project helped me learn something
              new and solve real-world problems.
            </p>
          </div>

          {/* ================= ARROW BUTTONS ================= */}
         
        </div>

        {/* ================= PROJECT CARDS ================= */}
        <div
          ref={sliderRef}
          className="
            grid
            grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
            gap-5
            lg:gap-6
            pb-6
            pt-6
            scroll-smooth
          "
        >

          {projects.map((project) => (
            <article
              key={project.id}
              className="
                group
                w-full
                min-w-0
                rounded-xl
                border
                border-violet-400/25
                bg-white/2
                p-3
                sm:p-4
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-violet-400/60
                hover:bg-violet-400/3
                hover:shadow-[0_20px_60px_rgba(139,92,246,0.10)]
              "
            >

              {/* ================= PROJECT IMAGE ================= */}
              <div
                className="
                  relative
                  w-full
                  aspect-16/10
                  overflow-hidden
                  rounded-lg
                  bg-[#08082a]
                  border
                  border-white/10
                "
              >
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#040420]/40
                    via-transparent
                    to-transparent
                    opacity-60
                    group-hover:opacity-30
                    transition-opacity
                    duration-500
                  "
                />
              </div>

              {/* ================= PROJECT CONTENT ================= */}
              <div className="pt-4">

                {/* Project Name */}
                <h3
                  className="
                    text-lg
                    sm:text-[20px]
                    font-semibold
                    text-white
                    tracking-tight
                    group-hover:text-violet-300
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p
                  className="
                    mt-2
                    text-sm
                    leading-5
                    text-slate-400
                    min-h-18
                  "
                >
                  {project.description}
                </p>

                {/* ================= TECHNOLOGIES ================= */}
                <div className="flex flex-wrap gap-2 mt-3">

                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-violet-400/60
                        text-violet-300
                        text-xs
                        sm:text-sm
                        font-medium
                        bg-violet-400/3
                        transition-all
                        duration-300
                        hover:bg-violet-400/10
                        hover:border-violet-300
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* ================= DIVIDER ================= */}
                <hr className="my-4 border-0 border-t border-white/10" />

                {/* ================= BUTTONS ================= */}
                <div className="flex items-center gap-4 sm:gap-6">

                  {/* GitHub Code */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      flex
                      items-center
                      gap-2
                      text-violet-300
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >

                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover/link:scale-110
                      "
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.58 9.58 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.002 10.002 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>

                    <span>Code</span>
                  </a>

                  {/* Live Demo */}
                  <a
                    href={project.live ? project.live : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      flex
                      items-center
                      gap-2
                      text-violet-300
                      text-sm
                      font-medium
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >

                    {/* External Link Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-0.5
                        group-hover/link:-translate-y-0.5
                      "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H19.5V12"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 13.5L19.5 4.5"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 13.5V18C18 18.8284 17.3284 19.5 16.5 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V7.5C4.5 6.67157 5.17157 6 6 6H10.5"
                      />
                    </svg>

                    <span>Live Demo</span>
                  </a>

                </div>

              </div>
            </article>
          ))}

        </div>

        {/* ================= MOBILE ARROWS ================= */}
       

        {/* ================= BOTTOM DIVIDER ================= */}
        <div className="mt-20 sm:mt-24">
          <hr className="border-0 border-t border-violet-300/10" />
        </div>

      </div>
    </section>
  );
};

export default Project;