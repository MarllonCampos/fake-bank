import AsyncStorage from '@react-native-async-storage/async-storage'
export interface UserProps {
  token: string,
  id?: string,
  username: string,
  balance: number
}
async function saveAsyncStorage({ token, id, username, balance }: UserProps) {
  const stringifyObject = JSON.stringify({ token, id, username, balance })
  await AsyncStorage.setItem('@fakebank:userinfo', stringifyObject)
}
interface UpdateAsyncStorage {
  key: string;
  value: any;
}
async function updateAsyncStorage({ key, value }: UpdateAsyncStorage) {
  const user = await getUser();
  await AsyncStorage.setItem('@fakebank:userinfo', JSON.stringify({ ...user, [key]: value }))

}
async function getUser(): Promise<UserProps | null> {
  console.log('GetUser')
  const value = JSON.parse(await AsyncStorage.getItem('@fakebank:userinfo') || "{}")
  return value ? value : null
}

async function logoutUser() {
  await AsyncStorage.clear()
}

export { saveAsyncStorage, getUser, logoutUser, updateAsyncStorage }
