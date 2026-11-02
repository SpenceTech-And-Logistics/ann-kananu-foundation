import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Programmes from './pages/Programmes.jsx'
import Impact from './pages/Impact.jsx'
import GetInvolved from './pages/GetInvolved.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()
  const main = useRef(null)
  const first = useRef(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (first.current) first.current = false
    else main.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" ref={main} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
