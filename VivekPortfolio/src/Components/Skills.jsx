import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "FRONT-END DEVELOPMENT",
    number: "01",
    skills: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },

  {
    title: "BACKEND / BaaS",
    number: "02",
    skills: [
      {
        name: "Appwrite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Routing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
      },
      {
        name: "React Hook Form",
        icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg",
      },
    ],
  },

  {
    title: "DATABASE",
    number: "03",
    skills: [
      {
        name: "Appwrite Database",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg",
      },
      {
        name: "Firebase Firestore",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },

  {
    title: "STATE MANAGEMENT",
    number: "04",
    skills: [
      {
        name: "Redux Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "React State",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
];


/* -----------------------------------------
   Circular Skill Component
----------------------------------------- */

const SkillCircle = ({ name, percentage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const node = circleRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const progress = isVisible ? percentage : 0;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={circleRef} className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="7"
          />

          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#C4B5FD"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1500 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-xl font-bold text-white">{progress}%</span>
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-md font-medium text-slate-200">{name}</h3>
    </div>
  );
};


/* -----------------------------------------
   Main Skills Component
----------------------------------------- */

const Skills = () => {

  const [activeCategory, setActiveCategory] = useState(0);

  const circularSkills = [
    {
      name: "HTML",
      percentage: 95,
    },
    {
      name: "CSS",
      percentage: 90,
    },
    {
      name: "JavaScript",
      percentage: 85,
    },
    {
      name: "React.js",
      percentage: 85,
    },
    {
      name: "Backend / BaaS",
      percentage: 75,
    },
    {
      name: "Database",
      percentage: 75,
    },
  ];


  const toggleCategory = (index) => {

    if (activeCategory === index) {
      setActiveCategory(null);
    } else {
      setActiveCategory(index);
    }

  };


  return (

    <section
      id="skills"
      className="min-h-screen bg-[#05051f] text-white px-6 md:px-12 lg:px-20 py-28"
    >

      <div className="max-w-7xl mx-auto">


        {/* ---------------------------------
            Section Heading
        ---------------------------------- */}

        <div className="flex items-center gap-4 mb-6">

          {/* <span className="w-12 h-px bg-violet-300"></span> */}

          <p className="text-sm md:text-lg tracking-[0.2em] text-violet-300 uppercase bg-violet-400/10 px-4 py-4 font-semibold rounded w-full text-center mb-7">
            My Skills
          </p>

        </div>


        <h2 className="text-5xl md:text-5xl font-bold tracking-tight leading-[0.95] text-center">

          Technologies I
          

          <span className="text-violet-300">
           {' '} work with.
          </span>

        </h2>


       


        {/* ---------------------------------
            Main Skills Layout
        ---------------------------------- */}

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-20">


          {/* =================================
              LEFT SIDE — SKILL CATEGORIES
          ================================== */}

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-11">
              Technology Stack
            </p>


            <div className="border-t border-white/10 ">

              {skillCategories.map((category, index) => (

                <div
                  key={category.title}
                  className="border-b border-white/10"
                >

                  {/* Category Bar */}

                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >

                    <div className="flex items-center gap-6">

                      <span className="text-sm text-violet-300">
                        {category.number}
                      </span>

                      <span className="text-lg md:text-xl font-medium tracking-wide group-hover:text-violet-300 transition-colors duration-300">
                        {category.title}
                      </span>

                    </div>


                    {/* Plus / Minus */}

                    <span
                      className={`text-2xl text-slate-400 transition-transform duration-300 ${
                        activeCategory === index
                          ? "rotate-45 text-violet-300"
                          : ""
                      }`}
                    >
                      +
                    </span>

                  </button>


                  {/* Dropdown Content */}

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeCategory === index
                        ? "grid-rows-[1fr] opacity-100 pb-7"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                        {category.skills.map((skill) => (

                          <div
                            key={skill.name}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/2.5 px-4 py-4 hover:border-violet-300/30 hover:bg-white/5 transition-all duration-300"
                          >

                            <div className="w-8 h-8 flex items-center justify-center">

                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-7 h-7 object-contain"
                              />

                            </div>

                            <span className="text-sm text-slate-300">
                              {skill.name}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* =================================
              RIGHT SIDE — CIRCULAR SKILLS
          ================================== */}

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 pl-12 mb-10">
              Core Proficiency
            </p>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">

              {circularSkills.map((skill) => (

                <SkillCircle
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />

              ))}

            </div>

          </div>

        </div>


        {/* ---------------------------------
            Bottom Divider
        ---------------------------------- */}

        <div className="mt-24 border-t border-slate-400/30 pt-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <p className="text-slate-500 text-sm">
              Always learning. Always building. Always improving.
            </p>

            <p className="text-sm text-violet-300">
              React • JavaScript • Modern Web
            </p>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Skills;