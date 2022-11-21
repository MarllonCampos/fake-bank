const ONE_DAY_MILLISECOND = 1 * 24 * 60 * 60 * 1000
export interface UserProps {
  token: string,
  id: string,
  username: string,
  balance: number
}
function saveLocalStorage({ token, id, username, balance }: UserProps) {
  const stringifyObject = JSON.stringify({ token, id, username, balance })
  localStorage.setItem('user', stringifyObject)
}

function getUser(): UserProps | null {
  const value = JSON.parse(localStorage.getItem('user') || "{}")
  return value ? value : null
}

function logoutUser() {
  localStorage.clear()
}

export { saveLocalStorage, getUser, logoutUser }

