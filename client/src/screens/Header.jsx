import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'
import '../styles/Flex.css'
import '../styles/Header.css'

const authenticatedLinks = (
  <React.Fragment>
    {/* <NavLink to="/change-password">Change Password</NavLink> */}

    <div className='dropdown-container'>
      <h3 className='navlink-text dropdown-text'>Tracks</h3>
      <div className='dropdown-menu'>
        <div className='flex-col'>
          <NavLink to="tracks" className='navlink-text dropdown-text'>Public Tracks</NavLink>
          <NavLink to="/my-tracks" className='navlink-text dropdown-text'>My Tracks</NavLink>
        </div>  
      </div>
    </div>
    
    <NavLink to="/sign-out" className='navlink-text'>Sign Out</NavLink>
  </React.Fragment>
)

const unauthenticatedLinks = (
  <React.Fragment>
    <NavLink to="tracks" className='navlink-text'>Public Tracks</NavLink>
    <div className='account-links flex-row'>
      <NavLink to="/sign-in" className='navlink-text'>Log In</NavLink>
      <NavLink to="/sign-up" className='navlink-text'>Sign Up</NavLink>
    </div>
  </React.Fragment>
)

const alwaysLinks = (
  <div className="brand-link flex-row">
    <NavLink to="/">
      <h3>RICHORD</h3>
    </NavLink>
  </div>
)

const Header = ({ user }) => (
  <Navbar>
    <div className="nav flex-row">
      {alwaysLinks}
      {user && <span className="navbar-text">Welcome, {user.username}</span>}
      <div className="nav-links flex-row">
        {user ? authenticatedLinks : unauthenticatedLinks}
      </div>
    </div>
  </Navbar>
)

export default Header
