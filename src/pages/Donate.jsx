import { donate, funding, ways } from '../data/site.js'
import { usePage, PageHead } from '../components/Bits.jsx'

const appeal = ways.find((w) => w.tag === 'Donate').text

// The form stays switched off until a payment provider is connected, so it collects nothing yet.
export default function Donate() {
  usePage('Donate', appeal)
  return (
    <>
      <PageHead title="Donate" lead={appeal} />
      <section className="section">
        <div className="wrap donate-grid">
          <form className="donate-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Make a donation</h2>
            <fieldset disabled>
              <label>Full name<input type="text" name="name" autoComplete="name" /></label>
              <label>Email<input type="email" name="email" autoComplete="email" /></label>
              <label>Amount (KES)<input type="number" name="amount" min="1" inputMode="numeric" /></label>
              <button className="btn btn-purple" type="submit">Donate</button>
            </fieldset>
            <p className="donate-note" role="status">Online donations open soon.</p>
          </form>
          <div className="donate-side">
            <p className="donate-ask">{funding.ask}</p>
            <p className="donate-ask-label">{funding.askLabel}</p>
            <h2>What your donation supports</h2>
            <ul>{funding.uses.map((u) => <li key={u}>{u}</li>)}</ul>
          </div>
        </div>
      </section>
      {donate.accounts.length > 0 && (
        <section className="section wash">
          <div className="wrap">
            <h2 className="below">Our accounts</h2>
            <div className="accounts">
              {donate.accounts.map((a) => (
                <article key={a.label}>
                  <h3>{a.label}</h3>
                  <dl>
                    {a.lines.map(([k, v]) => (
                      <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
