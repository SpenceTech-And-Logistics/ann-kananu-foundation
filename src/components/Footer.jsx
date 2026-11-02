import { Link } from 'react-router-dom'
import { nav, org } from '../data/site.js'
import { telHref } from './contact.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{org.name}</p>
          <p>{org.tagline}</p>
          <p className="footer-sub">{org.programme} ({org.short}), {org.country}</p>
        </div>
        <nav aria-label="Footer">
          {nav.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </nav>
        <div className="footer-contact">
          <a href={telHref}>{org.phone}</a>
          <a href={`mailto:${org.email}`}>{org.email}</a>
        </div>
      </div>
      <div className="wrap footer-end">
        <p>© {new Date().getFullYear()} {org.name}</p>
      </div>
    </footer>
  )
}
