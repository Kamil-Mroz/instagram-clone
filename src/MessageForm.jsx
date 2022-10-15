import React, { useContext, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './Data'
import { NavLink } from 'react-router-dom'
export const MessageForm = () => {
  const inputRef = useRef(null)
  const textareaRef = useRef(null)
  const { users } = useContext(DataContext)
  const { user: id } = useParams()
  const [user] = users?.filter(
    (user) => user?.username.toLowerCase() === id.toLocaleLowerCase()
  )
  useEffect(() => {
    inputRef.current.value = ''
    textareaRef.current.value = ''
  }, [id])
  const onSubmit = (e) => {
    e.preventDefault()
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
      <form
        className="message-form"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="subject"
          id="subject"
          className="message-input"
          ref={inputRef}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="message-input"
          ref={textareaRef}
        ></textarea>
        <button className="form-button">Send</button>
      </form>
    </div>
  )
}
