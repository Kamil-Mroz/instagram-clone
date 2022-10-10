import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegHeart, FaRegPaperPlane, FaRegUser } from 'react-icons/fa'
import { GrHomeRounded, GrSearch } from 'react-icons/gr'

export const Nav = () => {
  return (
    <aside className="sidebar">
      <NavLink
        to="/kamilpm"
        replace={true}
        className="logo"
      >
        Instakamil
      </NavLink>

      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <GrHomeRounded className="nav-icons" /> Home page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <GrSearch className="nav-icons" />
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <FaRegPaperPlane className="nav-icons" /> Message
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <FaRegHeart className="nav-icons" /> Notifications
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/kamilpm"
              replace={true}
              className="link"
            >
              <FaRegUser className="nav-icons" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
