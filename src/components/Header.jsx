import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, org } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="wrap header-row">
        <Link className="brand" to="/">
          <img src="/logo.webp" alt="" width="60" height="60" />
          <div>
            <strong>{org.name}</strong>
            <span>{org.tagline}</span>
          </div>
        </Link>
        <div className="header-end">
          <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
            ))}
          </nav>
          <Link className="btn btn-gold btn-small" to="/donate">Donate</Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  )
}
