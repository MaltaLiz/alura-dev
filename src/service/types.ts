export type User = {
  id?: number
  username: string
  email: string
  password: string
}

export type Post = {
  id?: number
  userId: number
  projectName: string
  projectDescription?: string
  language: string
  backgroundColor: string
  date: string
}
