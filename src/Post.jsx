import React from 'react'

export const Post = ({ post }) => {
  return (
    <div
      className="post"
      key={post.id}
    >
      <img
        src={post.url}
        alt={post.title}
      />
    </div>
  )
}
