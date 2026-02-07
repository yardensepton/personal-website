import { ScrollReveal } from "./scroll-reveal"

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A bit about me
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="rounded-2xl bg-card/50 backdrop-blur-xl p-8 shadow-lg md:p-12 border border-white/10">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg text-foreground/90">
                {"I'm a Software Engineer with hands-on experience developing and maintaining production systems using C# and .NET. I graduated with a B.Sc. in Software Engineering from Afeka College of Engineering, and since then I've been focused on building systems that are clean, well-structured, and built to last."}
              </p>
              <p>
                {"Currently working at Matrix, I develop and maintain web applications using Oracle APEX, leveraging PL/SQL, JavaScript, HTML, and CSS. Previously at Codeline Systems, I built financial desktop applications for non-bank institutions using .NET and SQL Server — including leading the development of a billing module that automated invoice creation and integrated with the Israeli Tax Authority API."}
              </p>
              <p>
                {"Beyond coding, I care about process and team efficiency. At Codeline, I led the transition from manual spreadsheet tracking to Jira, building the team's workflow from scratch and creating automations that made daily work more organized. I take ownership of the things I build and always look for ways to improve."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
