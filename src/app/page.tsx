'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { toPng } from 'html-to-image'

const schema = yup
  .object({
    username: yup.string().required(),
  })
  .required()

type FormFields = {
  username: string
}

type User = {
  avatar_url: string
  name: string
}

export default function Home() {
  const ticketRef = useRef<HTMLDivElement>(null)
  const [user, setUser] = useState<User>()
  const [href, setHref] = useState('')
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

    setUser((await response.json()) as User)
  }

  useEffect(() => {
    if (ticketRef.current) {
      toPng(ticketRef.current, { cacheBust: true }).then((dataUrl) => {
        setHref(dataUrl)
      })
    }
  }, [user, ticketRef])

  return (
    <main>
      {!user && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('username')} autoFocus />
          {errors?.username && <p>{errors.username.message}</p>}
          <button>Gerar</button>
        </form>
      )}

      {user && (
        <>
          <p>Right</p>

          <a href={href} download>
            Download
          </a>
        </>
      )}

      <hr />

      <figure ref={ticketRef}>
        <img src={user?.avatar_url ?? 'https://picsum.photos/460'} alt="" />
        <figcaption>{user?.name ?? 'Seu nome aqui'}</figcaption>
      </figure>
    </main>
  )
}
