import { Link } from 'react-router-dom'
import JourneyPathSignature from '../components/shared/JourneyPathSignature.jsx'
import EmptyState from '../components/shared/EmptyState.jsx'
import DashboardHero from '../components/dashboard/DashboardHero.jsx'
import KickCounter from '../components/track/KickCounter.jsx'
import MoodTracker from '../components/track/MoodTracker.jsx'
import TodayTracker from '../components/track/TodayTracker.jsx'
import { useChecklist } from '../hooks/useChecklist.js'
import {
  pregnancyWeekFromDueDate,
  babyAgeInDays,
  formatBabyAge,
  daysUntilDueDate,
  trimesterFromWeek,
} from '../lib/stageCalculator.js'
import { findPregnancyBand, findNewbornBand } from '../data/journeyContent.js'


/**
 * A single stat card for the dashboard's "at a glance" row.
 */
function StatPill({ label, value, tone = 'purple', icon }) {
  const toneClasses = {
    purple: 'bg-purple-mist text-purple-deep',
    pink: 'bg-pink-soft text-pink',
    mint: 'bg-mint-soft text-mint',
    peach: 'bg-peach-soft text-peach',
  }

  return (
    <div
      className={`
        rounded-[20px]
        px-5 py-4
        min-h-[116px]
        border border-white/70
        shadow-sm
        hover:-translate-y-0.5
        hover:shadow-md
        transition-all duration-200
        ${toneClasses[tone]}
      `}
    >
      <div className="flex items-start gap-3">

        <div className="shrink-0 h-12 w-12 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-xl">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] opacity-70">
            {label}
          </p>

          <p className="font-display text-xl sm:text-2xl font-semibold mt-2 leading-tight">
            {value}
          </p>
        </div>

      </div>
    </div>
  )
}


/**
 * MotherDashboardPage
 *
 * One dashboard for both:
 * - pregnant mothers
 * - new mothers with a newborn
 *
 * The information is derived from the profile already collected on Home.
 */
