import { hash, genSalt } from 'bcrypt'
async function hashPassword(password: string) {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)
  return hashedPassword
}

const validatePasswordCriterias = [hasCapitalLetters, hasNumbers, moreThan8Chars]

function isPasswordValid(password: string): boolean {
  let error = false;
  for (let validateFunction of validatePasswordCriterias) {
    console.log(validateFunction(password))
    if (!validateFunction(password)) {
      error = false
      break
    } else {
      error = validateFunction(password)
    }
  }

  return error
}

function hasCapitalLetters(string: string): boolean {
  return /[A-Z]/g.test(string)
}

function hasNumbers(string: string): boolean {
  return /[0-9]/g.test(string)
}

function moreThan8Chars(string: string): boolean {
  return string.length > 7
}
export { hashPassword, isPasswordValid }




