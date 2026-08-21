import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import JourneyPathSignature from '../components/shared/JourneyPathSignature.jsx'
import StageScrubber from '../components/shared/StageScrubber.jsx'
import EmptyState from '../components/shared/EmptyState.jsx'
import SourceTag from '../components/shared/SourceTag.jsx'
import { pregnancyWeekFromDueDate, babyAgeInDays, formatBabyAge } from '../lib/stageCalculator.js'
import {
  PREGNANCY_BANDS,
  NEWBORN_BANDS,
  JOURNEY_TOPICS,
  findPregnancyBand,
  findNewbornBand,
} from '../data/journeyContent.js'

/**
 * JourneyPage — shows the content for one pregnancy/newborn band in full.
 *
 * Two different "which band" concepts are at play here, on purpose:
 *   - `actualBand`  — computed from the mother's real due/birth date.
 *   - `band`        — whichever band is currently on screen, which is
 *                      `actualBand` UNLESS she's browsing a different one
 *                      via the StageScrubber (an original take on the
 *                      "browse any week" pattern seen on sites like The
 *                      Bump — you can preview any stage's content, not
 *                      just your current one).
 * `isPreviewing` just checks whether those two differ, so we can show a
 * "you're looking at a different week than today" banner with a way back.
 */
export default function JourneyPage({ profile }) {
  const navigate = useNavigate()
  const hasProfile = Boolean(profile.stage && (profile.dueDate || profile.birthDate))
  const isPregnant = profile.stage === 'pregnant'

  const week = isPregnant && profile.dueDate ? pregnancyWeekFromDueDate(profile.dueDate) : null
  const ageDays = !isPregnant && profile.birthDate ? babyAgeInDays(profile.birthDate) : null
  const actualBand = hasProfile ? (isPregnant ? findPregnancyBand(week) : findNewbornBand(ageDays)) : null

  const bands = isPregnant ? PREGNANCY_BANDS : NEWBORN_BANDS
const navigationItems = isPregnant ? JOURNEY_TOPICS : NEWBORN_BANDS
  const [previewId, setPreviewId] = useState(null)

  const band = useMemo(() => {
    if (!hasProfile) return null
    if (previewId) return bands.find((b) => b.id === previewId) || actualBand
    return actualBand
  }, [hasProfile, previewId, bands, actualBand])

  if (!hasProfile) {
    return (
      <EmptyState
        icon="🌸"
        title="Tell us where you are first"
        body="Head back to Home and share your due date or your baby's birth date to see your personalized journey."
      />
    )
  }

  const isPreviewing = previewId && previewId !== actualBand.id
  const progress = isPregnant
    ? Math.min(band.range[1] / 40, 1)
    : Math.min(band.range[1] / 182, 1)

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-purple-deep mb-2">
        {isPregnant ? `Pregnancy \u00b7 Week ${week}` : `Baby \u00b7 ${formatBabyAge(ageDays)}`}
      </p>

      {isPregnant ? (
  <StageScrubber
    bands={JOURNEY_TOPICS}
    activeId={null}
    selectedId={null}
    onSelect={(id) => {
  const topic = JOURNEY_TOPICS.find((item) => item.id === id)

  if (topic?.title === 'First Trimester') {
    navigate('/journey/first-trimester')
  }

  if (topic?.title === 'Second Trimester') {
    navigate('/journey/second-trimester')
  }

  if (topic?.title === 'Third Trimester') {
  navigate('/journey/third-trimester')
}

if (topic?.title === 'Antenatal Care') {
  navigate('/journey/antenatal-care')
}

if (topic?.title === 'Tests & Scans') {
  navigate('/journey/tests-scans')
}

if (topic?.title === 'Healthy Pregnancy') {
  navigate('/journey/healthy-pregnancy')
}

if (topic?.title === 'Preparing for Birth') {
  navigate('/journey/preparing-for-birth')
}

if (topic?.title === 'Labor & Birth') {
  navigate('/journey/labor-birth')
}

}}
    formatLabel={(topic) => topic.title}
  />
) : (
  <StageScrubber
    bands={NEWBORN_BANDS}
    activeId={actualBand.id}
    selectedId={band.id}
    onSelect={(id) =>
      setPreviewId(id === actualBand.id ? null : id)
    }
    formatLabel={(b) =>
      b.monthLabel || `Day ${b.range[0]}–${b.range[1]}`
    }
  />
)}

      <div className="flex items-center gap-3 flex-wrap mt-4">
        <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold">{band.title}</h1>
        {isPregnant && band.milestone && (
  <span className="inline-flex items-center rounded-full bg-pink-soft text-pink px-3 py-1.5 text-sm font-semibold">
    {band.milestone}
  </span>
)}
      </div>

      {isPreviewing && (
        <div className="flex items-center justify-between gap-3 mt-3 rounded-card bg-peach-soft border border-peach/30 px-4 py-2.5 flex-wrap">
          <p className="text-sm text-ink">👀 Previewing a different stage than where you are now.</p>
          <button
            onClick={() => setPreviewId(null)}
            className="text-sm font-semibold text-purple-deep underline underline-offset-2"
          >
            Back to today
          </button>
        </div>
      )}

      <div className="mt-6 rounded-card bg-purple-mist/50 p-4 sm:p-6">
        <JourneyPathSignature progress={progress} label={isPregnant ? `${band.range[0]}\u2013${band.range[1]} of 40 weeks` : (band.monthLabel || band.title)} />
      </div>

      <section className="mt-6 rounded-card bg-surface border border-purple-line p-5 sm:p-6">
        <h2 className="font-display text-lg text-ink">What's happening</h2>
        <p className="text-sm text-ink-soft mt-2 leading-relaxed">{band.whatsHappening}</p>
      </section>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <section className="rounded-card bg-mint-soft border border-mint/20 p-5 sm:p-6">
          <h2 className="font-display text-lg text-ink">📖 What to learn</h2>
          <ul className="mt-2 space-y-2 text-sm text-ink-soft list-disc list-inside">
            {band.learn.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="rounded-card bg-peach-soft border border-peach/25 p-5 sm:p-6">
          <h2 className="font-display text-lg text-ink">🎒 What to prepare</h2>
          <ul className="mt-2 space-y-2 text-sm text-ink-soft list-disc list-inside">
            {band.prepare.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>

      <section className="mt-4 rounded-card bg-purple text-white p-5 sm:p-6">
        <h2 className="font-display text-lg">✨ Your focus this week</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {band.focus.map((f) => (
            <span key={f.label} className="rounded-full bg-white/15 px-3 py-1.5 text-sm border border-white/20">
              {f.icon} {f.label}
            </span>
          ))}
        </div>
      </section>

      <SourceTag source="WHO antenatal / postnatal care guidance" />

      <div className="rounded-card bg-alert-soft border border-alert/30 p-5 mt-6 flex items-center justify-between flex-wrap gap-3">
        <p className="text-sm text-alert-deep font-medium">Need help finding care?</p>
        <Link
          to="/find-care"
          className="rounded-full bg-alert text-white text-sm font-semibold px-4 py-2 hover:bg-alert-deep transition-colors"
        >
          Find a facility →
        </Link>
      </div>
    </div>
  )
}
