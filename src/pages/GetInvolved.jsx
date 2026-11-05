import { Link } from 'react-router-dom'
import { funding, org, ways } from '../data/site.js'
import { usePage, PageHead } from '../components/Bits.jsx'
import { mailHref } from '../components/contact.js'
import Icon from '../components/Icon.jsx'

const actions = {
  Partner: ['Email us about partnering', 'Partnership enquiry'],
  'Learn more': ['Request the programme deck', 'Programme deck request'],
}

export default function GetInvolved() {
  usePage('Get involved', 'Partner with us or support Year 1 operations of nutrition-centred chronic care in Kenya.')
  return (
    <>
      <PageHead title="Get involved" lead="Partner with us, support Year 1 operations, or ask to see how the programme works." />
      <section className="funding">
        <div className="wrap funding-grid">
          <div>
            <p className="funding-ask">{funding.ask}</p>
            <p className="funding-label">{funding.askLabel}</p>
            <div className="actions"><Link className="btn btn-gold" to="/donate">Donate</Link></div>
          </div>
          <div>
            <h2>What the funding covers</h2>
            <ul>{funding.uses.map((u) => <li key={u}>{u}</li>)}</ul>
            <p>{funding.text}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="below">Ways to help</h2>
          <div className="ways">
            {ways.map((w) => (
              <article key={w.tag}>
                <span className="plate"><Icon name={w.icon} /></span>
                <h3>{w.tag}</h3>
                <p>{w.text}</p>
                {w.tag === 'Donate'
                  ? <Link className="text-link" to="/donate">Go to the donation page</Link>
                  : org.email && <a className="text-link" href={mailHref(actions[w.tag][1])}>{actions[w.tag][0]}</a>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
