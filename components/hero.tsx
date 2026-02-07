import { ArrowDown, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import yardenImg from "../public/yarden.jpg"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-20 overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl ring-4 ring-white/5 bg-white/5 backdrop-blur-sm sm:mb-8">
          <Image
            src={yardenImg}
            alt="Yarden Septon"
            width={160}
            height={160}
            className="h-[120px] w-[120px] object-cover sm:h-[160px] sm:w-[160px]"
            priority
          />
        </div>

        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:mb-4 sm:text-xs">
          Software Engineer
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Yarden Septon
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
          Building clean, reliable software with a focus on clarity, structure, and purpose. Experienced in C#, .NET, SQL, and backend development.
        </p>

        <div className="mt-12 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:gap-4 md:mt-12">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
          >
            View Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/yarden-septon-979a31224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:px-8"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/yardensepton"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:px-8"
            >
              <Github className="h-4 w-4" />
              <span className="sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hide on very small screens to avoid clutter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:animate-bounce sm:bottom-10">
        <ArrowDown className="h-5 w-5 text-white/30 sm:h-6 sm:w-6" />
      </div>
    </section>
  )
}
