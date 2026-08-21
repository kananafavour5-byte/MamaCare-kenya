import { Link } from 'react-router-dom'
import { JOURNEY_TOPICS } from '../../data/journeyContent.js'

export default function WeekTicker({ currentWeek, stage }) {
  const isBabyJourney = stage === 'postpartum'

  const babyStages = [
    { range: 'Days 0–7', label: 'First days' },
    { range: 'Days 8–14', label: 'Settling in' },
    { range: 'Weeks 3–4', label: 'Growing & bonding' },
    { range: 'Month 2', label: 'Getting stronger' },
    { range: 'Month 3', label: 'More interaction' },
    { range: 'Months 4–6', label: 'Exploring the world' },
  ]

  const pregnancyStages = JOURNEY_TOPICS.map((topic) => ({
    ...topic,
    range:
      topic.id === 'first-trimester'
        ? 'Weeks 0–13+6'
        : topic.id === 'second-trimester'
          ? 'Weeks 14–27+6'
          : topic.id === 'third-trimester'
            ? 'Weeks 28+'
            : topic.id === 'antenatal-care'
              ? 'Care'
              : topic.id === 'tests-scans'
                ? 'Screening'
                : topic.id === 'healthy-pregnancy'
                  ? 'Wellbeing'
                  : topic.id === 'preparing-for-birth'
                    ? 'Before birth'
                    : 'During labor',
  }))

  const stages = isBabyJourney ? babyStages : pregnancyStages

  const isCurrentTrimester = (id) => {
    if (currentWeek == null) return false

    if (id === 'first-trimester') {
      return currentWeek <= 13
    }

    if (id === 'second-trimester') {
      return currentWeek >= 14 && currentWeek <= 27
    }

    if (id === 'third-trimester') {
      return currentWeek >= 28
    }

    return false
  }

  return (
    <div>
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold">
            {isBabyJourney ? "Your Baby's Journey" : 'Your Pregnancy Journey'}
          </p>

          <p className="text-sm text-ink-soft mt-1">
            {isBabyJourney
              ? "Guidance through your baby's first six months."
              : "Explore each stage and topic of your pregnancy journey."}
          </p>
        </div>

        <span className="hidden sm:block text-pink text-2xl">✦</span>
      </div>

      <div className="relative overflow-x-auto pb-4 -mx-1 px-1 snap-x">
        <div className="relative flex min-w-max gap-4 pt-4">

          {/* Journey timeline */}
          <div className="absolute left-0 right-0 top-7 h-0.5 bg-purple-line" />

          {stages.map((item, index) => {
            const isCurrent = isBabyJourney
              ? false
              : isCurrentTrimester(item.id)

            return (
              <div
                key={item.id || index}
                className="relative z-10 w-52 sm:w-56 shrink-0 snap-start"
              >
                {/* Timeline marker */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`
                      h-6
                      w-6
                      rounded-full
                      border-4
                      border-white
                      transition-all
                      ${
                        isCurrent
                          ? 'bg-purple shadow-lg shadow-purple/40 scale-125'
                          : isBabyJourney
                            ? 'bg-mint'
                            : 'bg-pink'
                      }
                    `}
                  />
                </div>

               {/* Journey card */}
{item.id === 'first-trimester' ||
 item.id === 'second-trimester' ||
 item.id === 'third-trimester' ||
 item.id === 'antenatal-care' ||
 item.id === 'tests-scans' ||
 item.id === 'healthy-pregnancy' ||
 item.id === 'preparing-for-birth' ||
 item.id === 'labor-and-birth' ? (

 <Link
  to={
    item.id === 'first-trimester'
      ? '/journey/first-trimester'
      : item.id === 'second-trimester'
        ? '/journey/second-trimester'
        : item.id === 'third-trimester'
          ? '/journey/third-trimester'
          : item.id === 'antenatal-care'
            ? '/journey/antenatal-care'
            : item.id === 'tests-scans'
              ? '/journey/tests-scans'
              : item.id === 'healthy-pregnancy'
                ? '/journey/healthy-pregnancy'
                : item.id === 'preparing-for-birth'
                  ? '/journey/preparing-for-birth'
                : item.id === 'preparing-for-birth'
  ? '/journey/preparing-for-birth'
  : item.id === 'labor-and-birth'
    ? '/journey/labor-birth'
    : '/journey/labor-birth'
  }
  
    className={`
      block
      rounded-card
      border
      p-4
      min-h-28
      transition-all
      duration-200
      hover:-translate-y-1
      ${
        isCurrent
          ? 'bg-purple text-white border-purple shadow-lg shadow-purple/25'
          : 'bg-white border-purple-line shadow-sm hover:shadow-md'
      }
    `}
  >
    <p
      className={`
        text-xs
        font-bold
        uppercase
        tracking-wide
        ${
          isCurrent
            ? 'text-white/80'
            : 'text-purple'
        }
      `}
    >
      {item.range}
    </p>

    <p
      className={`
        font-display
        text-base
        font-semibold
        mt-2
        leading-tight
        ${
          isCurrent
            ? 'text-white'
            : 'text-ink'
        }
      `}
    >
      {item.title}
    </p>

    {item.subtitle && (
      <p
        className={`
          text-xs
          mt-2
          leading-relaxed
          ${
            isCurrent
              ? 'text-white/75'
              : 'text-ink-soft'
          }
        `}
      >
        {item.subtitle}
      </p>
    )}

    <p
      className={`
        text-xs
        font-semibold
        mt-3
        ${
          isCurrent
            ? 'text-white'
            : 'text-purple'
        }
      `}
    >
      Explore {item.title.toLowerCase()} →
    </p>
  </Link>
) : (
  <div
    className={`
      rounded-card
      border
      p-4
      min-h-28
      transition-all
      duration-200
      hover:-translate-y-1
      ${
        isCurrent
          ? 'bg-purple text-white border-purple shadow-lg shadow-purple/25'
          : isBabyJourney
            ? 'bg-white border-mint/30 shadow-sm hover:shadow-md'
            : 'bg-white border-purple-line shadow-sm hover:shadow-md'
      }
    `}
  >
    <p
      className={`
        text-xs
        font-bold
        uppercase
        tracking-wide
        ${
          isCurrent
            ? 'text-white/80'
            : isBabyJourney
              ? 'text-mint'
              : 'text-purple'
        }
      `}
    >
      {item.range}
    </p>

    <p
      className={`
        font-display
        text-base
        font-semibold
        mt-2
        leading-tight
        ${
          isCurrent
            ? 'text-white'
            : 'text-ink'
        }
      `}
    >
      {item.title || item.label}
    </p>

    {item.subtitle && (
      <p
        className={`
          text-xs
          mt-2
          leading-relaxed
          ${
            isCurrent
              ? 'text-white/75'
              : 'text-ink-soft'
          }
        `}
      >
        {item.subtitle}
      </p>
    )}
  </div>
)}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}