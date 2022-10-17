import React, { useContext, useRef, useState } from 'react'
import { Post } from './Post'
import { FaGripHorizontal } from 'react-icons/fa'
import { useParams, Navigate } from 'react-router-dom'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
import { FollowBtn } from './FollowBtn'
import { useNumbers } from './hooks/useNumbers'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export const Profile = () => {
  const { users } = useContext(DataContext)
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({})
  console.log(data)
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

  const posts = user?.photos.slice(0, 20)

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
            </div>
          </main>
          <ReactModal
            isOpen={isOpen}
            onRequestClose={close}
            contentLabel="Post"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            className="Modal"
            overlayClassName="Overlay"
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
              <div className="header">
                <div
                  className="small-img-box"
                  style={{ backgroundColor: user?.color }}
                ></div>
                <NavLink
                  to={`/${user?.username?.toLowerCase()}`}
                  className="link"
                >
                  <p className="nick-small">{user?.username}</p>
                </NavLink>
              </div>
            </article>
          </ReactModal>
        </>
      )}
    </>
  )
}
