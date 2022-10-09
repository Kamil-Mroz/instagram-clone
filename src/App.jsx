import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Profile } from './Profile'
function App() {
  return (
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
  )
}

export default App
