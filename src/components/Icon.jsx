const paths = {
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />,
  puzzle: <path d="M4 8h4.5a2 2 0 1 1 3.8 0H16v3.7a2 2 0 1 1 0 3.8V20h-4.2a2 2 0 1 0-3.6 0H4v-4.3a2 2 0 1 0 0-3.6V8Z" />,
  leaf: <><path d="M5 19C4 10 10 4 20 4c0 10-6 16-15 15Z" /><path d="M5 19 14 10" /></>,
  users: <><circle cx="9" cy="8.5" r="3.2" /><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6" /><path d="M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.5c2.1.8 3.5 2.8 3.5 5.5" /></>,
  clinic: <><path d="M4 20V8l8-4 8 4v12H4Z" /><path d="M12 9v6M9 12h6M10 20v-2.5h4V20" /></>,
  chart: <path d="M4 4v16h16M8 16v-4M12.5 16V8M17 16v-6" />,
  pulse: <path d="M3 12h4.5l2-5 4 11 2.5-6H21" />,
  hands: <path d="M3 13l4-4 4 2 3-2 7 5-3 3-1.5-1-1.5 2-1.5-1-1.5 2-2-1.2L3 13Zm8-2-2.5 3M14 9l3-1" />,
}

export default function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}
