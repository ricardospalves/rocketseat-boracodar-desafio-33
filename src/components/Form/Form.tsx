import type { AppContextData } from '@/context/AppContext/AppContext'
import { AppContext } from '@/context/AppContext/AppContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useId } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../Button/Button'

type User = AppContextData['user']

type FormFields = {
  username: string
}

const schema = yup
  .object({
    username: yup.string().required('Campo obrigatório.'),
  })
  .required()

export const Form = () => {
  const fieldId = useId()
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
        message: 'Usuário inválido. Verifique e tente novamente.',
      })

      return
    }

    const user = (await response.json()) as User

    handleUserChange(user)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={fieldId} className="block text-lg pb-2 uppercase">
          Digite seu usuário do GitHub
        </label>

        <input
          type="text"
          id={fieldId}
          className="block w-full h-12 px-4 bg-white text-black focus:outline-none focus:ring ring-purple-700"
          autoFocus
          {...register('username')}
        />

        {errors?.username && (
          <p className="mt-1 text-red-400">{errors.username.message}</p>
        )}

        <Button as="button" type="submit" className="mt-4">
          Gerar meu ticket
        </Button>
      </form>
    </>
  )
}
