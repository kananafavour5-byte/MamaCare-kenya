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

      {!isPregnant && <MoodTracker />}

      {!isPregnant && <TodayTracker />}



      {/* ------------------------------------------------ */}
      {/* WEEKLY CHECKLIST                                 */}
      {/* ------------------------------------------------ */}

      <section className="mt-5 rounded-card bg-surface border border-purple-line p-5 sm:p-6">

        <div className="flex items-center justify-between flex-wrap gap-2">

          <h2 className="font-display text-lg text-ink font-semibold">
            ✅ This week's checklist
          </h2>

          <span className="font-mono text-xs text-ink-soft uppercase tracking-wide">
            {doneItems} of {totalItems} done
          </span>

        </div>


        {/* Checklist progress */}

        <div className="h-2 rounded-full bg-purple-mist mt-3 overflow-hidden">

          <div
            className="h-full bg-purple transition-all duration-300"
            style={{
              width: `${checklistProgress * 100}%`,
            }}
          />

        </div>


        {/* Checklist items */}

        <ul className="mt-4 space-y-2">

          {band.focus.map((item) => {

            const checked = isChecked(item.label)

            return (
              <li key={item.label}>

                <button
                  type="button"
                  onClick={() => toggle(item.label)}
                  className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    rounded-card
                    border
                    px-4
                    py-3
                    text-left
                    transition-colors
                    ${
                      checked
                        ? 'bg-mint-soft border-mint/30 text-ink-soft line-through'
                        : 'bg-canvas border-purple-line hover:border-purple/40 text-ink'
                    }
                  `}
                >

                  <span
                    className={`
                      shrink-0
                      h-5
                      w-5
                      rounded-full
                      border-2
                      flex
                      items-center
                      justify-center
                      text-xs
                      ${
                        checked
                          ? 'bg-mint border-mint text-white'
                          : 'border-purple-line'
                      }
                    `}
                    aria-hidden="true"
                  >
                    {checked ? '✓' : ''}
                  </span>

                  <span>
                    {item.icon} {item.label}
                  </span>

                </button>

              </li>
            )

          })}

        </ul>


        <p className="text-xs text-ink-soft mt-3">
          Saved on this device only — Phase 3 will move this to your account
          so it's there no matter what device you use.
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