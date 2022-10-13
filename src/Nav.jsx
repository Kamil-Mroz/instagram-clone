import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link
        to="bret"
        replace={true}
        className="logo"
      >
        <FaInstagram className="nav-icons icon-hide" />
        <span className="text-link">Instakamil</span>
      </Link>

      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              replace={true}
              className="link"
            >
              <GrHomeRounded className="nav-icons" />{' '}
              <span className="text-link">Home page</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="search"
              replace={true}
              className="link"
            >
              <GrSearch className="nav-icons" />
              <span className="text-link">Search</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/message"
              replace={true}
              className="link"
            >
              <FaRegPaperPlane className="nav-icons" />
              <span className="text-link">Message</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              replace={true}
              className="link"
            >
              <FaRegHeart className="nav-icons" />
              <span className="text-link">Notifications</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/kamilpm"
              replace={true}
              className="link"
            >
              <FaRegUser className="nav-icons" />
              <span className="text-link">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
