import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './header.scss'
import universalLogo from '../../assets/universal_logo.png'

const headerNavItems = [
  {
    display: 'Home',
    path: "/"
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'Tv Series',
    path: '/tv'
  }
]

function Header() {

  const { pathname } = useLocation()
  const headerRef = useRef(null)

  const active = headerNavItems.findIndex( e => e.path === pathname)

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add("shrink")
      } else {
        headerRef.current.classList.remove("shrink")
      }
    }
    window.addEventListener("scroll", shrinkHeader)
    return () => {
      window.removeEventListener("scroll", shrinkHeader)
    }
  }, [])
  
  return (
    <div ref={headerRef} className="header">
      <div className="header_wrapper container">
        <div className="logo">
          <img src={universalLogo} alt="universalLogo"/>
          <Link to="/">RinMovies</Link>
        </div>

        <ul className ="header_nav">
          {
            headerNavItems.map((headerNavItem, index) => (
              <li key={index} className={`${index === active ? 'active' : ''}`}>
                <Link to={headerNavItem.path}>
                  {headerNavItem.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header
