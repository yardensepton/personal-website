import { Code2, Database, Lightbulb, Server } from "lucide-react"

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
    <section id="skills" className="bg-secondary/30 px-6 py-24 backdrop-blur-sm lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I work with
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-xl bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <group.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
