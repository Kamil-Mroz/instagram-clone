import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { DataContext } from './Data'
import { Card } from './Card'
export const Home = () => {
  const POSTS_ON_RENDER = 4
  const [amount, setAmount] = useState(POSTS_ON_RENDER)
  const { posts } = useContext(DataContext)

  const newPosts = posts?.slice(0, amount)
  const postsContainerRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]

      if (entry.isIntersecting) {
        setAmount((prev) => {
          return prev + POSTS_ON_RENDER
        })
      }
    }, {})
    observer.observe(postsContainerRef.current)
  }, [])
  return (
    <div className="small-container">
      {newPosts?.map((post) => (
        <Card
          key={post.id}
          post={post}
        />
      ))}
      <div ref={postsContainerRef}></div>
    </div>
  )
}
