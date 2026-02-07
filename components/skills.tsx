import { Code2, Database, Lightbulb, Server } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "C", "Dart (Flutter)", "C#", "PL/SQL"],
  },
  {
    title: "Frameworks & Tools",
    icon: Server,
    skills: ["FastAPI", ".NET", "Android Studio", "Postman", "Git", "Jira"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase Realtime DB", "SQL Server", "Oracle SQL"],
  },
  {
    title: "Core Strengths",
    icon: Lightbulb,
    skills: ["OOP & Design Patterns", "RESTful APIs", "Docker", "Cross-functional Communication", "Clean Architecture"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Skills
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              What I work with
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 100}>
              <div className="h-full group rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 sm:hover:shadow-xl sm:hover:-translate-y-2 sm:hover:border-accent/50">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 ring-2 ring-accent/20 transition-all duration-300 group-hover:ring-accent/40 group-hover:bg-accent/20">
                  <group.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-5 text-xl font-bold text-card-foreground">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
