import Cookie from 'js-cookie'

export const removeCookie = (cookieName) => {
  Cookie.remove(cookieName)
}
