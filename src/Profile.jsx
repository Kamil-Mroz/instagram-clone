import React, { useContext, useEffect, useRef, useState } from 'react'
import { Post } from './Post'
import { FaGripHorizontal } from 'react-icons/fa'
import { useParams, Navigate } from 'react-router-dom'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
import { FollowBtn } from './FollowBtn'
import { useNumbers } from './hooks/useNumbers'
import ReactModal from 'react-modal'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaRegPaperPlane,
  FaBookmark,
} from 'react-icons/fa'
import { PostHeader } from './PostHeader'

ReactModal.setAppElement('#root')

export const Profile = () => {
  const POSTS_ON_RENDER = 6
  const [amount, setAmount] = useState(POSTS_ON_RENDER)
  const [isBooked, setIsBooked] = useState(false)
  const { users } = useContext(DataContext)
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [data, setData] = useState({})

  const open = (data) => {
    setIsOpen(true)
    setData(data)
  }
  const close = () => {
    setIsOpen(false)
    setData({})
  }
  if (!users?.some((u) => u.username.toLowerCase() === id.toLocaleLowerCase()))
    return (
      <Navigate
        to="/"
        replace={true}
      />
    )

  const [user] = users?.filter(
    (user) => user.username.toLowerCase() === id.toLocaleLowerCase()
  )

  const posts = user?.photos?.slice(0, amount)

  const postsRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setAmount((prev) => {
            return prev + POSTS_ON_RENDER
          })
        }
      },
      { rootMargin: '100px' }
    )
    observer.observe(postsRef.current)
  }, [])

  return (
    <>
      {user && (
        <>
          <header className="profile-box">
            <div className="profile-img">
              <div
                className="img"
                style={{ backgroundColor: user.color }}
              ></div>
            </div>
            <section className="profile-info">
              <div className="profile-action">
                <p className="nick">{user.username}</p>
                <>
                  <NavLink
                    to={`/message/${user.username.toLowerCase()}`}
                    className="txt-decoration-none btn"
                  >
                    Send a message
                  </NavLink>
                  <FollowBtn />
                </>
              </div>
              <div className="profile-numbers">
                <p className="numbers">
                  Posts:<span className="bold">{user.postsNum}</span>
                </p>
                <p className="numbers">
                  followers:
                  <span className="bold">{useNumbers(user.followers)}</span>
                </p>
                <p className="numbers">
                  Follows:
                  <span className="bold">{useNumbers(user.follows)}</span>
                </p>
              </div>
              <p className="name">{user.name}</p>
              <p className="email">{user.email}</p>
              <p className="profile-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora perspiciatis consequuntur nihil quasi quidem nemo est,
                debitis et alias omnis quam unde corrupti aperiam eveniet
                perferendis assumenda dolorem velit amet.
              </p>
            </section>
          </header>
          <main>
            <div className="gallery">
              <FaGripHorizontal className="icon" />
            </div>
            <div className="posts">
              {posts?.map((post) => (
                <Post
                  post={post}
                  key={post.id}
                  open={open}
                />
              ))}
              <div ref={postsRef}></div>
            </div>
          </main>

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
              {data?.git && data?.link ? (
                <>
                  <a
                    href={data.link}
                    className="comment"
                  >
                    <span className="nick-small">Website:</span>
                    {data.link}
                  </a>
                  <a
                    href={data.git}
                    className="comment"
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
                    className={`icon-card ${isLiked && 'active'}`}
                    onClick={() => setIsLiked((prev) => !prev)}
                  />
                  <FaRegComment className="icon-card" />
                  <NavLink
                    to={`/message/${user?.username.toLowerCase()}`}
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

                <p className="likes">
                  Likes: {useNumbers(isLiked ? user?.likes + 1 : user?.likes)}
                </p>
              </div>
            </article>
          </ReactModal>
        </>
      )}
    </>
  )
}
