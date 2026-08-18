import { PREGNANCY_BANDS } from '../../data/journeyContent.js'

export default function WeekTicker({ currentWeek, stage }) {
  const isBabyJourney = stage === 'postpartum'

  const pregnancyMilestones = [
    'Getting started',
    'Early growth',
    'First trimester',
    'Second trimester',
    'Baby movement',
    'Baby growing',
    'Preparing',
    'Birth preparation',
    'Almost there',
    'Meet your baby',
  ]

  const babyMilestones = [
    'First days',
    'Settling in',
    'Growing & bonding',
    'Getting stronger',
    'More interaction',
    'Exploring the world',
  ]

  const babyStages = [
    { range: 'Days 0–7', label: 'First days' },
    { range: 'Days 8–14', label: 'Settling in' },
    { range: 'Weeks 3–4', label: 'Growing & bonding' },
    { range: 'Month 2', label: 'Getting stronger' },
    { range: 'Month 3', label: 'More interaction' },
    { range: 'Months 4–6', label: 'Exploring the world' },
  ]

  const stages = isBabyJourney
    ? babyStages
    : PREGNANCY_BANDS.map((band, index) => ({
        range: `Weeks ${band.range[0]}–${band.range[1]}`,
        label: pregnancyMilestones[index],
        id: band.id,
        rangeValues: band.range,
      }))

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
              : "See what's happening at each stage of pregnancy."}
          </p>
        </div>

        <span className="hidden sm:block text-pink text-2xl">✦</span>
      </div>

      <div className="relative overflow-x-auto pb-4 -mx-1 px-1 snap-x">
        <div className="relative flex min-w-max gap-4 pt-4">

          {/* Timeline */}
          <div className="absolute left-0 right-0 top-7 h-0.5 bg-purple-line" />

          {stages.map((item, index) => {
            const isCurrent = isBabyJourney
              ? false
              : currentWeek != null &&
                currentWeek >= item.rangeValues[0] &&
                currentWeek <= item.rangeValues[1]

            return (
              <div
                key={item.id || index}
                className="relative z-10 w-36 sm:w-40 shrink-0 snap-start"
              >
                {/* Timeline marker */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`h-6 w-6 rounded-full border-4 border-white transition-all ${
                      isCurrent
                        ? 'bg-purple shadow-lg shadow-purple/40 scale-125'
                        : isBabyJourney
                          ? 'bg-mint'
                          : 'bg-pink'
                    }`}
                  />
                </div>

                {/* Stage card */}
                <div
                  className={`rounded-card border p-4 min-h-28 transition-all duration-200 hover:-translate-y-1 ${
                    isCurrent
                      ? 'bg-purple text-white border-purple shadow-lg shadow-purple/25'
                      : isBabyJourney
                        ? 'bg-white border-mint/30 shadow-sm hover:shadow-md'
                        : 'bg-white border-purple-line shadow-sm hover:shadow-md'
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wide ${
                      isCurrent
                        ? 'text-white/80'
                        : isBabyJourney
                          ? 'text-mint'
                          : 'text-purple'
                    }`}
                  >
                    {item.range}
                  </p>

                  <p
                    className={`font-display text-base font-semibold mt-2 leading-tight ${
                      isCurrent ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}