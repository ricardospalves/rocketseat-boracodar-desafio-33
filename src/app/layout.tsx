import classNames from 'classnames'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Space_Grotesk } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--robotoFont',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--spaceGroteskFont',
})

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
        className={classNames([
          'min-h-screen flex flex-col justify-center bg-neutral-950 text-white bg-center bg-cover',
          roboto.variable,
          spaceGrotesk.variable,
        ])}
        style={{ backgroundImage: 'url("./images/bg.jpg")' }}
      >
        {children}
      </body>
    </html>
  )
}
