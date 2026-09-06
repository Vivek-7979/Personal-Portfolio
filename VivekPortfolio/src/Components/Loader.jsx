// This is the Loader component that displays a loading screen with a progress bar and animations. It takes an onComplete prop, which is a callback function that gets called when the loading is complete.

// 1. React → controls when the loader appears/disappears and the progress percentage.
// 2. Tailwind CSS → handles most of the styling.
// 3. Built-in CSS animations → @keyframes, transform, opacity, transition, etc.
// 4. Google Fonts → only used to load the Poppins font. It does not perform the animation.
// 5. No Framer Motion / GSAP / AOS is being used.


import { useEffect, useState } from "react";

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = 2700;
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setExiting(true);

            setTimeout(() => {
              onComplete();
            }, 700);
          }, 300);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-9999 overflow-hidden bg-[#040420] text-white transition-all duration-700 ${exiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}  >
      
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>



      {/* Top left */}
      <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
        <div className="h-2 w-2 animate-pulse rounded-full bg-white" />

        <span className="text-[10px] font-medium tracking-[0.35em] text-white/50 sm:text-xs">
          VK / PORTFOLIO
        </span>
      </div>



      {/* Top right */}
      <div className="absolute right-6 top-6 text-[10px] tracking-[0.3em] text-white/30 sm:right-10 sm:top-10 sm:text-xs">
        2026
      </div>



      {/* Center content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="w-full max-w-4xl">



          {/* Small introduction */}
          <div className="mb-5 flex items-center gap-4 animate-[fadeIn_0.8s_ease-out]">
            <span className="h-px w-10 bg-white/40 sm:w-16" />

            <span className="text-[10px] tracking-[0.4em] text-white/40 sm:text-xs">
              WELCOME
            </span>
          </div>



          {/* Name */}
          <h1 className="overflow-hidden text-5xl font-bold tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="inline-block animate-[nameReveal_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              VIVEK
            </span>

            <span className="ml-3 inline-block text-white/30 animate-[nameReveal_1.2s_0.15s_cubic-bezier(0.16,1,0.3,1)_both] sm:ml-5">
              KUMAR
            </span>
          </h1>



          {/* Developer title */}
          <div className="mt-5 overflow-hidden">
            <p className="animate-[slideUp_0.9s_0.5s_cubic-bezier(0.16,1,0.3,1)_both] text-sm font-medium tracking-[0.35em] text-white/60 sm:text-lg">
              FRONTEND DEVELOPER
            </p>
          </div>



          {/* Animated line */}
          <div className="relative mt-12 h-px w-full overflow-hidden bg-white/10">
            <div
              className="absolute left-0 top-0 h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />



            {/* Moving scanner */}
            <div className="absolute top-0 h-full w-20 animate-[scanner_1.5s_linear_infinite] bg-linear-to-r from-transparent via-white to-transparent opacity-60" />
          </div>



          {/* Loading information */}
          <div className="mt-4 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="text-[9px] tracking-[0.3em] text-white/40 sm:text-xs">
                {progress < 40
                  ? "INITIALIZING"
                  : progress < 75
                  ? "LOADING EXPERIENCE"
                  : progress < 100
                  ? "ALMOST READY"
                  : "WELCOME"}
              </span>
            </div>



            {/* Progress percentage */}
            <span className="font-mono text-xs text-white/50 sm:text-sm">
              {Math.floor(progress).toString().padStart(3, "0")}%
            </span>
          </div>




          {/* Bottom technical text */}
          <div className="mt-16 flex flex-col justify-between gap-4 text-[9px] tracking-[0.25em] text-white/20 sm:flex-row sm:text-xs">
            <span>DESIGN</span>
            <span>CODE</span>
            <span>CREATE</span>
            <span>BUILD DIGITAL EXPERIENCES</span>
          </div>
        </div>
      </div>




      {/* Decorative circles */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full border border-white/4" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-white/4" />



      {/* Bottom left coordinate-like decoration */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] tracking-widest text-white/20 sm:bottom-10 sm:left-10">
        30°54'N / 75°51'E
      </div>



      {/* Bottom right */}
      <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-widest text-white/20 sm:bottom-10 sm:right-10">
        SYSTEM.READY
      </div>
    </div>
  );
}

export default Loader;