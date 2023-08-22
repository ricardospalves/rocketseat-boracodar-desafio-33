import { AppContext } from '@/context/AppContext'
import { useContext } from 'react'

export const User = () => {
  const { user } = useContext(AppContext)

  return (
    <p className="mt-2 font-bold text-center">
      {user?.name ?? 'Seu nome aqui'}
    </p>
  )
}
