import React from 'react'
import logo from 'assets/images/logo.svg'
import macButtons from 'assets/images/mac_buttons.svg'
import { MenuIcon } from 'utils/icons'
import * as S from './styles'
import theme from 'theme'

export default function CodeEditor() {
  return (
    <S.Container>
      <S.Header>
        <img alt='Alura Dev' src={logo} width={145} />
        <p className='userName'>Usuário</p>
        <button className='menuButton'>
          <MenuIcon size={24} color={theme.colors.white} />
        </button>
      </S.Header>
      <S.CodeEditor>
        <div className='postWrapper'>
          <div className='postButtons'>
            <img src={macButtons} />
          </div>
          <textarea className='post' />
        </div>
        <button className='highlightButton'>Visualizar com o highlight</button>
      </S.CodeEditor>
    </S.Container>
  )
}
