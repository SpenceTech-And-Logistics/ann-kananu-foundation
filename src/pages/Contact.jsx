import { org } from '../data/site.js'
import { usePage, PageHead } from '../components/Bits.jsx'
import { telHref } from '../components/contact.js'

export default function Contact() {
  const ready = org.phone || org.email
  const lead = ready ? `Call or email the ${org.name}.` : 'Contact details are coming soon.'
  usePage('Contact', lead)
  return (
    <>
      <PageHead title="Contact" lead={lead} />
      {ready && (
        <section className="section">
          <div className="wrap contact">
            {org.phone && (
              <div>
                <h2>Call</h2>
                <a href={telHref}>{org.phone}</a>
              </div>
            )}
            {org.email && (
              <div>
                <h2>Email</h2>
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
