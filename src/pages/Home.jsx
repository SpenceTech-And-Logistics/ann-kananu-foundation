import { Link } from 'react-router-dom'
import { org, ticker, vision, challenge, solution, ways } from '../data/site.js'
import { usePage, Stats, Rows, Panels } from '../components/Bits.jsx'
import Icon from '../components/Icon.jsx'
import Trace from '../components/Trace.jsx'

export default function Home() {
  usePage()
  return (
    <>
      <section className="hero">
        <Trace />
        <div className="wrap hero-text">
          <p className="hero-kicker">{org.programme} ({org.short})</p>
          <h1>{vision.title}</h1>
          <p className="hero-sub">{org.sub}</p>
          <div className="actions">
            <Link className="btn btn-mango" to="/programmes">See our programmes</Link>
            <Link className="btn btn-line" to="/get-involved">Get involved</Link>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label={ticker.join(', ')}>
        <div className="ticker-move" aria-hidden="true">
          {[0, 1].map((k) => (
            <div key={k}>{ticker.concat(ticker).map((t, i) => <span key={i}>{t}</span>)}</div>
          ))}
        </div>
      </div>

      <Stats />

      <section className="section">
        <div className="wrap vision">
          <h2>Our vision</h2>
          <p>{vision.text}</p>
        </div>
      </section>

      <Rows title="The challenge" items={challenge} tone="wash" />

      <section className="section">
        <div className="wrap">
          <h2 className="below">Our solution</h2>
          <Panels items={solution} />
          <Link className="text-link" to="/programmes">Read how the programme works</Link>
        </div>
      </section>

      <section className="section wash">
        <div className="wrap">
          <h2 className="below">Work with us</h2>
          <div className="ways">
            {ways.map((w) => (
              <article key={w.tag}>
                <span className="plate"><Icon name={w.icon} /></span>
                <h3>{w.tag}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
          <Link className="btn btn-beet" to="/get-involved">Get involved</Link>
        </div>
      </section>
    </>
  )
}
