import { Link } from 'react-router-dom'
import { solution, how, deliver } from '../data/site.js'
import { usePage, PageHead, Rows, Panels } from '../components/Bits.jsx'
import Icon from '../components/Icon.jsx'

export default function Programmes() {
  usePage('Programmes', 'How we integrate nutrition into primary healthcare and chronic disease care in Kenya.')
  return (
    <>
      <PageHead title="Programmes" lead="Nutrition as a clinical, preventive and adherence-support intervention, not a welfare activity." />
      <section className="section">
        <div className="wrap">
          <h2 className="below">Our solution</h2>
          <Panels items={solution} />
        </div>
      </section>
      <Rows title="How we work" items={how} tone="wash" />
      <section className="section">
        <div className="wrap">
          <h2 className="below">What we deliver</h2>
          <div className="columns">
            {deliver.map((d) => (
              <article key={d.tag}>
                <span className="plate"><Icon name={d.icon} /></span>
                <h3>{d.tag}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
          <div className="actions">
            <Link className="btn btn-purple" to="/donate">Donate</Link>
            <Link className="btn btn-outline" to="/impact">See milestones and results</Link>
          </div>
        </div>
      </section>
    </>
  )
}