export default function DashboardPage({ profile }) {
  const hasProfile = Boolean(
    profile.stage && (profile.dueDate || profile.birthDate)
  )

  const isPregnant = profile.stage === 'pregnant'

  const week =
    hasProfile && isPregnant
      ? pregnancyWeekFromDueDate(profile.dueDate)
      : null

  const ageDays =
    hasProfile && !isPregnant
      ? babyAgeInDays(profile.birthDate)
      : null

  const band = hasProfile
    ? isPregnant
      ? findPregnancyBand(week)
      : findNewbornBand(ageDays)
    : null

  const progress = hasProfile
    ? isPregnant
      ? Math.min(week / 40, 1)
      : Math.min(ageDays / 182, 1)
    : 0

  const { isChecked, toggle } = useChecklist(band?.id ?? 'none')

  if (!hasProfile) {
    return (
      <EmptyState
        icon="📊"
        title="Your dashboard starts on Home"
        body="Share your due date or your baby's birth date on Home to unlock your personal dashboard."
      />
    )
  }

  const totalItems = band.focus.length

  const doneItems = band.focus.filter(
    (item) => isChecked(item.label)
  ).length

  const checklistProgress =
    totalItems === 0 ? 0 : doneItems / totalItems

  return (
    <div>

      {/* ------------------------------------------------ */}
      {/* DASHBOARD INTRO                                  */}
      {/* ------------------------------------------------ */}

      <div className="mb-6">

        <p className="font-mono text-xs uppercase tracking-wide text-purple-deep mb-2">
          📊 Your Dashboard
        </p>

        <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold">
          {isPregnant
            ? 'A little look at your journey'
            : 'A little look at you & baby'}
        </h1>

        <p className="text-ink-soft mt-2 max-w-xl">
          Your progress, this week's focus, and the little things worth keeping track of.
        </p>

      </div>


      {/* ------------------------------------------------ */}
      {/* HERO                                             */}
      {/* ------------------------------------------------ */}

      <DashboardHero
        isPregnant={isPregnant}
        week={week}
        ageDays={ageDays}
        formatBabyAge={formatBabyAge}
        band={band}
        progress={progress}
      />


      {/* ------------------------------------------------ */}
      {/* AT A GLANCE                                      */}
      {/* ------------------------------------------------ */}

      <div className="mt-6">

        <p className="font-display text-lg text-purple-deep font-semibold mb-3">
          {isPregnant
            ? 'Your week at a glance'
            : 'Today at a glance'}
        </p>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

          {isPregnant ? (
            <>

              <StatPill
                label="Week"
                value={week}
                tone="purple"
                icon="▣"
              />

              <StatPill
                label="Trimester"
                value={trimesterFromWeek(week).replace(' trimester', '')}
                tone="pink"
                icon="◉"
              />

              <StatPill
                label={
                  daysUntilDueDate(profile.dueDate) >= 0
                    ? 'Days to go'
                    : 'Days overdue'
                }
                value={Math.abs(
                  daysUntilDueDate(profile.dueDate)
                )}
                tone="mint"
                icon="✓"
              />

              <StatPill
                label="Baby's development"
                value={band.milestone || '—'}
                tone="peach"
                icon="♡"
              />

            </>
          ) : (
            <>

              <StatPill
                label="Baby's age"
                value={formatBabyAge(ageDays)}
                tone="purple"
                icon="◉"
              />

              <StatPill
                label="Days old"
                value={ageDays}
                tone="pink"
                icon="▣"
              />

              <StatPill
                label="Current stage"
                value={band.monthLabel || band.title}
                tone="mint"
                icon="⌁"
              />

              <StatPill
                label="This week's focus"
                value={`${doneItems}/${totalItems}`}
                tone="peach"
                icon="◎"
              />

            </>
          )}

        </div>

      </div>


      {/* ------------------------------------------------ */}
      {/* JOURNEY                                          */}
      {/* ------------------------------------------------ */}

      <div className="mt-5">

        <JourneyPathSignature
          progress={progress}
          stage={isPregnant ? 'pregnant' : 'postpartum'}
          label={
            isPregnant
              ? `Week ${week} of 40`
              : formatBabyAge(ageDays)
          }
        />

      </div>

      {isPregnant && <KickCounter />}

      {isPregnant && (
  <div className="mt-4">
    <Link
      to="/track"
      className="block w-full text-center rounded-full border border-purple-line bg-white/70 px-5 py-2.5 text-sm font-semibold text-purple-deep hover:bg-white transition-colors"
    >
      Track pregnancy today →
    </Link>
  </div>
)}

      {!isPregnant && <MoodTracker />}

      {!isPregnant && <TodayTracker />}



      {/* ------------------------------------------------ */}
      {/* WEEKLY CHECKLIST                                 */}
      {/* ------------------------------------------------ */}

      {/* --- Interactive checklist --- */}
<section
  className={`mt-5 rounded-[24px] border p-5 sm:p-6 shadow-sm ${
    isPregnant
      ? 'bg-purple-mist/35 border-purple-line'
      : 'bg-peach-soft/30 border-peach/20'
  }`}
>
  {/* Header */}
  <div className="flex items-start justify-between gap-4">
    <div>
      <div className="flex items-center gap-2">
        <span
          className={`h-9 w-9 rounded-full flex items-center justify-center text-lg ${
            isPregnant ? 'bg-purple/10' : 'bg-peach/15'
          }`}
        >
          {isPregnant ? '💜' : '💗'}
        </span>

        <h2 className="font-display text-xl sm:text-2xl text-purple-deep font-semibold">
          This week's checklist
        </h2>
      </div>

      <p className="text-sm text-ink-soft mt-2 ml-11">
        {isPregnant
          ? 'Small steps, healthier you and baby.'
          : 'Small steps make a big difference.'}
      </p>
    </div>

    {/* Completion badge */}
    <span
      className={`shrink-0 rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold ${
        isPregnant
          ? 'bg-purple/10 text-purple-deep'
          : 'bg-peach/15 text-peach'
      }`}
    >
      {doneItems} of {totalItems} done
    </span>
  </div>

  {/* Progress */}
  <div className="mt-5">
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 rounded-full bg-white/80 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isPregnant ? 'bg-purple' : 'bg-peach'
          }`}
          style={{
            width: `${checklistProgress * 100}%`,
          }}
        />
      </div>

      <span className="text-xs font-semibold text-ink-soft min-w-[35px] text-right">
        {Math.round(checklistProgress * 100)}%
      </span>
    </div>
  </div>

  {/* Checklist items */}
  <ul className="mt-5 space-y-2.5">
    {band.focus.map((item) => {
      const checked = isChecked(item.label)

      return (
        <li key={item.label}>
          <button
            type="button"
            onClick={() => toggle(item.label)}
            className={`w-full flex items-center gap-3 rounded-[18px] border px-4 py-3.5 text-left transition-all duration-200 ${
              checked
                ? isPregnant
                  ? 'bg-mint-soft/70 border-mint/25'
                  : 'bg-mint-soft/70 border-mint/25'
                : 'bg-white/75 border-white hover:bg-white hover:-translate-y-0.5 hover:shadow-sm'
            }`}
          >
            {/* Check circle */}
            <span
              className={`shrink-0 h-7 w-7 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                checked
                  ? 'bg-mint border-mint text-white'
                  : 'border-purple-line bg-white/70 text-transparent'
              }`}
              aria-hidden="true"
            >
              ✓
            </span>

            {/* Item icon */}
            <span className="shrink-0 text-lg" aria-hidden="true">
              {item.icon}
            </span>

            {/* Item text */}
            <span
              className={`flex-1 text-sm sm:text-base ${
                checked
                  ? 'text-ink-soft line-through'
                  : 'text-ink font-medium'
              }`}
            >
              {item.label}
            </span>

            {/* Arrow */}
            <span
              className={`shrink-0 text-lg transition-transform ${
                checked
                  ? 'text-ink-soft/40'
                  : 'text-purple-deep/50 group-hover:translate-x-0.5'
              }`}
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </li>
      )
    })}
  </ul>

  {/* Encouragement */}
  <div
    className={`mt-4 rounded-[16px] px-4 py-3 flex items-center gap-2 ${
      isPregnant
        ? 'bg-purple/5 text-purple-deep'
        : 'bg-peach/10 text-peach'
    }`}
  >
    <span className="text-lg" aria-hidden="true">
      💗
    </span>

    <p className="text-sm font-medium">
      {checklistProgress === 1
        ? 'You did it, mama! Every little step counts. 💕'
        : isPregnant
          ? "You're doing great, mama. One step at a time."
          : "You're doing an amazing job. Be gentle with yourself."}
    </p>
  </div>

  <p className="text-[11px] text-ink-soft mt-3">
    Saved on this device only — Phase 3 will move this to your account so
    it's there no matter what device you use.
  </p>
</section>


      {/* ------------------------------------------------ */}
      {/* QUICK SHORTCUTS                                  */}
      {/* ------------------------------------------------ */}

      <div className="grid sm:grid-cols-3 gap-4 mt-4">

        <Link
          to="/journey"
          className="rounded-card bg-purple-mist border border-purple/20 p-4 hover:-translate-y-0.5 transition-transform"
        >
          <p className="font-display text-ink font-semibold">
            🌸 Full Journey
          </p>

          <p className="text-sm text-ink-soft mt-1">
            Read this week's guidance in full.
          </p>
        </Link>


        <Link
          to="/find-care"
          className="rounded-card bg-mint-soft border border-mint/20 p-4 hover:-translate-y-0.5 transition-transform"
        >
          <p className="font-display text-ink font-semibold">
            🏥 Find Care
          </p>

          <p className="text-sm text-ink-soft mt-1">
            Locate a nearby facility.
          </p>
        </Link>


        <Link
          to="/get-help"
          className="rounded-card bg-alert-soft border border-alert/30 p-4 hover:-translate-y-0.5 transition-transform"
        >
          <p className="font-display text-alert-deep font-semibold">
            🚨 Get Help
          </p>

          <p className="text-sm text-alert-deep/80 mt-1">
            Warning signs to know.
          </p>
        </Link>

      </div>

    </div>
  )
}