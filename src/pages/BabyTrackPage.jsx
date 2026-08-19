import { useState } from 'react'
import { useTracker } from '../hooks/useTracker.js'
import SourceTag from '../components/shared/SourceTag.jsx'

const MOODS = [
  { id: 'good', label: 'Good' },
  { id: 'tired', label: 'Tired' },
  { id: 'overwhelmed', label: 'Overwhelmed' },
]

export default function BabyTrackPage() {
  const {
  today,
  addFeed,
  removeFeed,
  addSleep,
  removeSleep,
  incrementDiaper,
  decrementDiaper,
  setMood,
  clearMood,
} = useTracker()

  const [feedMinutes, setFeedMinutes] = useState('')
  const [sleepLabel, setSleepLabel] = useState('Nap')
  const [sleepMinutes, setSleepMinutes] = useState('')
  const [feedError, setFeedError] = useState('')
  const [sleepError, setSleepError] = useState('')

  const handleAddFeed = (e) => {
    e.preventDefault()
    const minutes = Number(feedMinutes)

    if (!feedMinutes || minutes <= 0) {
      setFeedError('Enter a number of minutes first.')
      return
    }

    setFeedError('')
    addFeed(minutes)
    setFeedMinutes('')
  }

  const handleAddSleep = (e) => {
    e.preventDefault()
    const minutes = Number(sleepMinutes)

    if (!sleepMinutes || minutes <= 0) {
      setSleepError('Enter a number of minutes first.')
      return
    }

    setSleepError('')
    addSleep(sleepLabel, minutes)
    setSleepMinutes('')
  }

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-purple-deep mb-2">
        📋 Track
      </p>

      <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold">
        Track today
      </h1>

      <p className="text-ink-soft mt-2 max-w-xl">
        Log feeds, sleep, diapers, and how you're doing. Saved on this
        device only — head to the Dashboard for your weekly checklist and
        overall progress.
      </p>

      {/* Feeding log */}
      <section className="mt-6 rounded-card bg-surface border border-purple-line p-5 sm:p-6">
        <h2 className="font-display text-lg text-ink font-semibold">
          🍼 Feeding log
        </h2>

        {today.feeds.length === 0 ? (
          <p className="text-sm text-ink-soft mt-2">
            No feeds logged yet today.
          </p>
        ) : (
          <ul className="mt-3 space-y-1.5">
            {today.feeds.map((f, i) => (
              <li
  key={i}
  className="flex items-center justify-between gap-3 text-sm text-ink-soft border-b border-purple-line/60 pb-1.5 last:border-b-0"
>
  <div className="flex items-center gap-3">
    <span>
      {new Date(f.time).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </span>

    <span>{f.durationMin} min</span>
  </div>

  <button
    type="button"
    onClick={() => removeFeed(i)}
    className="text-xs text-ink-soft hover:text-alert-deep underline underline-offset-2"
  >
    Remove
  </button>
</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleAddFeed} className="mt-4">
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={feedMinutes}
              onChange={(e) => setFeedMinutes(e.target.value)}
              placeholder="Minutes"
              className="flex-1 rounded-full border border-purple-line px-4 py-2 bg-canvas focus-visible:outline-purple"
            />

            <button
              type="submit"
              className="rounded-full bg-purple text-white font-semibold px-5 py-2 hover:bg-purple-deep transition-colors"
            >
              Log feed
            </button>
          </div>

          {feedError && (
            <p className="text-xs text-alert-deep mt-2">
              {feedError}
            </p>
          )}
        </form>
      </section>

      {/* Sleep + diapers */}
      <div className="grid sm:grid-cols-2 gap-4 mt-4">

        {/* Sleep */}
        <section className="rounded-card bg-mint-soft border border-mint/20 p-5 sm:p-6">
          <h2 className="font-display text-lg text-ink font-semibold">
            😴 Sleep log
          </h2>

          {today.sleeps.length === 0 ? (
            <p className="text-sm text-ink-soft mt-2">
              No sleep logged yet today.
            </p>
          ) : (
            <ul className="mt-3 space-y-1.5">
              {today.sleeps.map((s, i) => (
  <li
    key={i}
    className="flex items-center justify-between gap-3 text-sm text-ink-soft"
  >
    <div className="flex items-center gap-3">
      <span>{s.label}</span>
      <span>{s.minutes} min</span>
    </div>

    <button
      type="button"
      onClick={() => removeSleep(i)}
      className="text-xs text-ink-soft hover:text-alert-deep underline underline-offset-2"
    >
      Remove
    </button>
  </li>
))}
            </ul>
          )}

          <form onSubmit={handleAddSleep} className="mt-4">
            <div className="flex flex-col gap-2">

              <select
                value={sleepLabel}
                onChange={(e) => setSleepLabel(e.target.value)}
                className="rounded-full border border-purple-line px-4 py-2 bg-canvas focus-visible:outline-purple"
              >
                <option>Nap</option>
                <option>Night stretch</option>
              </select>

              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  value={sleepMinutes}
                  onChange={(e) => setSleepMinutes(e.target.value)}
                  placeholder="Minutes"
                  className="flex-1 rounded-full border border-purple-line px-4 py-2 bg-canvas focus-visible:outline-purple"
                />

                <button
                  type="submit"
                  className="rounded-full bg-mint text-white font-semibold px-4 py-2 hover:opacity-90 transition-opacity"
                >
                  Log
                </button>
              </div>
            </div>

            {sleepError && (
              <p className="text-xs text-alert-deep mt-2">
                {sleepError}
              </p>
            )}
          </form>
        </section>

        {/* Diapers */}
        <section className="rounded-card bg-peach-soft border border-peach/25 p-5 sm:p-6">
          <h2 className="font-display text-lg text-ink font-semibold">
            🧷 Diapers today
          </h2>

          <p className="font-display text-3xl font-semibold text-ink mt-2">
            {today.diapers.wet + today.diapers.soiled}
          </p>

          <p className="text-xs text-ink-soft mt-1">
            {today.diapers.wet} wet · {today.diapers.soiled} soiled
          </p>

          <div className="grid grid-cols-2 gap-3 mt-4">
  <div className="flex items-center gap-2">
    <button
      type="button"
      onClick={() => decrementDiaper('wet')}
      className="h-9 w-9 rounded-full border border-peach/40 text-ink font-semibold hover:bg-peach/20 transition-colors"
      aria-label="Remove one wet diaper"
    >
      −
    </button>

    <button
      type="button"
      onClick={() => incrementDiaper('wet')}
      className="flex-1 rounded-full border border-peach/40 text-ink font-semibold py-2 hover:bg-peach/20 transition-colors"
    >
      + Wet
    </button>
  </div>

  <div className="flex items-center gap-2">
    <button
      type="button"
      onClick={() => decrementDiaper('soiled')}
      className="h-9 w-9 rounded-full border border-peach/40 text-ink font-semibold hover:bg-peach/20 transition-colors"
      aria-label="Remove one soiled diaper"
    >
      −
    </button>

    <button
      type="button"
      onClick={() => incrementDiaper('soiled')}
      className="flex-1 rounded-full border border-peach/40 text-ink font-semibold py-2 hover:bg-peach/20 transition-colors"
    >
      + Soiled
    </button>
  </div>
</div>
        </section>

      </div>

      {/* Mood */}
      <section className="mt-4 rounded-card bg-surface border border-purple-line p-5 sm:p-6">
        <h2 className="font-display text-lg text-ink font-semibold">
          How are you feeling today?
        </h2>

        <div className="flex gap-2 mt-3 flex-wrap">
          {MOODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMood(m.id)}
              className={`flex-1 min-w-[100px] rounded-full border py-2 text-sm font-semibold transition-colors ${
                today.mood === m.id
                  ? 'bg-purple text-white border-purple'
                  : 'border-purple-line text-ink-soft hover:border-purple/40'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {today.mood && (
  <button
    type="button"
    onClick={clearMood}
    className="mt-3 text-xs text-ink-soft hover:text-alert-deep underline underline-offset-2"
  >
    Clear today's mood
  </button>
)}

        <p className="text-xs text-ink-soft mt-3">
          Feeling persistently low for more than two weeks is worth
          mentioning to a health worker — see Get Help for more.
        </p>
      </section>

      <SourceTag source="WHO / UNICEF newborn feeding guidance" />
    </div>
  )
}
