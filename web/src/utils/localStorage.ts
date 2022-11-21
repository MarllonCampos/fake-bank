
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
interface UpdateLocalStorage {
  key: string;
  value: any;
}
function updateLocalStorage({ key, value }: UpdateLocalStorage) {
  const user = getUser();
  localStorage.setItem('user', JSON.stringify({ ...user, [key]: value }))

}
function getUser(): UserProps | null {
  const value = JSON.parse(localStorage.getItem('user') || "{}")
  return value ? value : null
}

function logoutUser() {
  localStorage.clear()
}

export { saveLocalStorage, getUser, logoutUser, updateLocalStorage }

