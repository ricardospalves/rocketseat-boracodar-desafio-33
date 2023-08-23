'use client'

import { AppContextProvider } from '@/context/AppContext/AppContext'
import { HomePage } from '@/page/Home'

export default function Home() {
  return (
    <AppContextProvider>
      <HomePage />
    </AppContextProvider>
  )
}
