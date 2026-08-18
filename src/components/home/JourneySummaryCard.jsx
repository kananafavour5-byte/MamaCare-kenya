import { Link } from 'react-router-dom'
import JourneyPathSignature from '../shared/JourneyPathSignature.jsx'
import { pregnancyWeekFromDueDate, babyAgeInDays, formatBabyAge } from '../../lib/stageCalculator.js'
import { findPregnancyBand, findNewbornBand } from '../../data/journeyContent.js'

export default function JourneySummaryCard({ profile, onReset }) {
  const isPregnant = profile.stage === 'pregnant'
  const week = isPregnant ? pregnancyWeekFromDueDate(profile.dueDate) : null
  const ageDays = !isPregnant ? babyAgeInDays(profile.birthDate) : null
  const band = isPregnant ? findPregnancyBand(week) : findNewbornBand(ageDays)
  const progress = isPregnant ? Math.min(week / 40, 1) : Math.min(ageDays / 182, 1)

  return (
    <div className="rounded-card bg-surface border border-purple-line p-6 sm:p-8 shadow-sm shadow-purple/5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-wide text-purple-deep">
          {isPregnant ? `Pregnancy \u00b7 Week ${week}` : `Baby \u00b7 ${formatBabyAge(ageDays)}`}
        </p>
        <button onClick={onReset} className="text-xs text-ink-soft underline underline-offset-2 hover:text-purple">
          Change
        </button>
      </div>

      <div className="flex items-center gap-3 mt-1 flex-wrap">
        <p className="font-display text-2xl text-ink">{band.title}</p>
        {isPregnant && band.milestone && (
  <span className="inline-flex items-center rounded-full bg-pink-soft text-pink px-3 py-1 text-sm font-semibold">
    {band.milestone}
  </span>
)}
      </div>

      <div className="mt-4">
        <JourneyPathSignature
  progress={progress}
  stage={isPregnant ? 'pregnant' : 'postpartum'}
  label={isPregnant ? `${week} of 40 weeks` : formatBabyAge(ageDays)}
/>
      </div>
      <p className="text-sm text-ink-soft mt-3">{band.whatsHappening}</p>
      <div className="flex flex-wrap gap-3 mt-5">
        <Link to="/dashboard" className="rounded-full bg-purple text-white text-sm font-semibold px-4 py-2 hover:bg-purple-deep transition-colors shadow-sm shadow-purple/30">
          📊 Open my dashboard
        </Link>
        <Link to="/journey" className="rounded-full border border-purple-line text-purple-deep text-sm font-semibold px-4 py-2 hover:border-purple transition-colors">
          Full journey
        </Link>
        <Link to="/get-help" className="rounded-full border border-alert/40 text-alert-deep text-sm font-semibold px-4 py-2 hover:bg-alert-soft transition-colors">
          🚨 Get Help
        </Link>
      </div>
    </div>
  )
}
