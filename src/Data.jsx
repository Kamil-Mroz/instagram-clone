import React from 'react'
import { useFetch } from './hooks/useFetch'
import { ColorGenerator } from './ColorGenerator'
export const DataContext = React.createContext({})

export const DataProvider = ({ children }) => {
  const user = useFetch('https://jsonplaceholder.typicode.com/users')
  const photos = useFetch('https://jsonplaceholder.typicode.com/photos')
  const comments = useFetch('https://jsonplaceholder.typicode.com/comments')
  const post = useFetch('https://jsonplaceholder.typicode.com/posts')
  const projects = [{}, {}, {}, {}]
  const users = user?.reduce((cur, u) => {
    const color = `#${ColorGenerator()}`
    return [
      ...cur,
      {
        ...u,
        color: color,
        photos: photos?.slice(500 * (u.id - 1), 500 * u.id),
        postsNum: Math.floor(Math.random() * (1000 - 50) + 50),
        followers: Math.floor(Math.random() * (1_000_000 - 200) + 200),
        follows: Math.floor(Math.random() * (300 - 50) + 50),
        comments: comments?.slice(
          Math.floor(Math.random() * 5),
          Math.floor(Math.random() * (20 - 5) + 5)
        ),
        likes: Math.floor(Math.random() * (100000 - 1000) + 1000),
      },
    ]
  }, [])

  const posts = post
    .reduce((acc, pos) => {
      return [
        ...acc,
        {
          ...pos,
          userInfo: users[Math.ceil(pos.id / 10) - 1],
          comments: comments?.slice(
            (Math.ceil(pos.id / 10) - 1) * 5,
            Math.ceil(pos.id / 10) * 5
          ),
          photo:
            photos[
              Math.floor(
                Math.random() * (50 * pos.id - (pos.id - 1) * 50) +
                  (pos.id - 1) * 50
              )
            ],
          likes: Math.floor(Math.random() * (100000 - 1000) + 1000),
        },
      ]
    }, [])
    .sort(() => 0.5 - Math.random())

  users?.unshift({
    id: 11,
    name: 'Kamil Mróz',
    username: 'KamilPM',
    color: `#${ColorGenerator()}`,
    email: 'Kamil@example.com',
    phone: '1-770-736-8031 x56442',
    website: 'https://github.com/Kamil-Mroz',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ratione quibusdam alias quas similique provident aperiam! Adipisci nobis deserunt porro facilis sit alias consequatur dolorum aliquam laudantium iusto? Iusto, quia?',
    photos: projects,
    postsNum: projects.length,
    followers: Math.floor(Math.random() * (1_000_000 - 200) + 200),
    follows: Math.floor(Math.random() * (300 - 50) + 50),
  })

  return (
    <DataContext.Provider
      value={{
        posts: posts,
        users: users,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
