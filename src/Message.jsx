import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DataContext } from './Data'
import { UserMessage } from './UserMessage'
export const Message = () => {
  const { users } = useContext(DataContext)

  return (
    <div className="message-container">
      <div className="users-block">
        {users.map((u) => (
          <Link
            to={u.username.toLowerCase()}
            key={u.id}
            className="link link--message"
          >
            <UserMessage user={u} />
          </Link>
        ))}
      </div>
      <div className="message-block">
        <Outlet />
      </div>
    </div>
  )
}
