
const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-16 flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Education &{" "}
            <span className="text-violet-300">Training</span>
          </h2>

          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            My academic journey, professional training and certifications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= EDUCATION ================= */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-5">
              Education
            </h3>

            <div className="space-y-4">

              {/* B.Tech */}
              <div
                className="
                  rounded-xl
                  border border-slate-400/20
                  bg-white/3
                  p-5
                  hover:border-violet-300/40
                  transition duration-300
                "
              >
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h4 className="text-lg font-semibold">
                      B.Tech — Computer Science & Engineering
                    </h4>

                    <p className="text-slate-400 text-sm mt-1">
                      IET Bhaddal, Rupnagar, Punjab
                    </p>
                  </div>

                  <span className="shrink-0 text-xs sm:text-sm text-violet-300">
                    2023 – 2027
                  </span>

                </div>

                <div className="flex flex-wrap gap-3 mt-4 text-sm">

                  <span className="px-3 py-1 rounded-full bg-violet-300/10 text-violet-300">
                    Pursuing
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300">
                    CGPA: 7.5 / 10
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400">
                    Through 5th Semester
                  </span>

                </div>
              </div>

              {/* 12th */}
              <div
                className="
                  rounded-xl
                  border border-slate-400/20
                  bg-white/3
                  p-5
                  hover:border-violet-300/40
                  transition duration-300
                "
              >
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h4 className="text-lg font-semibold">
                      Senior Secondary — 12th
                    </h4>

                    <p className="text-slate-400 text-sm mt-1">
                      The Renaissance School, Bhanopli
                    </p>

                    <p className="text-slate-500 text-xs mt-1">
                      CBSE
                    </p>
                  </div>

                  <span className="shrink-0 text-xs sm:text-sm text-slate-400">
                    2020 – 2021
                  </span>

                </div>

                <div className="mt-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
                    Percentage: 70%
                  </span>
                </div>
              </div>

              {/* 10th */}
              <div
                className="
                  rounded-xl
                  border border-slate-400/20
                  bg-white/3
                  p-5
                  hover:border-violet-300/40
                  transition duration-300
                "
              >
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h4 className="text-lg font-semibold">
                      Secondary — 10th
                    </h4>

                    <p className="text-slate-400 text-sm mt-1">
                      The Renaissance School, Bhanopli
                    </p>

                    <p className="text-slate-500 text-xs mt-1">
                      CBSE
                    </p>
                  </div>

                  <span className="shrink-0 text-xs sm:text-sm text-slate-400">
                    2022 – 2023
                  </span>

                </div>

                <div className="mt-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-sm">
                    Percentage: 84%
                  </span>
                </div>
              </div>

            </div>
          </div>


          {/* ================= TRAINING ================= */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-5">
              Training &{" "}
              <span className="text-violet-300">Certifications</span>
            </h3>

            <div className="space-y-4">

              {/* Training */}
              <div
                className="
                  rounded-xl
                  border border-slate-400/20
                  bg-white/3
                  p-5
                  hover:border-violet-300/40
                  transition duration-300
                "
              >
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h4 className="text-lg font-semibold">
                      Technical Training
                    </h4>

                    <p className="text-slate-400 text-sm mt-1">
                      White Hat Coders, Mohali
                    </p>
                  </div>

                  <span className="shrink-0 text-xs sm:text-sm text-violet-300">
                    Jun – Aug 2025
                  </span>

                </div>

                <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                  45-Day Summer Training focused on frontend web development
                  and modern web technologies.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-violet-300/10 text-violet-300">
                    HTML
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-violet-300/10 text-violet-300">
                    CSS
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-violet-300/10 text-violet-300">
                    JavaScript
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-violet-300/10 text-violet-300">
                    React.js
                  </span>

                  <span className="text-xs px-3 py-1 rounded-full bg-violet-300/10 text-violet-300">
                    Git & GitHub
                  </span>
                </div>
              </div>


              {/* Certificate 1 */}
              <div
                className="
                  rounded-xl
                  border border-slate-400/20
                  bg-white/3
                  p-5
                  hover:border-violet-300/40
                  transition duration-300
                "
              >
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h4 className="text-lg font-semibold">
                      Web Designing
                    </h4>

                    <p className="text-slate-400 text-sm mt-1">
                      Training & Completion Certificate
                    </p>

                    <p className="text-slate-500 text-xs mt-1">
                      White Hat Coders, Mohali
                    </p>
                  </div>

                  <span className="shrink-0 text-xs sm:text-sm text-slate-400">
                    2025
                  </span>

                </div>

                <p className="text-violet-300 text-xs mt-3">
                  10 Jun 2025 – 28 Jul 2025
                </p>
              </div>


              {/* Certificate 2 */}
              <div
                className="
                  rounded-xl
                  border border-slate-400/20
                  bg-white/3
                  p-5
                  hover:border-violet-300/40
                  transition duration-300
                "
              >
                <div className="flex justify-between items-start gap-4">

                  <div>
                    <h4 className="text-lg font-semibold">
                      Personality Development
                    </h4>

                    <p className="text-slate-400 text-sm mt-1">
                      Training Certificate
                    </p>

                    <p className="text-slate-500 text-xs mt-1">
                      White Hat Coders, Mohali
                    </p>
                  </div>

                  <span className="shrink-0 text-xs sm:text-sm text-slate-400">
                    2025
                  </span>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Certificate Images */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">
              Certificates
            </h3>

            <span className="text-xs text-slate-500">
              2 Certificates
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-3xl">

            {/* Certificate Image 1 */}
            <div
              className="
                overflow-hidden
                rounded-xl
                border border-slate-400/20
                bg-white/3
                group
              "
            >
              <img
                src="/certificate-1.jpg"
                alt="Web Designing certificate awarded to Vivek Kumar"
                className="
                  w-full
                  h-32 sm:h-40
                  object-cover
                  group-hover:scale-105
                  transition duration-500
                "
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
              />
            </div>

            {/* Certificate Image 2 */}
            <div
              className="
                overflow-hidden
                rounded-xl
                border border-slate-400/20
                bg-white/3
                group
              "
            >
              <img
                src="/certificate-2.jpg"
                alt="Personality Development training certificate for Vivek Kumar"
                className="
                  w-full
                  h-32 sm:h-40
                  object-cover
                  group-hover:scale-105
                  transition duration-500
                "
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
