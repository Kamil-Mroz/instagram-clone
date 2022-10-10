import React, { useContext } from 'react'
import { DataContext } from './Data'
import { useFetch } from './hooks/useFetch'
import { ColorGenerator } from './ColorGenerator'
import { Card } from './Card'
export const Home = () => {
  const { posts } = useContext(DataContext)
  return (
    <div className="small-container">
      {posts?.map((post) => (
        <Card
          key={post.id}
          post={post}
        />
      ))}
      {posts.length > 0 && <button>See more</button>}
    </div>
  )
}
