import { Link } from 'react-router-dom'
import { useTracker } from '../../hooks/useTracker.js'
import feedImage from '../../assets/feed-tracker.jpg'
import sleepImage from '../../assets/sleep-tracker.jpg'
import diaperImage from '../../assets/diaper-tracker.jpg'

export default function TodayTracker() {
  const { today } = useTracker()

  const feedCount = today.feeds.length

  const sleepMinutes = today.sleeps.reduce(
    (total, sleep) => total + sleep.minutes,
    0
  )

  const diaperCount = today.diapers.wet + today.diapers.soiled

  const formatSleep = (minutes) => {
    if (!minutes) return '0m'

    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60

    if (!hours) return `${mins}m`
    if (!mins) return `${hours}h`

    return `${hours}h ${mins}m`
  }

  const items = [
    {
      image: feedImage,
      label: 'Feeds',
      value: feedCount,
    },
    {
      image: sleepImage,
      label: 'Sleep',
      value: formatSleep(sleepMinutes),
    },
    {
      image: diaperImage,
      label: 'Diapers',
      value: diaperCount,
    },
  ]

  return (
    <section className="mt-4 rounded-[20px] bg-mint-soft/45 border border-mint/15 p-4 sm:p-5">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold text-purple-deep">
            Today's tracker
          </h2>

          <p className="text-sm text-ink-soft mt-1">
            Keep track of the little things throughout your day.
          </p>
        </div>

        <span className="text-xl">🌿</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="relative overflow-hidden rounded-[18px] min-h-[150px] border border-white/70 shadow-sm"
          >
            {/* Soft background image */}
            <img
              src={item.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
            />

            {/* Blue-green / mint tint */}
            <div className="absolute inset-0 bg-peach-soft/55" />

            {/* Soft readability layer */}
            <div className="absolute inset-0 bg-white/15" />

            {/* Content */}
            <div className="relative z-10 h-full min-h-[150px] p-4 flex flex-col items-center justify-center text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-purple-deep/80">
                {item.label}
              </p>

              <p className="font-display text-2xl font-semibold text-purple-deep mt-1">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link
  to="/track"
  className="block w-full text-center rounded-full border border-purple-line bg-white/70 px-5 py-2.5 text-sm font-semibold text-purple-deep hover:bg-white transition-colors"
>
  Open full tracker →
</Link>
      </div>

    </section>
  )
}