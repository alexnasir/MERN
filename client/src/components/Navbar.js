import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout} = useLogout()
const handleClick = () => {
  logout();
}

  return (
    <header>
    <div className='container'>
        <Link to="/" >
        <h1>TIZI</h1>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
        </nav>
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
    </div>
    </header>
  )
}

export default Navbar
