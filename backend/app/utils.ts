import { hashSync } from 'bcrypt'
async function hashPassword(password: string) {
  const hashedPassword = hashSync(password, 8)
  return hashedPassword
}

const validatePasswordCriterias = [hasCapitalLetters, hasNumbers, moreThan8Chars]

function isPasswordValid(password: string): boolean {
  let error = false;
  for (let validateFunction of validatePasswordCriterias) {
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


function matchesArray(array: Array<string>, string: string): boolean {
  const formattedString = string.toLowerCase()
  return array.some(word => formattedString === word)
}
function matchesFilterQuery(string: string): boolean {
  const filterWords = ['sent', 'received', 'date']
  return matchesArray(filterWords, string)
}

function matchesOrderByQuery(string: string): boolean {
  const filterWords = ['asc', 'desc']
  return matchesArray(filterWords, string)
}
export { hashPassword, isPasswordValid, matchesFilterQuery, matchesOrderByQuery }




