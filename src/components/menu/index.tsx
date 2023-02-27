import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react'
import { Link } from 'react-router-dom'
import theme from 'theme'
import { CodeIcon, ComunityIcon } from 'utils/icons'
import * as S from './styles'

interface MenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export interface MenuRef {
  show: () => void
  hide: () => void
}

function Menu({ className }: MenuProps, ref: Ref<MenuRef>) {
  const navRef = useRef<HTMLElement | null>(null)
  function show() {
    navRef.current?.classList.add('show')
  }
  function hide() {
    navRef.current?.classList.remove('show')
  }

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }))

  return (
    <S.Menu className={className} ref={navRef}>
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
    </S.Menu>
  )
}

const MyMenu = forwardRef(Menu)

export default MyMenu
