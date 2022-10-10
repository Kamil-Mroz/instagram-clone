import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DataProvider } from './Data'
import { Home } from './Home'
import { Nav } from './Nav'
import { Profile } from './Profile'

function App() {
  return (
    <DataProvider>
      <Nav />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/:id"
            element={<Profile />}
          />
        </Routes>
      </div>
    </DataProvider>
  )
}
//! change data

export default App
