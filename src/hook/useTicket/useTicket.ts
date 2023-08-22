import { AppContext } from '@/context/AppContext'
import { toPng } from 'html-to-image'
import { useContext, useEffect, useState } from 'react'

export const useTicket = () => {
  const { user, ticketRef } = useContext(AppContext)
  const [ticketUrl, setTicketUrl] = useState('')

  useEffect(() => {
    if (ticketRef?.current) {
      toPng(ticketRef.current, { cacheBust: true }).then((dataUrl) => {
        setTicketUrl(dataUrl)
      })
    }
  }, [user, ticketRef])

  return { ticketUrl }
}
