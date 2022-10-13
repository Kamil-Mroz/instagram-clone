import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DataContext } from './Data'
export const Message = () => {
  const { users } = useContext(DataContext)
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="message-container">
      <div className="users-block">
        {users.map((u) => (
          <UserMessage
            key={u.id}
            user={u}
          />
        ))}
      </div>
      <div className="message-block">{Outlet}</div>
    </div>
  )
}
