import { Download } from '@/components/Download'
import { Form } from '@/components/Form'
import { Ticket } from '@/components/Ticket'
import { AppContext } from '@/context/AppContext'
import { useContext } from 'react'

export const HomePage = () => {
  const { user } = useContext(AppContext)

  return (
    <main className="max-w-6xl mx-auto min-h-screen items-center grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h1 className="max-w-lg lg:max-w-none mx-auto text-center lg:text-left uppercase text-4xl mb-8">
          Gere seu ticket e compartilhe com o mundo
        </h1>

        {user ? <Download /> : <Form />}
      </div>

      <div className="lg:col-start-6 lg:col-end-13">
        <Ticket />
      </div>
    </main>
  )
}
