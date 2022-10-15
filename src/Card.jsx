import React, { useState } from 'react'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
  FaBookmark,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Card = ({ post }) => {
  const [isShowMore, setIsShowMore] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isBooked, setIsBooked] = useState(false)
  const comments = post?.comments.slice(0, isShowMore ? -1 : 1)
  return (
    <div className="card">
      <div className="header">
        <div
          className="small-img-box"
          style={{ backgroundColor: post?.userInfo?.color }}
        ></div>
        <NavLink
          to={`/${post?.userInfo?.username.toLowerCase()}`}
          className="link"
        >
          <p className="nick-small">{post?.userInfo?.username}</p>
        </NavLink>
      </div>
      <div className="img-box">
        <img
          src={post?.photo?.url}
          alt={post?.title}
        />
      </div>
      <div className="card-details">
        <div className="icons">
          <FaRegHeart
            className={`icon-card ${isLiked && 'active'}`}
            onClick={() => setIsLiked((prev) => !prev)}
          />
          <FaRegComment className="icon-card" />
          <NavLink
            to={`/message/${post?.userInfo?.username.toLowerCase()}`}
            className="txt-decoration-none"
          >
            <FaRegPaperPlane className="icon-card" />
          </NavLink>
          {isBooked ? (
            <FaBookmark
              className="icon-card"
              onClick={() => setIsBooked((prev) => !prev)}
            />
          ) : (
            <FaRegBookmark
              className="icon-card"
              onClick={() => setIsBooked((prev) => !prev)}
            />
          )}
        </div>
        <p className="likes">Likes: {isLiked ? post.likes + 1 : post.likes}</p>
        <p className="own-comment">
          <span className="nick-small">{post?.userInfo?.username}</span>{' '}
          {post?.title}
        </p>
        {!isShowMore && (
          <button
            onClick={() => setIsShowMore((prev) => !prev)}
            className="show-more"
          >
            show more comments
          </button>
        )}
        {comments.map((comm) => (
          <p key={comm?.id}>
            <span className="nick-small">
              {comm?.email?.slice(0, comm.email.indexOf('@'))}
            </span>{' '}
            {comm?.body}
          </p>
        ))}
      </div>
    </div>
  )
}
