import Cookie from 'js-cookie'

export const setCookie = (cookieName) => {
  Cookie.set(cookieName, {
    expires: 1,
    secure: true,
    sameSite: 'strict',
    path: '/',
  })
}
