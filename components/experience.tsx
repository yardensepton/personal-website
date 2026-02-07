"use client"

import { useState } from "react"
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const experiences = [
  {
    id: "matrix",
    company: "Matrix",
    role: "Software Engineer",
    period: "Jul 2025 - Present",
    location: "Israel",
    description:
      "Developing and maintaining web applications using Oracle APEX, leveraging PL/SQL, JavaScript, HTML, and CSS to deliver robust enterprise solutions.",
    highlights: [
      "Building and maintaining Oracle APEX web applications for enterprise clients",
      "Writing complex PL/SQL procedures and packages for business logic",
      "Implementing responsive front-end solutions with JavaScript, HTML, and CSS",
      "Collaborating with cross-functional teams to deliver high-quality software",
    ],
    tech: ["Oracle APEX", "PL/SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "codeline",
    company: "Codeline Systems",
    role: "Software Engineer",
    period: "Sep 2024 - Jun 2025",
    location: "Israel",
    description:
      "Built financial desktop applications for non-bank institutions using .NET and SQL Server, including leading the development of a billing module.",
    highlights: [
      "Developed financial desktop applications using C# and .NET for non-bank institutions",
      "Led the development of a billing module automating invoice creation",
      "Integrated with the Israeli Tax Authority API for tax compliance",
      "Spearheaded the transition from spreadsheet tracking to Jira, building workflows and automations from scratch",
      "Worked with SQL Server for data management and complex queries",
    ],
    tech: ["C#", ".NET", "SQL Server", "Jira", "REST APIs"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState("matrix")

  const active = experiences.find((e) => e.id === activeTab)!

  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Career
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Professional Experience
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-lg">
            {/* Tab triggers */}
            <div className="flex border-b border-border">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setActiveTab(exp.id)}
                  className={`relative flex-1 px-6 py-4 text-sm font-medium transition-colors ${activeTab === exp.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="relative z-10">{exp.company}</span>
                  <span className="block text-xs font-normal mt-0.5 opacity-70">
                    {exp.period}
                  </span>
                  {activeTab === exp.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {active.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-primary">
                    {active.company}
                  </p>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground sm:mt-0 sm:items-end">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {active.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {active.location}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>

              <ul className="mt-6 space-y-3">
                {active.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-card-foreground"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
