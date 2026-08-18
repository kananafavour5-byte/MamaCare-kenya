import { useTracker } from '../../hooks/useTracker.js'
import babyImage from '../../assets/kick-counter-baby.jpg'

export default function KickCounter() {
  const { today, incrementKick, resetKicks } = useTracker()

  return (
    <section className="mt-4 rounded-[20px] bg-pink-soft/40 border border-pink/15 p-4 sm:p-5">

      {/* Section heading */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-pink">💗</span>
        <h2 className="font-display text-lg font-semibold text-purple-deep">
          Your pregnancy tools
        </h2>
      </div>

      {/* Main tool card */}
      <div className="rounded-[16px] bg-white/80 border border-white/80 shadow-sm p-4 sm:p-5">

        <div className="grid sm:grid-cols-[150px_1fr_1fr] gap-5 items-center">

          {/* Baby illustration */}
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full overflow-hidden bg-pink-soft shadow-sm">
  <img
    src={babyImage}
    alt="Baby"
    className="w-full h-full object-cover"
  />
</div>
          </div>

          {/* Movement counter */}
          <div className="text-center sm:text-left">
            <p className="font-display text-sm font-semibold text-purple-deep">
              Movement today
            </p>

            <p className="font-display text-4xl font-semibold text-pink mt-1">
              {today.kicks}
            </p>

            <p className="text-sm text-ink-soft">
              kicks
            </p>

            <button
              type="button"
              onClick={incrementKick}
              className="mt-3 rounded-full bg-pink text-white font-semibold px-8 py-2 hover:bg-pink/90 transition-colors shadow-sm"
            >
              Log a kick 👣
            </button>
          </div>

          {/* Encouragement */}
          <div className="border-l border-purple-line/60 pl-5 hidden sm:block">
            <p className="font-display font-semibold text-purple-deep">
              Great job, mama!
            </p>

            <p className="text-sm text-ink-soft mt-1 leading-relaxed">
              Tracking your baby's movements can help you stay connected
              to your pregnancy.
            </p>
          </div>

        </div>

        {/* Mobile encouragement */}
        <div className="sm:hidden mt-4 pt-4 border-t border-purple-line/50">
          <p className="font-display font-semibold text-purple-deep">
            Great job, mama!
          </p>

          <p className="text-sm text-ink-soft mt-1 leading-relaxed">
            Tracking your baby's movements can help you stay connected
            to your pregnancy.
          </p>
        </div>

        {/* Reset */}
        <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={resetKicks}
            className="text-xs text-purple-deep font-semibold hover:text-purple underline underline-offset-2"
          >
            ↻ Reset today
          </button>
        </div>

      </div>

      {/* Gentle safety note */}
      <p className="text-xs text-ink-soft mt-3 px-1">
        Movement patterns vary between pregnancies. If today's movement
        feels notably different from usual, contact a health professional.
      </p>

    </section>
  )
}
