import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  checkUserRegister,
  deleteLoggedUser,
  getLoggedUser,
} from 'service/services'
import { User as UserProfile } from 'service/types'
import { REQUEST_STATUS } from 'utils/contants'

type AuthContextProps = {
  userProfile: UserProfile | null
  signIn: (email: string, password: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const navigate = useNavigate()

  async function getUserProfile() {
    const user = await getLoggedUser()
    setUserProfile(user)
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  const signIn = useCallback(
    async (email: string, password: string) => {
      const registerStatus = await checkUserRegister(email, password)
      if (registerStatus === REQUEST_STATUS.OK) {
        setUserProfile(await getLoggedUser())
        navigate('/home')
      }
    },
    [navigate]
  )

  const signOut = useCallback(() => {
    deleteLoggedUser()
    navigate('/')
  }, [navigate])

  const authContextValue = useMemo(
    function () {
      return {
        userProfile,
        signIn,
        signOut,
      }
    },
    [userProfile, signIn, signOut]
  )

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("auth provider must be used within it's provider")
  }

  return context
}
