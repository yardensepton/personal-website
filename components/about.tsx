export function About() {
  return (
    <section id="about" className="bg-background/90 px-6 py-24 backdrop-blur-sm lg:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          About
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A bit about me
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            {"I'm a Software Engineer with hands-on experience developing and maintaining production systems using C# and .NET. I graduated with a B.Sc. in Software Engineering from Afeka College of Engineering, and since then I've been focused on building systems that are clean, well-structured, and built to last."}
          </p>
          <p>
            {"Currently working at Matrix, I develop and maintain web applications using Oracle APEX, leveraging PL/SQL, JavaScript, HTML, and CSS. Previously at Codeline Systems, I built financial desktop applications for non-bank institutions using .NET and SQL Server \u2014 including leading the development of a billing module that automated invoice creation and integrated with the Israeli Tax Authority API."}
          </p>
          <p>
            {"Beyond coding, I care about process and team efficiency. At Codeline, I led the transition from manual spreadsheet tracking to Jira, building the team's workflow from scratch and creating automations that made daily work more organized. I take ownership of the things I build and always look for ways to improve."}
          </p>
        </div>
      </div>
    </section>
  )
}
