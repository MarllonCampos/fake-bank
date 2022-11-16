import { hash, genSalt } from 'bcrypt'
async function hashPassword(password: string) {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)
  return hashedPassword
}



export { hashPassword }