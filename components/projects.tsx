import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "EasyPack",
    description:
      "A full-stack travel packing list app that suggests items based on real-time weather data. Users enter a destination and get personalized packing recommendations via Google Places API and VisualCrossing weather API. Includes OAuth2 security with JWT, user authentication, and email-based password reset.",
    technologies: ["Python", "FastAPI", "Flutter", "MongoDB Atlas", "Docker", "AWS EC2"],
    github: "https://github.com/yardensepton/easypack-server",
    frontendGithub: "https://github.com/yardensepton/easypack-frontend",
  },
  {
    name: "FitFactory",
    description:
      "A mobile application that allows gym trainers and users to manage and join fitness classes. Built with a focus on intuitive UX and smooth class management workflows.",
    technologies: ["Java", "Android Studio", "Firebase"],
    github: "https://github.com/yardensepton/FitFactory",
  },
  {
    name: "Smooth Stepper",
    description:
      "An open-source stepper view library for Android, providing a smooth and user-friendly way to navigate through multi-step processes in applications.",
    technologies: ["Java", "Android"],
    github: "https://github.com/yardensepton/smooth-stepper",
  },
  {
    name: "Billing Module (Codeline)",
    description:
      "Led the development of a billing module within a financial desktop application for non-bank institutions. Automated invoice creation and integrated with the Israeli Tax Authority API for real-time allocation numbers.",
    technologies: ["C#", ".NET", "SQL Server", "REST API", "Postman"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background/90 px-6 py-24 backdrop-blur-sm lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected work
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.github || project.frontendGithub) && (
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      {project.frontendGithub ? "Backend" : "Source Code"}
                    </a>
                  )}
                  {project.frontendGithub && (
                    <a
                      href={project.frontendGithub}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} frontend on GitHub`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Frontend
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
