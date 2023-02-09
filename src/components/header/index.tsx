import theme from 'theme'
import { CancelIcon, MenuIcon, UserIcon } from 'utils/icons'
import * as S from './styles'
import logo from 'assets/images/logo.svg'

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  handleMenu: () => void
  showingMenu: boolean
}

export default function Header({ handleMenu, showingMenu }: HeaderProps) {
  return (
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
  )
}
