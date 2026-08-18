import { useState } from 'react'
import pregnancyImage from '../../assets/pregnancy.jpg'
import babyImage from '../../assets/baby.jpg'

export default function JourneyEntryChoice({ profile, onSetProfile }) {
  const [pendingStage, setPendingStage] = useState(profile.stage)
  const [dateValue, setDateValue] = useState(profile.dueDate || profile.birthDate || '')

  const handleSave = (e) => {
    e.preventDefault()
    if (!pendingStage || !dateValue) return
    onSetProfile(
      pendingStage === 'pregnant'
        ? { stage: 'pregnant', dueDate: dateValue, birthDate: null }
        : { stage: 'postpartum', dueDate: null, birthDate: dateValue }
    )
  }

  return (
    <div className="rounded-card bg-white border border-purple-line/60 p-6 sm:p-8 shadow-lg shadow-purple/5">
      <p className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold mb-6">Where are you in your journey? ✨</p>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <button
  type="button"
  onClick={() => setPendingStage('pregnant')}
  className={`relative overflow-hidden rounded-card min-h-64 px-6 py-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
    pendingStage === 'pregnant'
      ? 'ring-2 ring-pink shadow-lg'
      : 'shadow-md hover:ring-1 hover:ring-pink/50'
  }`}
  style={{
    backgroundImage: `linear-gradient(to top, rgba(255,111,165,0.82), rgba(255,231,220,0.18)), url(${pregnancyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <p className="relative z-10 font-display text-2xl font-semibold text-white mt-24">
    I'm pregnant
  </p>

  <span className="absolute right-5 bottom-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-pink text-2xl shadow-md">
    →
  </span>
</button>
        <button
  type="button"
  onClick={() => setPendingStage('postpartum')}
  className={`relative overflow-hidden rounded-card min-h-64 px-6 py-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
    pendingStage === 'postpartum'
      ? 'ring-2 ring-purple shadow-lg'
      : 'shadow-md hover:ring-1 hover:ring-purple/50'
  }`}
  style={{
    backgroundImage: `linear-gradient(to top, rgba(124,77,220,0.82), rgba(241,233,254,0.18)), url(${babyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <p className="relative z-10 font-display text-2xl font-semibold text-white mt-24">
    My baby is here
  </p>

  <span className="absolute right-5 bottom-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-purple text-2xl shadow-md">
    →
  </span>
</button>
      </div>

      {pendingStage && (
        <form onSubmit={handleSave} className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
          <label className="flex-1 w-full">
            <span className="block text-sm text-ink-soft mb-1 font-medium">
              {pendingStage === 'pregnant' ? 'Your due date' : "Your baby's birth date"}
            </span>
            <input
              type="date"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              required
              className="w-full rounded-full border border-purple-line px-4 py-2.5 bg-canvas focus-visible:outline-purple"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-purple text-white font-semibold px-6 py-2.5 hover:bg-purple-deep transition-colors shadow-sm shadow-purple/30"
          >
            Show my journey 🌸
          </button>
        </form>
      )}
    </div>
  )
}
