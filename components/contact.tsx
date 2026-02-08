"use client"

import React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yarden-septon-979a31224",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/yardensepton",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:yardensepton@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Contact
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {"Let's connect"}
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground">
              {"Whether you have a question or just want to say hi, feel free to reach out."}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ScrollReveal delay={200}>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground">
                Find me online
              </h3>
              <div className="mt-6 space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-card-foreground group-hover:text-foreground">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Send a message
              </h3>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-card-foreground">
                    Thanks for reaching out!
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {"I'll get back to you as soon as I can."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm text-accent underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 w-full resize-none rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
