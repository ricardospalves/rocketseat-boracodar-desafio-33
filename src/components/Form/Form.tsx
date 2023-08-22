import type { AppContextData } from '@/context/AppContext/AppContext'
import { AppContext } from '@/context/AppContext/AppContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type User = AppContextData['user']

type FormFields = {
  username: string
}

const schema = yup
  .object({
    username: yup.string().required(),
  })
  .required()

export const Form = () => {
  const { handleUserChange } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ username }: FormFields) => {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (response.status === 404) {
      setError('username', {
        message: 'Invalid',
      })

      return
    }

    const user = (await response.json()) as User

    handleUserChange(user)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('username')}
          className="text-black"
          autoFocus
        />
        {errors?.username && <p>{errors.username.message}</p>}
        <button>Gerar meu ticket</button>
      </form>
    </>
  )
}
