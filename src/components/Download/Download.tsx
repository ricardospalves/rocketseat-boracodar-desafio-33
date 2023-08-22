import { useTicket } from '@/hook/useTicket'

export const Download = () => {
  const { ticketUrl } = useTicket()

  return (
    <>
      <p>Right</p>

      <a href={ticketUrl} download>
        Download
      </a>
    </>
  )
}
