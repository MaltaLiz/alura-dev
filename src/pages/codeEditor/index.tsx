import React, { useRef, useState } from 'react'
import macButtons from 'assets/images/mac_buttons.svg'
import * as S from './styles'
import { Header, Menu } from 'components'

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
      <Header handleMenu={handleMenu} showingMenu={showingMenu} />
      <Menu ref={navRef} />
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
