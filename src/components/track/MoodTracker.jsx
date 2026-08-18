import { useTracker } from '../../hooks/useTracker.js'

const moods = [
  { value: 'good', emoji: '😊', label: 'Good' },
  { value: 'tired', emoji: '😴', label: 'Tired' },
  { value: 'overwhelmed', emoji: '😟', label: 'Overwhelmed' },
]

export default function MoodTracker() {
  const { today, setMood } = useTracker()

  return (
    <section className="mt-4 rounded-[20px] bg-peach-soft/45 border border-peach/15 p-4 sm:p-5">
      <h2 className="font-display text-lg font-semibold text-purple-deep">
        💗 How are you feeling?
      </h2>

      <p className="text-sm text-ink-soft mt-1">
        Take a moment for yourself today, mama.
      </p>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
        {moods.map((mood) => {
          const selected = today.mood === mood.value

          return (
            <button
              key={mood.value}
              type="button"
              onClick={() => setMood(mood.value)}
              className={`rounded-[16px] border px-2 py-3 sm:px-4 sm:py-4 text-center transition-all ${
                selected
                  ? 'bg-white border-purple shadow-sm -translate-y-0.5'
                  : 'bg-white/60 border-white/80 hover:bg-white hover:-translate-y-0.5'
              }`}
            >
              <span className="text-2xl sm:text-3xl block">
                {mood.emoji}
              </span>

              <span className="font-display text-sm font-semibold text-purple-deep block mt-1">
                {mood.label}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
