import { Download } from '@/components/Download'
import { Form } from '@/components/Form'
import { Ticket } from '@/components/Ticket'
import { AppContext } from '@/context/AppContext'
import { useContext } from 'react'

export const HomePage = () => {
  const { user } = useContext(AppContext)

  return (
    <main>
      {user ? <Download /> : <Form />}
      <Ticket />
    </main>
  )
}
