import { useEffect, useRef, useState } from 'react'

const fmt = (v, d = 0) => v.toLocaleString('en-KE', { minimumFractionDigits: d, maximumFractionDigits: d })

// Counts up once when scrolled into view. Without motion it shows the final value.
export default function Count({ n, s = '', d = 0 }) {
  const el = useRef(null)
  const [value, setValue] = useState(n)

  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (still || !('IntersectionObserver' in window)) return
    let raf
    setValue(0)
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / 1400, 1)
        setValue(n * (1 - Math.pow(1 - t, 3)))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [n])

  return (
    <span ref={el} className="count" aria-label={`${fmt(n, d)}${s}`}>
      <span aria-hidden="true">{fmt(value, d)}{s}</span>
    </span>
  )
}
