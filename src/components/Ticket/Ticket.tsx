import { AppContext } from '@/context/AppContext/AppContext'
import { useContext } from 'react'

export const Ticket = () => {
  const { user, ticketRef } = useContext(AppContext)

  return (
    <figure ref={ticketRef}>
      <img src={user?.avatar_url ?? 'https://picsum.photos/460'} alt="" />
      <figcaption>{user?.name ?? 'Seu nome aqui'}</figcaption>
    </figure>
  )
}
