const ONE_DAY_MILLISECOND = 1 * 24 * 60 * 60 * 1000
function saveCookie(token: string, id: string) {
  const expires = new Date();
  expires.setTime(expires.getTime() + ONE_DAY_MILLISECOND)
  document.cookie = `token=${token};expires=${expires.toUTCString()}`
}

function getCookie() {
  const value = document.cookie.match('(^|;) ?token=([^;]*)(;|$)')
  return value ? value[2] : null
}

function logoutCookie() {
  document.cookie = "token=;"
}

export { saveCookie, getCookie }


