import { org } from '../data/site.js'
import { usePage, PageHead } from '../components/Bits.jsx'
import { telHref } from '../components/contact.js'

export default function Contact() {
  usePage('Contact', `Call or email the ${org.name}.`)
  return (
    <>
      <PageHead title="Contact" lead={`Call or email the ${org.name}.`} />
      <section className="section">
        <div className="wrap contact">
          <div>
            <h2>Call</h2>
            <a href={telHref}>{org.phone}</a>
          </div>
          <div>
            <h2>Email</h2>
            <a href={`mailto:${org.email}`}>{org.email}</a>
          </div>
        </div>
      </section>
    </>
  )
}
