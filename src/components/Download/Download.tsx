import { useTicket } from '@/hook/useTicket'
import { BsCheck2Circle as CheckIcon } from 'react-icons/bs'
import { Button } from '../Button/Button'

export const Download = () => {
  const { ticketUrl } = useTicket()

  return (
    <>
      <h2 className="flex items-center gap-4 text-lg mb-8 uppercase">
        <CheckIcon
          className="block w-8 h-8 shrink-0 fill-green-500"
          aria-hidden={true}
        />

        <span className="block grow">Ticket gerado com sucesso</span>
      </h2>

      <Button as="a" href={ticketUrl} download>
        Fazer download
      </Button>
    </>
  )
}
