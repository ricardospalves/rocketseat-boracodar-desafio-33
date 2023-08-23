import type { AppContextData } from '@/context/AppContext/AppContext'
import { AppContext } from '@/context/AppContext/AppContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useId } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../Button/Button'
import { UsernameFieldText } from './UsernameFieldText'

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
  const helperTextId = useId()
  const { handleUserChange } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
  })
  const hasError = Boolean(errors?.username)

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
        <label
          htmlFor={fieldId}
          className="block text-lg pb-2 uppercase font-heading"
        >
          Digite seu usuário do GitHub
        </label>

        <UsernameFieldText
          id={fieldId}
          aria-invalid={hasError ? true : undefined}
          aria-describedby={hasError ? helperTextId : undefined}
          error={hasError}
          autoFocus
          {...register('username')}
        />

        {errors?.username && (
          <p id={helperTextId} className="mt-1 text-red-400">
            {errors.username.message}
          </p>
        )}

        <Button
          as="button"
          type="submit"
          className="mt-4"
          loading={isLoading || isSubmitting}
        >
          Gerar meu ticket
        </Button>
      </form>
    </>
  )
}
