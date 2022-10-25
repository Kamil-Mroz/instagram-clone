import Cookie from 'js-cookie'

export const getCookie = (cookieName) => {
  return Cookie.get(cookieName)
}
