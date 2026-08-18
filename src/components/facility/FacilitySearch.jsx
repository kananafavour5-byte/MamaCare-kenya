import { useFacilityFilter } from '../../hooks/useFacilityFilter.js'
import FacilityCard from './FacilityCard.jsx'
import EmptyState from '../shared/EmptyState.jsx'

const SERVICE_LABELS = {
  maternity: '🤰 Maternity',
  newbornCare: '👶 Newborn care',
  surgery: '⚕️ Surgery',
  bloodBank: '🩸 Blood bank',
  immunization: '💉 Immunization',
}

export default function FacilitySearch() {
  const {
    query, setQuery,
    county, setCounty,
    service, setService,
    lindaMamaOnly, setLindaMamaOnly,
    counties, serviceTypes,
    results,
  } = useFacilityFilter()

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by facility, town, or sub-county"
          className="flex-1 rounded-full border border-purple-line px-5 py-3 bg-surface focus-visible:outline-purple"
        />
        <select
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          className="rounded-full border border-purple-line px-5 py-3 bg-surface focus-visible:outline-purple"
        >
          <option value="">All counties</option>
          {counties.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {serviceTypes.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setService(service === s ? '' : s)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium border transition-colors ${
              service === s
                ? 'bg-purple text-white border-purple'
                : 'bg-surface text-ink-soft border-purple-line hover:border-purple/40'
            }`}
          >
            {SERVICE_LABELS[s] || s}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setLindaMamaOnly((v) => !v)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium border transition-colors ${
            lindaMamaOnly
              ? 'bg-mint text-white border-mint'
              : 'bg-surface text-ink-soft border-purple-line hover:border-mint/40'
          }`}
        >
          ✅ Linda Mama only
        </button>
      </div>

      <p className="text-xs text-ink-soft mt-4">
        Showing a curated list of well-known Kenyan facilities — not a live
        search. Always confirm details directly with the facility before
        traveling, especially in an emergency.
      </p>

      <div className="mt-4 space-y-4">
        {results.length === 0 ? (
          <EmptyState
            icon="🏥"
            title="No facilities match"
            body="Try clearing a filter or searching a broader area, like a county name."
          />
        ) : (
          results.map((f) => <FacilityCard key={f.id} facility={f} />)
        )}
      </div>
    </div>
  )
}
