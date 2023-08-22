'use client'

import { AppContextProvider } from '@/context/AppContext/AppContext'
import { HomePage } from '@/pages/Home'

export default function Home() {
  return (
    <AppContextProvider>
      <HomePage />
    </AppContextProvider>
  )
}
