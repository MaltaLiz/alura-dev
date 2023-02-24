import React, { useRef, useState } from 'react'
import macButtons from 'assets/images/mac_buttons.svg'
import * as S from './styles'
import { Header, Menu } from 'components'
import { MenuRef } from 'components/menu'
import Highlight from 'react-highlight'
import 'highlight.js/styles/dracula.css'

export default function CodeEditor() {
  const [codeBackground, setCodeBackground] = useState('#6bd1ff')
  const [showingMenu, setShowingMenu] = useState(false)
  const [language, setLanguage] = useState('typescript')
  const [code, setCode] = useState('')
  const [highlightEnabled, setHighlightEnabled] = useState(false)

  const navRef = useRef<MenuRef | null>(null)

  function handleCodeBackground(event: React.FormEvent<HTMLInputElement>) {
    setCodeBackground(event.currentTarget.value)
  }

  function handleMenu() {
    if (showingMenu) {
      setShowingMenu(false)
      navRef.current?.hide()
    } else {
      setShowingMenu(true)
      navRef.current?.show()
    }
  }

  function handleCode(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setCode(event.target.value)
  }

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }

  function handleHighlight() {
    setHighlightEnabled((prevHighlightEnabled) => !prevHighlightEnabled)
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
            <img src={macButtons} alt='botoes ilustrativos' />
          </div>
          {highlightEnabled && (
            <Highlight className={`${language} postHighlight`}>
              {code}
            </Highlight>
          )}
          {!highlightEnabled && (
            <textarea className='post' onChange={handleCode} value={code} />
          )}
        </div>
        <button className='highlightButton' onClick={handleHighlight}>
          {highlightEnabled ? 'Editar o código' : 'Visualizar com o highlight'}
        </button>
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
            onChange={handleLanguageChange}
          >
            <option className='codeLanguageOption' value='typescript'>
              Typescript
            </option>
            <option className='codeLanguageOption' value='javascript'>
              Javascript
            </option>
            <option className='codeLanguageOption' value='html'>
              HTML
            </option>
            <option className='codeLanguageOption' value='css'>
              CSS
            </option>
            <option className='codeLanguageOption' value='java'>
              Java
            </option>
            <option className='codeLanguageOption' value='python'>
              Python
            </option>
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
