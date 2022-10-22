import React from 'react'
import { NavLink } from 'react-router-dom'

export const PostHeader = ({ color, username }) => {
  return (
    <div className="header">
      <div
        className="small-img-box"
        style={{ backgroundColor: color }}
      ></div>
      <NavLink
        to={`/${username?.toLowerCase()}`}
        className="link"
      >
        <p className="nick-small">{username}</p>
      </NavLink>
    </div>
  )
}
