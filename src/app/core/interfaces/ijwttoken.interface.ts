export interface IJwtToken {
  sub: string
  id: number
  email: string
  account: number
  authority: string
  iat: number
  exp: number
}
