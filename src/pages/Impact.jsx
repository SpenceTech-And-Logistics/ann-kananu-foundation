import { milestones, results } from '../data/site.js'
import { usePage, PageHead, Stats } from '../components/Bits.jsx'
import Count from '../components/Count.jsx'

export default function Impact() {
  usePage('Impact', 'Milestones and results for nutrition-centred chronic care in Kenya.')
  return (
    <>
      <PageHead title="Impact" lead="The health burden in Kenya, and the outcomes this programme is measured against." />
      <Stats />
      <section className="section">
        <div className="wrap">
          <h2 className="below">Milestones</h2>
          <div className="miles">
            {milestones.map((m) => (
              <article key={m.tag}>
                <h3>{m.tag}</h3>
                <p className="big"><Count n={m.figure.n} s={m.figure.s} /></p>
                <p className="big-label">{m.figure.label}</p>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wash">
        <div className="wrap">
          <h2 className="below">Results</h2>
          <div className="results">
            {results.map((r) => (
              <article key={r.tag}>
                <h3>{r.tag}</h3>
                <p className="big"><Count n={r.big} s={r.s} /></p>
                <p>{r.text.includes(r.unit) ? r.text : `${r.unit} ${r.text}`}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
