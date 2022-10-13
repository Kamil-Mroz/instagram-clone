import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './Data'
export const MessageForm = () => {
  const { users } = useContext(DataContext)
  const { user: id } = useParams()
  const [user] = users?.filter(
    (user) => user.username.toLowerCase() === id.toLocaleLowerCase()
  )
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="form-wrapper">
      <div className="message-to">{user?.username}</div>
      <form
        className="message-form"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="subject"
          id="subject"
          className="message-input"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="message-input"
        ></textarea>
        <button className="btn">Send</button>
      </form>
    </div>
  )
}