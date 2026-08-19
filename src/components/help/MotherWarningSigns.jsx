import {
  MOTHER_WARNING_SIGNS,
  MOTHER_SIGNS_SOURCE,
} from '../../data/getHelpData.js'
import SourceTag from '../shared/SourceTag.jsx'

const URGENCY_LABEL = {
  now: {
    text: 'ACT NOW',
    className: 'bg-alert-soft text-alert-deep',
  },
  today: {
    text: 'TODAY',
    className: 'bg-peach-soft text-alert-deep',
  },
}

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

  if (type === 'Bleeding') {
    return (
      <svg {...common}>
        <path d="M15 4C15 4 8 12 8 17a7 7 0 0 0 14 0c0-5-7-13-7-13Z" />
        <path d="M12 19c.7 1.2 1.7 1.8 3 1.8" />
      </svg>
    )
  }

  if (type === 'Head & vision') {
    return (
      <svg {...common}>
        <circle cx="14" cy="13" r="7" />
        <path d="M9 12c1.4-2 3.3-3 5.2-3 2 0 3.5.8 4.8 2.3" />
        <circle cx="15" cy="13" r="1" />
        <path d="M21 8l3-2M22 12h4M21 16l3 2" />
      </svg>
    )
  }

  if (type === 'Fever & infection') {
    return (
      <svg {...common}>
        <path d="M15 7a3 3 0 0 0-3 3v8.2a5 5 0 1 0 6 0V10a3 3 0 0 0-3-3Z" />
        <path d="M15 12v7" />
        <path d="M10 23h10" />
      </svg>
    )
  }

  if (type === 'Breathing & chest') {
    return (
      <svg {...common}>
        <path d="M14 7c-2 1-4 3-5 6-1 3-2 6-1 9 3 0 5-1 7-4V7Z" />
        <path d="M16 7c2 1 4 3 5 6 1 3 2 6 1 9-3 0-5-1-7-4V7Z" />
        <path d="M15 6v15" />
      </svg>
    )
  }

  if (type === 'Legs') {
    return (
      <svg {...common}>
        <path d="M11 5c1 4 1 7 2 10l-3 8" />
        <path d="M19 5c-1 4-1 7-2 10l3 8" />
        <path d="M9 23H6M21 23h3" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M15 4c-5 0-9 4-9 9 0 4 2 6 4 8v4h10v-4c2-2 4-4 4-8 0-5-4-9-9-9Z" />
      <path d="M11 14c1-1 2-1 4 0s3 1 4 0" />
      <path d="M11 19h8M12 22h6" />
    </svg>
  )
}

export default function MotherWarningSigns() {
  return (
    <div>
      <p className="text-sm text-ink-soft mb-5 max-w-3xl leading-relaxed">
        Most recovery after birth goes smoothly. But some symptoms need
        prompt professional attention — not because something is definitely
        wrong, but because these are worth having checked right away.
      </p>

      {/* Six cards — 3 per row on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOTHER_WARNING_SIGNS.map((sign) => {
          const urgency = URGENCY_LABEL[sign.urgency]

          return (
            <article
              key={sign.id}
              className="rounded-[20px] bg-white border border-alert/15 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
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
              <span
                className={`inline-flex rounded-full px-2.5 py-1 mt-2 text-[10px] font-bold tracking-wide ${urgency.className}`}
              >
                {urgency.text}
              </span>

              {/* Description */}
              <p className="text-sm text-ink-soft mt-3 leading-relaxed">
                {sign.body}
              </p>

              {/* Mental health emphasis */}
              {sign.emphasis && (
                <p className="text-xs font-medium text-alert-deep bg-alert-soft rounded-[14px] px-3 py-2.5 mt-3 leading-relaxed">
                  {sign.emphasis}
                </p>
              )}
            </article>
          )
        })}
      </div>

      <div className="mt-5">
        <SourceTag source={MOTHER_SIGNS_SOURCE} />
      </div>
    </div>
  )
}