import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './Data'
import { Home } from './Home'
import { Nav } from './Nav'
import { Profile } from './Profile'
import { Search } from './Search'

function App() {
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
              path="/search"
              element={<Search />}
            />
            <Route
              path="/:id"
              element={<Profile />}
            />
          </Route>
        </Routes>
      </div>
    </DataProvider>
  )
}

export default App
