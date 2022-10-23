import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DataContext } from './Data'
import { UserMessage } from './UserMessage'
import { FaChevronRight } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
export const Message = () => {
  const { users } = useContext(DataContext)
  const [isClosed, setIsClosed] = useState(false)

  const location = useLocation()
  console.log(location)
  useEffect(() => {
    if (location.pathname === '/message' && isClosed !== false)
      setIsClosed(false)
  }, [location])

  const open = () => {
    setIsClosed(true)
  }
  const close = () => {
    setIsClosed(false)
  }

  console.log(isClosed)
  return (
    <div className={`message-container ${isClosed ? 'grid-one-col' : ''}`}>
      <div className={`users-block ${isClosed ? 'display-none' : ''}`}>
        {users?.map((u) => (
          <Link
            to={u?.username?.toLowerCase()}
            key={u?.id}
            className="link link--message"
            onClick={open}
          >
            <UserMessage user={u} />
          </Link>
        ))}
      </div>
      <div className="message-block">
        <Outlet />
      </div>
      {isClosed && (
        <FaChevronRight
          className="show-users"
          onClick={close}
        />
      )}
    </div>
  )
}
