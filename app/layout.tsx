import React from "react"
import type { Metadata } from 'next'
import { Red_Hat_Display, Source_Code_Pro } from 'next/font/google'

import './globals.css'

const _redHatDisplay = Red_Hat_Display({ subsets: ['latin'], variable: '--font-red-hat' })
const _sourceCodePro = Source_Code_Pro({ subsets: ['latin'], variable: '--font-source-code-pro' })

export const metadata: Metadata = {
  title: 'Yarden Septon | Software Engineer',
  description: 'Software Engineer with expertise in C#, Java, SQL, and backend development. Currently at Matrix, building clean and maintainable software solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_redHatDisplay.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
