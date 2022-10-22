import React from 'react'
export const Post = ({ post, open }) => {
  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return
    open(post)
  }
  return (
    <div
      tabIndex={0}
      className="post"
      key={post.id}
      onClick={() => open(post)}
      onKeyDown={onKeyDown}
    >
      <img
        src={post.url}
        alt={post.title}
      />
    </div>
  )
}
