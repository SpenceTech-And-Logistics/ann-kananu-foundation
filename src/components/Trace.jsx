// The hero's one big moment: a heartbeat trace that grows into a plant.
const leaves = [
  [1181, 500, -158, 1.05],
  [1180, 420, -22, 1.2],
  [1168, 322, -160, 1.15],
  [1172, 240, -30, 1.05],
  [1190, 150, -150, 0.9],
  [1206, 84, -55, 0.8],
]

export default function Trace() {
  return (
    <svg className="trace" viewBox="0 0 1440 720" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
      <path
        className="trace-line"
        pathLength="1"
        d="M0 640H300l16-12 16 12h26l12 20 22-136 22 156 14-40h44l20-18 22 18H640l16-12 16 12h26l12 20 22-136 22 156 14-40h44l20-18 22 18h130c90 0 158-22 176-110 22-110-30-210 8-340 6-20 14-36 26-50"
      />
      {leaves.map(([x, y, r, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <path className="leaf" style={{ animationDelay: `${1.7 + i * 0.16}s` }} d="M0 0C24-44 84-56 132-34 112 14 46 34 0 0Z" />
        </g>
      ))}
    </svg>
  )
}
