import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/journey', label: 'Journey' },
  { to: '/guide', label: 'Guide' },
  { to: '/find-care', label: 'Find Care' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-canvas/95 backdrop-blur border-b border-purple-line">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-display text-xl font-semibold text-purple-deep tracking-tight flex items-center gap-1.5">
          <span className="text-2xl" aria-hidden="true">🌸</span>
          MamaCare <span className="text-pink">Kenya</span>
        </NavLink>
        <ul className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-2 sm:px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                    isActive ? 'bg-purple text-white shadow-sm shadow-purple/30' : 'text-ink-soft hover:text-purple-deep hover:bg-purple-mist'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/get-help"
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold border transition-colors ${
                  isActive
                    ? 'bg-alert text-white border-alert'
                    : 'text-alert-deep border-alert/40 bg-alert-soft hover:bg-alert hover:text-white'
                }`
              }
            >
              🚨 <span className="hidden sm:inline">Get Help</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
