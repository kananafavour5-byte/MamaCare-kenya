import { Link } from 'react-router-dom'
import JourneyEntryChoice from '../components/home/JourneyEntryChoice.jsx'
import JourneySummaryCard from '../components/home/JourneySummaryCard.jsx'
import HeroIllustration from '../components/shared/HeroIllustration.jsx'
import WeekTicker from '../components/home/WeekTicker.jsx'
import { pregnancyWeekFromDueDate } from '../lib/stageCalculator.js'

export default function HomePage({ profile, onSetProfile }) {
  const hasProfile = Boolean(profile.stage && (profile.dueDate || profile.birthDate))
  const currentWeek = profile.stage === 'pregnant' && profile.dueDate
    ? pregnancyWeekFromDueDate(profile.dueDate)
    : null

  return (
    <div>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center mb-10">
        <div>
         <p className="font-body text-sm font-bold tracking-wide text-pink mb-3">
  🌸 MamaCare Kenya
</p>

<h1 className="font-display text-4xl sm:text-5xl text-purple-deep leading-[1.1] font-semibold">
  Trusted guidance for every step of your pregnancy and your baby's first months.
</h1>

<p className="text-ink-soft mt-4 max-w-xl text-lg">
  Know what to expect, what to do next, and where to go for professional care — all in one warm, welcoming place.
</p>
        </div>
        <HeroIllustration className="w-full max-w-sm mx-auto" />
      </div>

      {hasProfile ? (
        <JourneySummaryCard profile={profile} onReset={() => onSetProfile({ stage: null, dueDate: null, birthDate: null })} />
      ) : (
        <JourneyEntryChoice profile={profile} onSetProfile={onSetProfile} />
      )}

      <div className="rounded-card bg-surface border border-purple-line p-5 sm:p-6 mt-6">
        <WeekTicker currentWeek={currentWeek} stage={profile.stage} />
      </div>

<div className="grid sm:grid-cols-3 gap-5 mt-8">

  {/* Guide */}
  <Link
    to="/guide"
    className="group relative overflow-hidden rounded-card bg-gradient-to-br from-mint-soft via-white to-white border border-mint/30 p-6 min-h-52 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start justify-between">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/10 border border-mint/20">
  <svg
    className="w-7 h-7 text-mint"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
    <path d="M4 5.5v16" />
    <path d="M8 7h8" />
    <path d="M8 11h6" />
  </svg>
</div>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-mint/20 text-mint text-xl shadow-sm group-hover:translate-x-1 transition-transform">
        →
      </span>
    </div>

    <div className="relative z-10 mt-6">
      <p className="font-display text-2xl text-ink font-semibold">
        Guide
      </p>
      <p className="text-sm text-ink-soft mt-2 max-w-xs leading-relaxed">
        Browse pregnancy, newborn, and mother-care topics.
      </p>
    </div>

    <div className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-mint/10 group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute right-12 bottom-4 h-3 w-3 rounded-full bg-mint/30" />
  </Link>


  {/* Find Care */}
  <Link
    to="/find-care"
    className="group relative overflow-hidden rounded-card bg-gradient-to-br from-purple-mist via-white to-white border border-purple/20 p-6 min-h-52 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start justify-between">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple/10 border border-purple/20">
  <svg
    className="w-7 h-7 text-purple"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18" />
    <path d="M5 21V8l7-4 7 4v13" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <path d="M9 21v-4h6v4" />
  </svg>
</div>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-purple/20 text-purple text-xl shadow-sm group-hover:translate-x-1 transition-transform">
        →
      </span>
    </div>

    <div className="relative z-10 mt-6">
      <p className="font-display text-2xl text-ink font-semibold">
        Find Care
      </p>
      <p className="text-sm text-ink-soft mt-2 max-w-xs leading-relaxed">
        Locate nearby maternal and newborn health services.
      </p>
    </div>

    <div className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-purple/10 group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute right-12 bottom-4 h-3 w-3 rounded-full bg-purple/30" />
  </Link>


  {/* Get Help */}
  <Link
    to="/get-help"
    className="group relative overflow-hidden rounded-card bg-gradient-to-br from-alert-soft via-white to-white border border-alert/30 p-6 min-h-52 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start justify-between">
     <div className="flex h-14 w-14 items-center justify-center rounded-full bg-alert/10 border border-alert/20">
  <svg
    className="w-7 h-7 text-alert"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
    <path d="M10 21h4" />
    <path d="M12 3V1" />
    <path d="M5 4 4 3" />
    <path d="m19 4 1-1" />
  </svg>
</div>

      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-alert/20 text-alert text-xl shadow-sm group-hover:translate-x-1 transition-transform">
        →
      </span>
    </div>

    <div className="relative z-10 mt-6">
      <p className="font-display text-2xl text-alert-deep font-semibold">
        Get Help
      </p>
      <p className="text-sm text-alert-deep/80 mt-2 max-w-xs leading-relaxed">
        Warning signs that mean it's time to see a professional.
      </p>
    </div>

    <div className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-alert/10 group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute right-12 bottom-4 h-3 w-3 rounded-full bg-alert/30" />
  </Link>

</div>
      
    </div>
  )
}
