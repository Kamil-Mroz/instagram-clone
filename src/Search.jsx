import React, { useContext, useRef, useState, useEffect } from 'react'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
export const Search = () => {
  const [usersSearch, setUsersSearch] = useState([])
  const inputRef = useRef()
  const { users } = useContext(DataContext)

  const onChange = () => {
    const value = inputRef.current.value.toLowerCase().trim()

    const showUsers = users?.filter((u) =>
      u.username.toLowerCase().includes(value)
    )
    setUsersSearch(showUsers)
  }

  return (
    <div className="search">
      <input
        type="text"
        onChange={() => onChange()}
        ref={inputRef}
        className="search-input"
      />
      <div className="results">
        {usersSearch?.map((user) => (
          <NavLink
            to={`/${user.username.toLowerCase()}`}
            key={user.id}
            className="link hover"
          >
            <div className="header">
              <div
                className="small-img-box"
                style={{ backgroundColor: user.color }}
              />
              <p className="nick-small">{user.username}</p>
            </div>
          </NavLink>
        ))}
        {usersSearch?.length === 0 && inputRef?.current?.value && (
          <div className="header">Profile not found</div>
        )}
      </div>
    </div>
  )
}
