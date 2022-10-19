import React, { useContext, useMemo, useState } from 'react'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
export const Search = () => {
  const [query, setQuery] = useState()

  const { users } = useContext(DataContext)

  const onChange = (e) => {
    const value = e.target.value?.toLowerCase().trim()
    setQuery(value)
  }

  const showUsers = useMemo(
    () => users?.filter((u) => u.username.toLowerCase().includes(query)),
    [users, query]
  )

  return (
    <div className="search">
      <input
        type="search"
        onChange={onChange}
        className="search-input"
        placeholder="Search"
      />
      <div className="results-container">
        <div className="results">
          {showUsers?.map((user) => (
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
          {showUsers?.length === 0 && query && (
            <div className="header error">Profile not found</div>
          )}
        </div>
        <div className="square" />
      </div>
    </div>
  )
}
