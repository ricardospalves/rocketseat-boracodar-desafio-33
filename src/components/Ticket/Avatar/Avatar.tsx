import { AppContext } from '@/context/AppContext'
import { useContext } from 'react'

export const Avatar = () => {
  const { user } = useContext(AppContext)

  return (
    <div className="flex justify-center">
      <img
        src={user?.avatar_url ?? 'https://picsum.photos/128'}
        className="w-32 h-32 shrink-0 rounded-full"
        alt=""
      />
    </div>
  )
}
