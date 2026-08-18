import { NEWBORN_WARNING_SIGNS, NEWBORN_SIGNS_SOURCE } from '../../data/getHelpData.js'
import SourceTag from '../shared/SourceTag.jsx'

export default function NewbornWarningSigns() {
  return (
    <div>
      <p className="text-sm text-ink-soft mb-4">
        Newborns can go from fine to unwell quickly, which is why these
        signs are worth acting on right away rather than waiting to see if
        they pass.
      </p>
      <div className="space-y-3">
        {NEWBORN_WARNING_SIGNS.map((sign) => (
          <div key={sign.id} className="rounded-card bg-surface border border-alert/15 p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-ink">{sign.title}</p>
              <span className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold bg-alert text-white">
                Seek care now
              </span>
            </div>
            <p className="text-sm text-ink-soft mt-1">{sign.body}</p>
          </div>
        ))}
      </div>
      <SourceTag source={NEWBORN_SIGNS_SOURCE} />
    </div>
  )
}
