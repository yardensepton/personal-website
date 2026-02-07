import { Github, Linkedin, Mail } from "lucide-react"

const footerLinks = [
  { href: "https://www.linkedin.com/in/yarden-septon-979a31224", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/yardensepton", icon: Github, label: "GitHub" },
  { href: "mailto:yardensepton@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary/95 px-6 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-primary-foreground/60">
          {"© 2026 Yarden Septon. All rights reserved."}
        </p>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground/50 transition-colors hover:text-primary-foreground"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
