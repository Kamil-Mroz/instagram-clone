import React, { useContext } from 'react'
import { Post } from './Post'
import { FaGripHorizontal } from 'react-icons/fa'
import { useParams, Navigate } from 'react-router-dom'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
import { FollowBtn } from './FollowBtn'
import { useNumbers } from './hooks/useNumbers'
export const Profile = () => {
  const { users } = useContext(DataContext)
  const { id } = useParams()

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
                <NavLink
                  to={`/message/${user.username.toLowerCase()}`}
                  className="txt-decoration-none btn"
                >
                  Send a message
                </NavLink>
                <FollowBtn />
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
                />
              ))}
            </div>
          </main>
        </>
      )}
    </>
  )
}
