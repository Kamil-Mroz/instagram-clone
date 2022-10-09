import React from 'react'

export const Post = ({ url, title }) => {
  return (
    <div className="post">
      <img
        src={url}
        alt={title}
      />
    </div>
  )
}
