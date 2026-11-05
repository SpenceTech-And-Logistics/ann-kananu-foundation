import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { context, org, ways } from '../data/site.js'
import Count from './Count.jsx'
import Icon from './Icon.jsx'

export function usePage(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${org.name}` : `${org.name} | ${org.tagline}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || `${org.sub}.`)
  }, [title, description])
}

export function DonateBand() {
  return (
    <section className="donate-band">
      <div className="wrap">
        <p>{ways.find((w) => w.tag === 'Donate').text}</p>
        <Link className="btn btn-purple" to="/donate">Donate</Link>
      </div>
    </section>
  )
}

export function PageHead({ title, lead }) {
  return (
    <div className="page-head">
      <div className="wrap">
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="Kenya health figures">
      <div className="wrap stats-grid">
        {context.map((c) => (
          <div key={c.label}>
            <p className="stat-n"><Count n={c.n} s={c.s} d={c.d} /></p>
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Heading on the left, entries on the right.
export function Rows({ title, intro, items, tone = '' }) {
  return (
    <section className={`section ${tone}`}>
      <div className="wrap split">
        <div>
          <h2>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </div>
        <div className="rows">
          {items.map((it) => (
            <article key={it.tag} className="row">
              {it.icon && <span className="plate"><Icon name={it.icon} /></span>}
              <div>
                <h3>{it.tag}</h3>
                <p>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Two contrasting full-colour panels.
export function Panels({ items }) {
  return (
    <div className="panels">
      {items.map((it) => (
        <article key={it.tag} className="panel">
          <Icon name={it.icon} />
          <h3>{it.tag}</h3>
          <p>{it.text}</p>
        </article>
      ))}
    </div>
  )
}
