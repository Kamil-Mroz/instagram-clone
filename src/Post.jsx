import React, { useState } from 'react'

export const Post = ({ post, open }) => {
  return (
    <div
      className="post"
      key={post.id}
      onClick={() => open(post)}
    >
      <img
        src={post.url}
        alt={post.title}
      />
    </div>
  )
}
