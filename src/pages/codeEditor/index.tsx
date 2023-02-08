import React, { useRef, useState } from 'react'
import logo from 'assets/images/logo.svg'
import macButtons from 'assets/images/mac_buttons.svg'
import {
  CancelIcon,
  CodeIcon,
  ComunityIcon,
  MenuIcon,
  UserIcon,
} from 'utils/icons'
import * as S from './styles'
import theme from 'theme'
import { Link } from 'react-router-dom'

export default function CodeEditor() {
  const [codeBackground, setCodeBackground] = useState('#6bd1ff')
  const [showingMenu, setShowingMenu] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  function handleCodeBackground(event: React.FormEvent<HTMLInputElement>) {
    setCodeBackground(event.currentTarget.value)
  }

  function handleMenu() {
    if (showingMenu) {
      setShowingMenu(false)
      navRef.current?.classList.remove('show')
    } else {
      setShowingMenu(true)
      navRef.current?.classList.add('show')
    }
  }

  return (
    <S.Container>
      <S.Header>
        <img alt='Alura Dev' src={logo} width={145} />
        <div className='userName'>
          <UserIcon size={32} color={theme.colors.white} />
          <p>Usuário</p>
        </div>
        <button className='menuButton' onClick={handleMenu}>
          {!showingMenu ? (
            <MenuIcon size={24} color={theme.colors.white} />
          ) : (
            <CancelIcon size={24} color={theme.colors.white} />
          )}
        </button>
      </S.Header>
      <S.Menu className='menu' ref={navRef}>
        <p className='menuLabel'>Menu</p>
        <ul className='menuList'>
          <li>
            <Link to='' className='menuItem menuLink'>
              <CodeIcon
                size={20}
                color={theme.colors.white}
                className='menuIcon--active'
              />
              <p> Editor de código</p>
            </Link>
          </li>
          <li>
            <Link to='' className='menuItem menuLink'>
              <ComunityIcon
                size={20}
                color={theme.colors.white}
                className='menuIcon'
              />
              <p>Comunidade</p>
            </Link>
          </li>
        </ul>
        <div className='userName'>
          <UserIcon size={32} color={theme.colors.white} />
          <p>Usuário</p>
        </div>
      </S.Menu>
      <S.CodeEditor>
        <div
          className='postWrapper'
          style={{ backgroundColor: codeBackground }}
        >
          <div className='postButtons'>
            <img src={macButtons} />
          </div>
          <textarea className='post' />
        </div>
        <button className='highlightButton'>Visualizar com o highlight</button>
      </S.CodeEditor>
      <S.Sidebar>
        <form>
          <p className='formLabel'>Seu projeto</p>
          <input
            placeholder='Nome do seu projeto'
            required
            className='formInput'
          />
          <textarea
            placeholder='Descrição do seu projeto'
            className='formInput'
          />
          <p className='formLabel'>Personalização</p>
          <select
            placeholder='Selecione uma linguagem'
            className='codeLanguageSelect'
          >
            <option className='codeLanguageOption'>Javascript</option>
            <option className='codeLanguageOption'>Java</option>
          </select>
          <input
            type='color'
            className='colorInput'
            defaultValue={codeBackground}
            onChange={handleCodeBackground}
          />
          <input
            type='submit'
            className='saveProjectButton'
            value='Salvar projeto'
          />
        </form>
      </S.Sidebar>
    </S.Container>
  )
}
