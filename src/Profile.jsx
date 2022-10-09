import React from 'react'
import { Post } from './Post'
import { FaGripHorizontal } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

export const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <header className="profile-box">
        <div className="profile-img">
          <img
            className="img"
            src="./assets/prof.png"
            alt="profile"
          />
        </div>
        <section className="profile-info">
          <div className="profile-action">
            <p className="nick">KamilPM</p>
            <button className="btn">Send a message</button>
            <button className="btn">follow</button>
          </div>
          <div className="profile-numbers">
            <p className="numbers">
              Posts:<span className="bold">1,157</span>
            </p>
            <p className="numbers">
              followers:<span className="bold">627K</span>
            </p>
            <p className="numbers">
              Follows:<span className="bold">2,067</span>
            </p>
          </div>
          <div className="name">Kamil Mróz</div>
          <div className="profile-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            perspiciatis consequuntur nihil quasi quidem nemo est, debitis et
            alias omnis quam unde corrupti aperiam eveniet perferendis assumenda
            dolorem velit amet.
          </div>
        </section>
      </header>
      <main>
        <div className="gallery">
          <FaGripHorizontal className="icon" />
        </div>
        <div className="posts">
          {posts?.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </main>
    </>
  )
}
