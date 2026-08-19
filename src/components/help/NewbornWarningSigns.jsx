import {
  NEWBORN_WARNING_SIGNS,
  NEWBORN_SIGNS_SOURCE,
} from '../../data/getHelpData.js'
import SourceTag from '../shared/SourceTag.jsx'

function WarningIcon({ type }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 30 30',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (type === 'Feeding') {
    return (
      <svg {...common}>
        <path d="M11 7h8v16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7Z" />
        <path d="M13 4h4v3h-4z" />
        <path d="M13 12h4M13 16h4" />
      </svg>
    )
  }

  if (type === 'Movement') {
    return (
      <svg {...common}>
        <circle cx="15" cy="7" r="3" />
        <path d="M15 10v9M9 14l6 3 6-3M11 25l4-6 4 6M15 19l-4 6M15 19l4 6" />
      </svg>
    )
  }

  if (type === 'Breathing') {
    return (
      <svg {...common}>
        <path d="M14 7c-2 1-4 3-5 6-1 3-2 6-1 9 3 0 5-1 7-4V7Z" />
        <path d="M16 7c2 1 4 3 5 6 1 3 2 6 1 9-3 0-5-1-7-4V7Z" />
        <path d="M15 6v15" />
      </svg>
    )
  }

  if (type === 'Temperature') {
    return (
      <svg {...common}>
        <path d="M15 6a3 3 0 0 0-3 3v9a5 5 0 1 0 6 0V9a3 3 0 0 0-3-3Z" />
        <path d="M15 12v8" />
        <path d="M10 24h10" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M3 15s4-7 12-7 12 7 12 7-4 7-12 7S3 15 3 15Z" />
      <circle cx="15" cy="15" r="3" />
    </svg>
  )
}

export default function NewbornWarningSigns() {
  return (
    <div>
      <p className="text-sm text-ink-soft mb-5 max-w-3xl leading-relaxed">
        Newborns can go from fine to unwell quickly, which is why these
        signs are worth acting on right away rather than waiting to see if
        they pass.
      </p>

      {/* Five cards — 3 first row, 2 centered second row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

        {NEWBORN_WARNING_SIGNS.map((sign, index) => (
          <article
            key={sign.id}
            className={`
              rounded-[20px]
              bg-white
              border
              border-alert/15
              p-4
              sm:p-5
              shadow-sm
              hover:shadow-md
              transition-shadow

              lg:col-span-2

              ${
                index === 3
                  ? 'lg:col-start-2'
                  : index === 4
                    ? 'lg:col-start-4'
                    : ''
              }
            `}
          >
            {/* Icon */}
            <div className="h-12 w-12 rounded-full bg-alert-soft flex items-center justify-center text-alert-deep">
              <WarningIcon type={sign.title} />
            </div>

            {/* Title */}
            <h3 className="font-display text-base font-semibold text-ink mt-4">
              {sign.title}
            </h3>

            {/* Urgency */}
            <span className="inline-flex rounded-full px-2.5 py-1 mt-2 text-[10px] font-bold tracking-wide bg-alert-soft text-alert-deep">
              ACT NOW
            </span>

            {/* Description */}
            <p className="text-sm text-ink-soft mt-3 leading-relaxed">
              {sign.body}
            </p>
          </article>
        ))}

      </div>

      <div className="mt-5">
        <SourceTag source={NEWBORN_SIGNS_SOURCE} />
      </div>
    </div>
  )
}