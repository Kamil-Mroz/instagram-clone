import React from 'react'

function App() {
  return (
    <div className="container">
      <header className="profile-box">
        <figure className="profile-img">
          <div className="img"></div>
        </figure>
        <section className="profile-info">
          <div className="profile-action">
            <p className="nick">KamilPM</p>
            <button className="btn">send a message</button>
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
      <main className="posts">
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="post">
          <img
            src=""
            alt=""
          />
        </div>
      </main>
    </div>
  )
}

export default App
