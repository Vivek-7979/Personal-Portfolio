import certificate1 from '../assets/certificate1.jpeg'
import certificate2 from '../assets/certificate2.jpeg'


const Education = () => {
  const openCertificate = (imageSrc) => {
    if (!imageSrc) return
    window.open(imageSrc, '_blank', 'noopener,noreferrer')
  }

  const verifyAction = (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.35)] transition hover:scale-[1.02] hover:bg-violet-300/20"
    >
      <span>Verify</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M13.3 5.3a1 1 0 0 1 1.4 1.4L9.41 11H18a1 1 0 1 1 0 2H9.41l5.29 4.3a1 1 0 1 1-1.4 1.4l-7-5.7a1 1 0 0 1 0-1.4l7-5.7Z" />
      </svg>
    </button>
  )

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-16 flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Education &{" "}
            <span className="text-violet-300">Training</span>
          </h2>

          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            My academic journey, professional training and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">Education</h3>

            <div className="flex flex-col gap-3 h-full">
              <div className="flex h-full min-h-42.5 flex-col rounded-xl border border-slate-400/20 bg-white/3 p-5 transition duration-300 hover:border-violet-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">B.Tech — Computer Science & Engineering</h4>
                    <p className="mt-1 text-sm text-slate-400">IET Bhaddal Technical Campus, Rupnagar, Punjab</p>
                    <p className="mt-2">IKGPTU</p>
                  </div>
                  <span className="shrink-0 text-xs text-violet-300 sm:text-sm">2023 – 2027</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-violet-300/10 px-3 py-1 text-violet-300">Pursuing</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-slate-300">CGPA: 7.5 / 10</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-slate-400">Through 6th Semester</span>
                </div>
              </div>

              <div className="flex h-full min-h-36.25 flex-col rounded-xl border border-slate-400/20 bg-white/3 p-5 transition duration-300 hover:border-violet-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Senior Secondary — 12th</h4>
                    <p className="mt-1 text-sm text-slate-400">The Renaissance School, Bhanopli | CBSE</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400 sm:text-sm">2020 – 2021</span>
                </div>

                <div className="mt-auto pt-4">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">Percentage: 70%</span>
                </div>
              </div>

              <div className="flex h-full min-h-36.25 flex-col rounded-xl border border-slate-400/20 bg-white/3 p-5 transition duration-300 hover:border-violet-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Secondary — 10th</h4>
                    <p className="mt-1 text-sm text-slate-400">The Renaissance School, Bhanopli | CBSE</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400 sm:text-sm">2022 – 2023</span>
                </div>

                <div className="mt-auto pt-4">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">Percentage: 84%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">
              Training & <span className="text-violet-300">Certifications</span>
            </h3>

            <div className="flex flex-col gap-3 h-full">
              <div className="flex h-full min-h-42.5 flex-col rounded-xl border border-slate-400/20 bg-white/3 p-5 transition duration-300 hover:border-violet-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Technical Training</h4>
                    <p className="mt-1 text-sm text-slate-400">White Hat Coders, Mohali</p>
                  </div>
                  <span className="shrink-0 text-xs text-violet-300 sm:text-sm">Jun – Aug 2025</span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  45-Day Summer Training focused on frontend web development and modern web technologies.
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-300">HTML</span>
                  <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-300">CSS</span>
                  <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-300">JavaScript</span>
                  <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-300">React.js</span>
                  <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-300">Git & GitHub</span>
                </div>
              </div>

              <div className="relative flex h-full min-h-36.25 flex-col rounded-xl border border-slate-400/20 bg-white/3 p-5 transition duration-300 hover:border-violet-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Web Designing</h4>
                    <p className="mt-1 text-sm text-slate-400">Training & Completion Certificate</p>
                    <p className="mt-1 text-xs text-slate-500">White Hat Coders, Mohali</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400 sm:text-sm">2025</span>
                </div>

                <p className="mt-3 text-xs text-violet-300">10 Jun 2025 – 28 Jul 2025</p>

                <button
                  type="button"
                  aria-label="View Web Designing certificate"
                  onClick={() => openCertificate(certificate2)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.35)] transition hover:scale-[1.02] hover:bg-violet-300/20"
                >
                  <span>Verify</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 stroke-current">
                    <path d="M5 12h12M13 5l7 7-7 7" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="relative flex h-full min-h-36.25 flex-col rounded-xl border border-slate-400/20 bg-white/3 p-5 transition duration-300 hover:border-violet-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Personality Development</h4>
                    <p className="mt-1 text-sm text-slate-400">Training Certificate</p>
                    <p className="mt-1 text-xs text-slate-500">White Hat Coders, Mohali</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400 sm:text-sm">2025</span>
                </div>

                <button
                  type="button"
                  aria-label="View Personality Development certificate"
                  onClick={() => openCertificate(certificate1)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-violet-300/50 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-300 shadow-[0_0_18px_rgba(167,139,250,0.35)] transition hover:scale-[1.02] hover:bg-violet-300/20"
                >
                  <span>Verify</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 stroke-current">
                    <path d="M5 12h12M13 5l7 7-7 7" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
                 <hr className="border-0 border-t border-slate-400/30 mt-40 mb-30 w-[95%]  mx-auto" />

      </div>
      
    </section>
    
  )
}

export default Education;
