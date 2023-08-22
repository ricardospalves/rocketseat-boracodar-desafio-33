import { Fragment } from 'react'

type EventItem = {
  title: string
  description: string
}

const EVENT_DATA: EventItem[] = [
  {
    title: 'Evento',
    description: 'IA para Devs',
  },
  {
    title: 'Data',
    description: '14 — 16 ago. 2023',
  },
  {
    title: 'Horário',
    description: 'Ao vivo às 19h',
  },
]

export const Event = () => {
  return (
    <dl className="grid grid-cols-2 mt-9 text-xs font-bold">
      {EVENT_DATA.map(({ description, title }) => {
        return (
          <Fragment key={title}>
            <dt>{title}</dt>
            <dd>{description}</dd>
          </Fragment>
        )
      })}
    </dl>
  )
}
