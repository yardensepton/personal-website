import { ArrowDown, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl ring-4 ring-white/5 bg-white/5 backdrop-blur-sm">
          <Image
            src="/yarden.jpg"
            alt="Yarden Septon"
            width={160}
            height={160}
            className="h-[160px] w-[160px] object-cover"
            priority
          />
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Software Engineer
        </p>
        <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Yarden Septon
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
          Building clean, reliable software with a focus on clarity, structure, and purpose. Experienced in C#, .NET, SQL, and backend development.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20"
          >
            View Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/yarden-septon-979a31224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yardensepton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/30" />
      </div>
    </section>
  )
}
