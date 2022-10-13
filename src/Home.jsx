import React, { useContext } from 'react'
import { DataContext } from './Data'
import { Card } from './Card'
export const Home = () => {
  const { posts } = useContext(DataContext)
  const newPosts = posts.slice(0, 5)
  return (
    <div className="small-container">
      {newPosts?.map((post) => (
        <Card
          key={post.id}
          post={post}
        />
      ))}
      {posts.length > 0 && <button>See more</button>}
    </div>
  )
}
