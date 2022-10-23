import React, { useContext, useRef, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
import { FaRegPaperPlane } from 'react-icons/fa'
export const Chat = () => {
  const inputRef = useRef(null)
  const [messages, setMessages] = useState([])
  const { users } = useContext(DataContext)
  const { user: id } = useParams()

  const [user] = useMemo(
    () =>
      users?.filter(
        (user) => user?.username?.toLowerCase() === id.toLocaleLowerCase()
      ),
    [users, id]
  )
  useEffect(() => {
    inputRef.current.value = ''
  }, [id])

  const onSubmit = (e) => {
    e?.preventDefault()

    const value = inputRef.current.value
    if (!value) return

    setMessages((prev) => [...prev, value])
    inputRef.current.value = ''
  }
  return (
    <div className="form-wrapper">
      <div className="message-to">
        <NavLink
          to={`/${user?.username.toLowerCase()}`}
          className="txt-decoration-none"
        >
          {user?.username}
        </NavLink>
      </div>
      <div className="chat">
        {messages?.map((mess, index) => (
          <div
            key={index}
            className="message"
          >
            {mess}
          </div>
        ))}
      </div>
      <form
        className="chat-form"
        onSubmit={onSubmit}
      >
        <div className="input-group">
          <textarea
            type="text"
            name="subject"
            id="subject"
            className="chat-input"
            ref={inputRef}
            rows={1}
            onKeyDown={(e) => {
              if (e.key !== 'Enter') return
              onSubmit(e)
            }}
          ></textarea>
          <button className="chat-submit">
            <FaRegPaperPlane />
          </button>
        </div>
      </form>
    </div>
  )
}
