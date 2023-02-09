import React from 'react'
import { Link } from 'react-router-dom'
import theme from 'theme'
import { CodeIcon, ComunityIcon, UserIcon } from 'utils/icons'
import * as S from './styles'

interface MenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export default function Menu({ className }: MenuProps) {
  return (
    <S.Menu className={className}>
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
  )
}
