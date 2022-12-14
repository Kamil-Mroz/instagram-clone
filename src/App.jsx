import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Chat } from './Chat'
import { DataProvider } from './Data'
import { Home } from './Home'

import { Message } from './Message'

import { Nav } from './Nav'
import { NotFound } from './NotFound'
import { Profile } from './Profile'
import { Search } from './Search'

function App() {
  window.scrollTo(0, 0)

  return (
    <DataProvider>
      <Nav />
      <div className="box" />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Home />}
            />
            <Route
              path="search"
              element={<Search />}
            />
            <Route
              path=":id"
              element={<Profile />}
            />
          </Route>
          <Route
            path="/message"
            element={<Message />}
          >
            <Route
              path=":user"
              element={<Chat />}
            ></Route>
          </Route>
          <Route
            path="/notfound"
            element={<NotFound />}
          />
          <Route
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </DataProvider>
  )
}

export default App
