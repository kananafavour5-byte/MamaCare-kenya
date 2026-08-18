import { MOTHER_WARNING_SIGNS, MOTHER_SIGNS_SOURCE } from '../../data/getHelpData.js'
import SourceTag from '../shared/SourceTag.jsx'

const URGENCY_LABEL = {
  now: { text: 'Seek care now', className: 'bg-alert text-white' },
  today: { text: 'Seek care today', className: 'bg-peach text-white' },
}

export default function MotherWarningSigns() {
  return (
    <div>
      <p className="text-sm text-ink-soft mb-4">
        Most recovery after birth goes smoothly. But some symptoms need
        prompt professional attention — not because something is
        definitely wrong, but because these are worth having checked right
        away.
      </p>
      <div className="space-y-3">
        {MOTHER_WARNING_SIGNS.map((sign) => {
          const urgency = URGENCY_LABEL[sign.urgency]
          return (
            <div key={sign.id} className="rounded-card bg-surface border border-alert/15 p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-ink">{sign.title}</p>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${urgency.className}`}>
                  {urgency.text}
                </span>
              </div>
              <p className="text-sm text-ink-soft mt-1">{sign.body}</p>
              {sign.emphasis && (
                <p className="text-sm font-medium text-alert-deep bg-alert-soft rounded-card px-3 py-2 mt-3">
                  {sign.emphasis}
                </p>
              )}
            </div>
          )
        })}
      </div>
      <SourceTag source={MOTHER_SIGNS_SOURCE} />
    </div>
  )
}
