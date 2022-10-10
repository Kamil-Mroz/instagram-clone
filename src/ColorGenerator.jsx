import React from 'react'

export const ColorGenerator = () => {
  let str = ''
  const char = '0123456789abcdef'
  for (let i = 0; i < 6; i++) {
    str += char[Math.floor(Math.random() * char.length)]
  }
  return str
}
