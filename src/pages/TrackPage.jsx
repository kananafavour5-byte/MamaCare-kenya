import { useState } from 'react'
import { useTracker } from '../hooks/useTracker.js'
import SourceTag from '../components/shared/SourceTag.jsx'

const MOODS = [
  { id: 'good', label: 'Good' },
  { id: 'tired', label: 'Tired' },
  { id: 'overwhelmed', label: 'Overwhelmed' },
]

const COMMON_SYMPTOMS = [
  'Nausea',
  'Headache',
  'Back pain',
  'Swelling',
  'Heartburn',
  'Fatigue',
]

export default function TrackPage() {
  const {
    today,
    addSleep,
    removeSleep,
    setMood,
    clearMood,
    addSymptom,
    removeSymptom,
    setWeight,
  } = useTracker()

  const [sleepLabel, setSleepLabel] = useState('Nap')
  const [sleepMinutes, setSleepMinutes] = useState('')
  const [customSymptom, setCustomSymptom] = useState('')
  const [weightInput, setWeightInput] = useState(today.weight || '')
  const [sleepError, setSleepError] = useState('')
  const [weightError, setWeightError] = useState('')
  const [copied, setCopied] = useState(false)

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

  const handleAddCustomSymptom = (e) => {
    e.preventDefault()

    if (!customSymptom.trim()) return

    addSymptom(customSymptom)
    setCustomSymptom('')
  }

  const handleWeight = (e) => {
    e.preventDefault()
    const value = Number(weightInput)

    if (!weightInput || value <= 0) {
      setWeightError('Enter a valid weight first.')
      return
    }

    setWeightError('')
    setWeight(weightInput)
  }

  const getSummary = () => {
    const symptoms = today.symptoms?.length
      ? today.symptoms.join(', ')
      : 'None recorded'

    const mood = today.mood
      ? MOODS.find((m) => m.id === today.mood)?.label
      : 'Not recorded'

    const sleeps = today.sleeps?.length || 0

    return `MamaCare Kenya — Today's summary

Symptoms: ${symptoms}
Weight: ${today.weight ? `${today.weight} kg` : 'Not recorded'}
Mood: ${mood}
Sleep entries: ${sleeps}`
  }

  const handleCopySummary = async () => {
    const summary = getSummary()

    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <p className="font-mono text-xs uppercase tracking-wide text-purple-deep mb-2">
        📋 Track
      </p>

      <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold">
        Track today
      </h1>

      <p className="text-ink-soft mt-2 max-w-xl">
        Log symptoms, your weight, and how you're doing. Saved on this
        device only — head to the Dashboard for your weekly checklist.
      </p>

      {/* Symptoms */}
      <section className="mt-6 rounded-card bg-surface border border-purple-line p-5 sm:p-6">
        <h2 className="font-display text-lg text-ink font-semibold">
          🩺 Symptoms today
        </h2>

        <p className="text-xs text-ink-soft mt-1">
          A personal log to help you remember what to mention at your next
          checkup — not a way to assess whether something is serious. See
          Get Help if anything feels urgent.
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {COMMON_SYMPTOMS.map((symptom) => {
            const selected = today.symptoms?.includes(symptom)

            return (
              <button
                key={symptom}
                type="button"
                onClick={() =>
                  selected
                    ? removeSymptom(symptom)
                    : addSymptom(symptom)
                }
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selected
                    ? 'bg-purple text-white border-purple'
                    : 'bg-white text-ink-soft border-purple-line hover:border-purple/40'
                }`}
              >
                {selected ? '✓ ' : '+ '}
                {symptom}
              </button>
            )
          })}
        </div>

        <form
          onSubmit={handleAddCustomSymptom}
          className="flex gap-2 mt-3"
        >
          <input
            type="text"
            value={customSymptom}
            onChange={(e) => setCustomSymptom(e.target.value)}
            placeholder="Something else"
            className="flex-1 rounded-full border border-purple-line px-4 py-2 bg-canvas focus-visible:outline-purple"
          />

          <button
            type="submit"
            className="rounded-full bg-purple text-white font-semibold px-4 py-2 hover:bg-purple-deep transition-colors"
          >
            Add
          </button>
        </form>
      </section>

      {/* Weight + Sleep */}
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {/* Weight */}
        <section className="rounded-card bg-surface border border-purple-line p-5 sm:p-6">
          <h2 className="font-display text-lg text-ink font-semibold">
            ⚖️ Your weight
          </h2>

          <p className="text-xs text-ink-soft mt-1">
            Record your weight in kilograms.
          </p>

          <form onSubmit={handleWeight} className="flex gap-2 mt-4">
            <input
              type="number"
              min="1"
              step="0.1"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              placeholder="e.g. 68.5"
              className="flex-1 rounded-full border border-purple-line px-4 py-2 bg-canvas focus-visible:outline-purple"
            />

            <button
              type="submit"
              className="rounded-full bg-purple text-white font-semibold px-5 py-2 hover:bg-purple-deep transition-colors"
            >
              Add
            </button>
          </form>

          {weightError && (
            <p className="text-xs text-alert-deep mt-2">
              {weightError}
            </p>
          )}

          {today.weight && (
            <p className="text-xs text-ink-soft mt-2">
              Today's weight: <strong>{today.weight} kg</strong>
            </p>
          )}
        </section>

        {/* Sleep */}
        <section className="rounded-card bg-mint-soft border border-mint/20 p-5 sm:p-6">
          <h2 className="font-display text-lg text-ink font-semibold">
            😴 Your sleep
          </h2>

          {today.sleeps.length === 0 ? (
            <p className="text-xs text-ink-soft mt-1">
              No sleep logged yet today.
            </p>
          ) : (
            <ul className="mt-3 space-y-1.5">
              {today.sleeps.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-3 text-sm text-ink-soft"
                >
                  <span>
                    {s.label} · {s.minutes} min
                  </span>

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

          <form onSubmit={handleAddSleep} className="mt-3">
            <div className="flex gap-2">
              <select
                value={sleepLabel}
                onChange={(e) => setSleepLabel(e.target.value)}
                className="rounded-full border border-purple-line px-3 py-2 bg-canvas focus-visible:outline-purple"
              >
                <option>Nap</option>
                <option>Night stretch</option>
              </select>

              <input
                type="number"
                min="1"
                value={sleepMinutes}
                onChange={(e) => setSleepMinutes(e.target.value)}
                placeholder="Minutes"
                className="flex-1 min-w-0 rounded-full border border-purple-line px-4 py-2 bg-canvas focus-visible:outline-purple"
              />

              <button
                type="submit"
                className="rounded-full bg-mint text-white font-semibold px-4 py-2 hover:opacity-90 transition-opacity"
              >
                Log
              </button>
            </div>

            {sleepError && (
              <p className="text-xs text-alert-deep mt-2">
                {sleepError}
              </p>
            )}
          </form>
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

      {/* Share summary */}
      <section className="mt-4 rounded-card bg-purple text-white p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-display text-lg font-semibold">
              Share with a health worker
            </h2>

            <p className="text-sm text-white/80 mt-1">
              Copy today's summary to read aloud or paste into a message.
            </p>

            <p className="text-xs text-white/65 mt-1">
              You can still use the tracker without sharing anything.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="rounded-full bg-white text-purple font-semibold px-5 py-2.5 text-sm hover:bg-purple-mist transition-colors shrink-0"
          >
            {copied ? 'Copied ✓' : 'Copy summary'}
          </button>
        </div>
      </section>

      <div className="mt-5">
        <SourceTag source="WHO / UNICEF maternal and newborn care guidance" />
      </div>
    </div>
  )
}