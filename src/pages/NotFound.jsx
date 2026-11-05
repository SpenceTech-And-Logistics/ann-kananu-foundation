import { Link } from 'react-router-dom'
import { usePage, PageHead } from '../components/Bits.jsx'

export default function NotFound() {
  usePage('Page not found')
  return (
    <>
      <PageHead title="Page not found" lead="This address does not match a page on the site." />
      <section className="section">
        <div className="wrap"><Link className="btn btn-purple" to="/">Go to the home page</Link></div>
      </section>
    </>
  )
}
