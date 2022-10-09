import React from 'react'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
} from 'react-icons/fa'
export const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="header">
        <div
          className="small-img-box"
          style={{ backgroundColor: post?.userInfo?.color }}
        ></div>
        <p className="nick-small">{post?.userInfo?.username}</p>
      </div>
      <div className="img-box">
        <img
          src={post?.photo?.url}
          alt={post?.title}
        />
      </div>
      <div className="card-details">
        <div className="icons">
          <FaRegHeart className="icon-card" />
          <FaRegComment className="icon-card" />
          <FaRegPaperPlane className="icon-card" />
          <FaRegBookmark className="icon-card" />
        </div>
        <p className="likes">Likes: {post.likes}</p>
        <p>
          <span className="nick-small">{post?.userInfo?.username}</span>{' '}
          {post?.body}
        </p>
        {post?.comments?.map((comm) => (
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
