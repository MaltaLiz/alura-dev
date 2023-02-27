import * as S from './styles'
import logo from 'assets/images/logo.svg'
import { useAuth } from 'hooks/useAuth'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { PasswordIcon, UserLoginIcon } from 'utils/icons'

export default function Login() {
  const { signIn } = useAuth()

  const userEmailRef = useRef<HTMLInputElement>(null)
  const userPasswordRef = useRef<HTMLInputElement>(null)

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!userEmailRef.current || !userPasswordRef.current) {
      return
    }

    signIn(userEmailRef.current.value, userPasswordRef.current.value)
  }

  return (
    <S.Container>
      <img alt='Alura Dev' src={logo} width={350} />

      <S.Form onSubmit={handleSignIn}>
        <div className='input-container'>
          <UserLoginIcon size={20} />
          <input
            type='email'
            className='form-input'
            placeholder='Email'
            ref={userEmailRef}
          />
        </div>
        <div className='input-container'>
          <PasswordIcon size={20} />
          <input
            type='password'
            className='form-input'
            placeholder='Senha'
            ref={userPasswordRef}
          />
        </div>
        <input type='submit' className='form-button' value='Entrar' />
      </S.Form>
      <Link to='/register'>Ainda não é membro? Cadastre-se.</Link>
    </S.Container>
  )
}
