import { REQUEST_STATUS } from 'utils/contants'
import { deleteById, get, post } from './request'
import { User } from './types'

export async function getLoggedUser() {
  const user: User = await get('logged-user')
  if (user) return user
  return null
}

export async function checkUserRegister(email: string, password: string) {
  const users: User[] = await get('users')
  const user = users.find((user) => user.email === email)
  if (user && user.password === password) {
    post('logged-user', JSON.stringify(user))
    return REQUEST_STATUS.OK
  } else if (user && user.password !== password) {
    return REQUEST_STATUS.WRONG_PASSWORD
  } else {
    return REQUEST_STATUS.USER_NOT_FOUND
  }
}

export async function deleteLoggedUser() {
  await deleteById('logged-user', 1)
}
