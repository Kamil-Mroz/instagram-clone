import React from 'react'
import { useFetch } from './hooks/useFetch'
import { ColorGenerator } from './ColorGenerator'
import { Card } from './Card'
export const Home = () => {
  const user = useFetch('https://jsonplaceholder.typicode.com/users')
  const photos = useFetch('https://jsonplaceholder.typicode.com/photos')
  const comments = useFetch('https://jsonplaceholder.typicode.com/comments')
  const post = useFetch('https://jsonplaceholder.typicode.com/posts')
  const users = user?.reduce((cur, u) => {
    const color = `#${ColorGenerator()}`
    return [...cur, { ...u, ['color']: color }]
  }, [])

  const posts = post.reduce((acc, pos) => {
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
  users?.push({
    id: 11,
    name: 'Kamil Mróz',
    username: 'KamilPM',
    color: `#${ColorGenerator()}`,
    email: 'Kamil@example.com',
    phone: '1-770-736-8031 x56442',
    website: 'https://github.com/Kamil-Mroz',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ratione quibusdam alias quas similique provident aperiam! Adipisci nobis deserunt porro facilis sit alias consequatur dolorum aliquam laudantium iusto? Iusto, quia?',
  })
  posts.sort(() => 0.5 - Math.random())
  return (
    <div className="small-container">
      {posts.map((post) => (
        <Card
          key={post.id}
          post={post}
        />
      ))}
      <button>See more</button>
    </div>
  )
}
