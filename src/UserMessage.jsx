import React from 'react'

export const UserMessage = ({ user }) => {
  return (
    <div className="header">
      <div
        className="small-img-box"
        style={{ backgroundColor: user.color }}
      ></div>
      <p className="nick-small">{user.username}</p>
    </div>
  )
}
