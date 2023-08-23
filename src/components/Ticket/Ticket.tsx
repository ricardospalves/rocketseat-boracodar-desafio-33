import { AppContext } from '@/context/AppContext/AppContext'
import { useContext } from 'react'
import { Avatar } from './Avatar'
import { User } from './User'
import { Event } from './Event'
import { Cover } from './Cover'

export const Ticket = () => {
  const { ticketRef } = useContext(AppContext)

  return (
    <article
      ref={ticketRef}
      className="grid grid-cols-12 p-4 bg-purple-300 bg-center bg-cover"
      style={{ backgroundImage: 'url(./images/ticket-bg.svg)' }}
    >
      <Cover />

      <div className="col-span-5 p-4 bg-white text-black">
        <Avatar />

        <h3 className="mt-2 text-sm uppercase text-center text-purple-700">
          Tripulante
        </h3>

        <User />

        <Event />
      </div>
    </article>
  )
}
