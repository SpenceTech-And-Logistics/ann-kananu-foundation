import { org, vision, challenge, gap, why } from '../data/site.js'
import { usePage, PageHead, Rows, Panels } from '../components/Bits.jsx'

export default function About() {
  usePage('About', org.sub)
  return (
    <>
      <PageHead title="About" lead={`${org.programme} (${org.short}). ${org.sub}.`} />
      <section className="section">
        <div className="wrap vision">
          <h2>{vision.title}</h2>
          <p>{vision.text}</p>
        </div>
      </section>
      <Rows title="The challenge" items={challenge} tone="wash" />
      <section className="section">
        <div className="wrap">
          <h2 className="below">The gap</h2>
          <Panels items={gap} />
        </div>
      </section>
      <Rows title={`Why ${org.short}`} items={why} tone="wash" />
    </>
  )
}
