import React, { useState } from 'react'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
  FaBookmark,
  FaTimes,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { PostHeader } from './PostHeader'
import { useNumbers } from './hooks/useNumbers'
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')
export const Modal = ({ isOpen, close, user, data }) => {
  const [isBooked, setIsBooked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      contentLabel="Post"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className="modal"
      overlayClassName="overlay"
      preventScroll={true}
    >
      <figure className="img-modal-box">
        <img
          src={data?.url}
          alt={data?.title}
          className="img-modal"
        />
      </figure>

      <article className="comments">
        <PostHeader
          color={user?.color}
          username={user?.username}
        />

        {user?.comments?.map((comm) => (
          <p
            key={comm?.id}
            className="comment"
          >
            <span className="nick-small">
              {comm?.email?.slice(0, comm.email.indexOf('@'))}
            </span>{' '}
            {comm?.body}
          </p>
        ))}
        {data?.git && data?.link && data?.description ? (
          <>
            <p className="comment">
              <span className="nick-small">{user.username}</span>
              {data.description}
            </p>

            <a
              href={data.link}
              className="comment"
              style={{ display: 'block' }}
            >
              <span className="nick-small">Website:</span>
              {data.link}
            </a>
            <a
              href={data.git}
              className="comment"
              style={{ display: 'block' }}
            >
              <span className="nick-small">GitHub repo:</span>
              {data.git}
            </a>
          </>
        ) : (
          ''
        )}
        <div className="icons-modal">
          <div className="icons ">
            <FaRegHeart
              tabIndex={0}
              className={`icon-card ${isLiked && 'active'}`}
              onClick={() => setIsLiked((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return
                setIsLiked((prev) => !prev)
              }}
            />

            <FaRegComment
              tabIndex={0}
              className="icon-card"
            />
            <NavLink
              to={`/message/${user?.username.toLowerCase()}`}
              className="txt-decoration-none"
            >
              <FaRegPaperPlane className="icon-card" />
            </NavLink>
            {isBooked ? (
              <FaBookmark
                tabIndex={0}
                className="icon-card"
                onClick={() => setIsBooked((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return
                  setIsBooked((prev) => !prev)
                }}
              />
            ) : (
              <FaRegBookmark
                tabIndex={0}
                className="icon-card"
                onClick={() => setIsBooked((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return
                  setIsBooked((prev) => !prev)
                }}
              />
            )}
          </div>

          <p className="likes">
            Likes: {useNumbers(isLiked ? user?.likes + 1 : user?.likes)}
          </p>
        </div>
      </article>
      <FaTimes
        className="close-modal"
        onClick={close}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return
          close()
        }}
      />
    </ReactModal>
  )
}
