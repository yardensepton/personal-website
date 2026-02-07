import { ArrowDown, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-primary/90 px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-8 overflow-hidden rounded-full border-4 border-secondary/40 shadow-lg">
          <Image
            src="/placeholder-logo.svg"
            alt="Yarden Septon"
            width={140}
            height={140}
            className="h-[140px] w-[140px] object-cover"
            priority
          />
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-foreground/70">
          Software Engineer
        </p>
        <h1 className="text-balance text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
          Yarden Septon
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
          Building clean, reliable software with a focus on clarity, structure, and purpose. Experienced in C#, .NET, SQL, and backend development.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-all duration-200 hover:bg-secondary/80"
          >
            <ArrowDown className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/yarden-septon-979a31224"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yardensepton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary-foreground/40" />
      </div>
    </section>
  )
}
