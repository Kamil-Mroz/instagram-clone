import React, { useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
} from 'react-icons/fa'
export const Home = () => {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts')
  const albums = useFetch('https://jsonplaceholder.typicode.com/albums')
  const users = useFetch('https://jsonplaceholder.typicode.com/users')
  const photos = useFetch('https://jsonplaceholder.typicode.com/photos')
  const comments = useFetch('https://jsonplaceholder.typicode.com/comments')

  users?.push({
    id: 11,
    name: 'Kamil Mróz',
    username: 'KamilPM',
    email: 'Kamil@example.com',
    phone: '1-770-736-8031 x56442',
    website: 'https://github.com/Kamil-Mroz',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, ratione quibusdam alias quas similique provident aperiam! Adipisci nobis deserunt porro facilis sit alias consequatur dolorum aliquam laudantium iusto? Iusto, quia?',
  })

  return <div className="small-container"></div>
}
