import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useRef,
  useState,
} from 'react'

type User = {
  avatar_url: string
  name: string
}

export type AppContextData = {
  user?: User
  handleUserChange: (user?: User) => void
  ticketRef: RefObject<HTMLElement>
}

export const AppContext = createContext({} as AppContextData)

export type AppContextProviderProps = {
  children?: ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [user, setUser] = useState<User>()
  const ticketRef = useRef<HTMLElement>(null)

  const handleUserChange = useCallback((user?: User) => {
    setUser(user)
  }, [])

  return (
    <AppContext.Provider
      value={{
        user,
        handleUserChange,
        ticketRef,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
