import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA para Devs',
  description: 'Gere seu ticket e compartilhe com o mundo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className="bg-neutral-950 text-white bg-center bg-cover"
        style={{ backgroundImage: 'url("./images/bg.jpg")' }}
      >
        {children}
      </body>
    </html>
  )
}
