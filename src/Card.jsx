import React from 'react'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
} from 'react-icons/fa'
export const Card = ({ photos }) => {
  return (
    <div className="card">
      <div className="header">
        <div className="small-img-box">
          <img
            src="profile-small"
            alt=""
          />
        </div>
        <p className="nick-small">KamilPM</p>
      </div>
      <div className="img-box">
        <img src={photos?.url} />
      </div>
      <div className="card-details">
        <div className="icons">
          <FaRegHeart className="icon-card" />
          <FaRegComment className="icon-card" />
          <FaRegPaperPlane className="icon-card" />
          <FaRegBookmark className="icon-card" />
        </div>
        <p className="likes">
          Likes: {Math.floor(Math.random() * (100000 - 1000) + 1000)}
        </p>
        <p>
          <span className="nick-small">KamilPM</span> comment
        </p>
        <p>
          <span className="nick-small">KamilPM</span> other comment
        </p>
        <p>
          <span className="nick-small">KamilPM</span> comment
        </p>
      </div>
    </div>
  )
}
