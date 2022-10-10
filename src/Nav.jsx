import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaRegHeart,
  FaRegPaperPlane,
  FaRegUser,
  FaInstagram,
} from 'react-icons/fa'
import { GrHomeRounded, GrSearch } from 'react-icons/gr'

export const Nav = () => {
  return (
    <aside className="sidebar">
      <NavLink
        to="/kamilpm"
        replace={true}
        className="logo"
      >
        <FaInstagram className="nav-icons icon-hide" />
        <span className="text-link">Instakamil</span>
      </NavLink>

      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <GrHomeRounded className="nav-icons" />{' '}
              <span className="text-link">Home page</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <GrSearch className="nav-icons" />
              <span className="text-link">Search</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <FaRegPaperPlane className="nav-icons" />
              <span className="text-link">Message</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              replace={true}
              className="link"
            >
              <FaRegHeart className="nav-icons" />
              <span className="text-link">Notifications</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/kamilpm"
              replace={true}
              className="link"
            >
              <FaRegUser className="nav-icons" />
              <span className="text-link">Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
