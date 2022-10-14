import React, { useContext, useState, useEffect, useRef, useMemo } from 'react'
import { DataContext } from './Data'
import { Card } from './Card'
export const Home = () => {
  const POSTS_ON_RENDER = 5
  const [amount, setAmount] = useState(POSTS_ON_RENDER)
  const { posts } = useContext(DataContext)
  const postsLength = posts?.length
  const newPosts = posts?.slice(0, amount)

  const postsContainerRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (posts?.length > 0 && entry.isIntersecting) {
          console.log('ok')
          setAmount((prev) => {
            if (prev + POSTS_ON_RENDER >= postsLength) {
              return postsLength
            } else {
              return prev + POSTS_ON_RENDER
            }
          })
        }
      },
      {
        rootMargin: '300px',
      }
    )
    observer.observe(postsContainerRef.current)
  }, [posts])
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
