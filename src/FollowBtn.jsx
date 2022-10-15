import React, { useState } from 'react'
import { FaUserCheck } from 'react-icons/fa'
export const FollowBtn = () => {
  const [isFollowing, setIsFollowing] = useState(false)
  const onClick = () => {
    setIsFollowing((prev) => !prev)
  }
  return (
    <button
      className={`btn ${isFollowing ? 'follow' : 'un-follow'}`}
      onClick={onClick}
    >
      {isFollowing ? (
        <FaUserCheck style={{ margin: 0, padding: 0 }} />
      ) : (
        'Follow'
      )}
    </button>
  )
}
