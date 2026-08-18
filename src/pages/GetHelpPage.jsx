import { Link } from 'react-router-dom'
import { EMERGENCY_NUMBERS } from '../data/getHelpData.js'
import MotherWarningSigns from '../components/help/MotherWarningSigns.jsx'
import NewbornWarningSigns from '../components/help/NewbornWarningSigns.jsx'

export default function GetHelpPage() {
  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl text-alert-deep font-semibold">🚨 Get Help</h1>
      <p className="text-ink-soft mt-2 max-w-xl">
        This page helps you recognize signs that mean it's time to see a
        health professional — for you or your baby. It doesn't diagnose
        anything, and it isn't a substitute for medical care. If something
        feels wrong, trust that instinct and reach out.
      </p>

      <div className="rounded-card bg-alert text-white p-5 mt-6">
        <p className="font-display text-lg">Emergency numbers (Kenya)</p>
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          {EMERGENCY_NUMBERS.map((n) => (
            <div key={n.label}>
              <p className="font-mono text-2xl font-semibold">{n.value}</p>
              <p className="text-sm text-white/85">{n.label} — {n.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/75 mt-3">
          Outside major towns, ambulance response can be slower or
          unavailable — getting to the nearest facility by any safe,
          available transport is often the faster option.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-2xl text-ink">👩 Mother</h2>
        <div className="mt-4"><MotherWarningSigns /></div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl text-ink">👶 Newborn</h2>
        <div className="mt-4"><NewbornWarningSigns /></div>
      </section>

      <div className="rounded-card bg-purple-mist border border-purple/20 p-5 mt-8 flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="font-semibold text-ink">Not sure, but something feels off?</p>
          <p className="text-sm text-ink-soft">Trust that. You don't need to be certain to go get it checked.</p>
        </div>
        <Link
          to="/find-care"
          className="rounded-full bg-purple text-white text-sm font-semibold px-4 py-2 hover:bg-purple-deep transition-colors shrink-0"
        >
          Find a facility →
        </Link>
      </div>
    </div>
  )
}
