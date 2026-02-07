import { Github, Linkedin, Mail } from "lucide-react"

const footerLinks = [
  { href: "https://www.linkedin.com/in/yarden-septon-979a31224", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/yardensepton", icon: Github, label: "GitHub" },
  { href: "mailto:yardensepton@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm font-medium text-white/40">
          {"© 2026 Yarden Septon. All rights reserved."}
        </p>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 transition-all duration-300 hover:text-white hover:bg-white/10 hover:-translate-y-1"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
