import { useTicket } from '@/hook/useTicket'
import { Button } from '../Button/Button'

export const Download = () => {
  const { ticketUrl } = useTicket()

  return (
    <>
      <h2 className="text-lg pb-2 uppercase">Ticket gerado com sucesso</h2>

      <Button as="a" href={ticketUrl} download>
        Fazer download
      </Button>
    </>
  )
}
