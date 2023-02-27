import theme from 'theme'
import { CancelIcon, MenuIcon, SignOutIcon } from 'utils/icons'
import * as S from './styles'
import logo from 'assets/images/logo.svg'
import { useAuth } from 'hooks/useAuth'

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  handleMenu: () => void
  showingMenu: boolean
}

export default function Header({ handleMenu, showingMenu }: HeaderProps) {
  const { signOut } = useAuth()
  return (
    <S.Header>
      <img alt='Alura Dev' src={logo} width={145} />
      <div>
        <button className='signOutButton' onClick={signOut}>
          <SignOutIcon size={24} color={theme.colors.white} />
          <p>Sair</p>
        </button>
        <button className='menuButton' onClick={handleMenu}>
          {!showingMenu ? (
            <MenuIcon size={24} color={theme.colors.white} />
          ) : (
            <CancelIcon size={24} color={theme.colors.white} />
          )}
        </button>
      </div>
    </S.Header>
  )
}
