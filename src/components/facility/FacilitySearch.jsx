import { useFacilityFilter } from '../../hooks/useFacilityFilter.js'
import FacilityCard from './FacilityCard.jsx'
import EmptyState from '../shared/EmptyState.jsx'

const SERVICE_LABELS = {
  maternity: 'Maternity',
  newbornCare: 'Newborn care',
  surgery: 'Surgery',
  bloodBank: 'Blood bank',
  immunization: 'Immunization',
}

export default function FacilitySearch() {
  const {
    query,
    setQuery,
    county,
    setCounty,
    service,
    setService,
    lindaMamaOnly,
    setLindaMamaOnly,
    counties,
    serviceTypes,
    results,
  } = useFacilityFilter()

  return (
    <section className="rounded-[24px] border border-mint/25 bg-gradient-to-br from-mint-soft/40 via-white to-blue-50/50 p-5 sm:p-6">

      {/* Section heading */}
      <div className="mb-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mint-deep/80">
          Find a facility
        </p>

        <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold mt-1">
          Search maternal & newborn care
        </h2>

        <p className="text-sm text-ink-soft mt-1 max-w-2xl">
          Find facilities by location or service, and check which facilities
          are listed as accepting Linda Mama.
        </p>
      </div>


      {/* Search controls */}
      <div className="grid sm:grid-cols-[1fr_auto] gap-3">

        <div>
          <label
            htmlFor="facility-search"
            className="block text-xs font-semibold text-mint-deep mb-2"
          >
            Search by facility or location
          </label>

          <input
            id="facility-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Facility, town, or sub-county"
            className="w-full rounded-full border border-mint/30 px-5 py-3 bg-white text-ink focus-visible:outline-mint"
          />
        </div>


        <div>
          <label
            htmlFor="county-filter"
            className="block text-xs font-semibold text-mint-deep mb-2"
          >
            County
          </label>

          <select
            id="county-filter"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="w-full sm:min-w-[190px] rounded-full border border-mint/30 px-5 py-3 bg-white text-ink focus-visible:outline-mint"
          >
            <option value="">All counties</option>

            {counties.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

      </div>


      {/* Service filters */}
      <div className="mt-5">

        <p className="text-xs font-semibold text-mint-deep mb-2">
          Filter by service
        </p>

        <div className="flex flex-wrap gap-2">

          {serviceTypes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(service === s ? '' : s)}
              className={`rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold border transition-all ${
                service === s
                  ? 'bg-mint text-white border-mint shadow-sm'
                  : 'bg-white text-ink-soft border-mint/25 hover:border-mint/50 hover:bg-mint-soft/40'
              }`}
            >
              {SERVICE_LABELS[s] || s}
            </button>
          ))}


          {/* Linda Mama */}
          <button
            type="button"
            onClick={() => setLindaMamaOnly((v) => !v)}
            className={`rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold border transition-all ${
              lindaMamaOnly
                ? 'bg-mint text-white border-mint shadow-sm'
                : 'bg-white text-ink-soft border-mint/25 hover:border-mint/50 hover:bg-mint-soft/40'
            }`}
          >
            Linda Mama
          </button>

        </div>
      </div>


      {/* Data notice */}
      <div className="mt-5 rounded-[16px] border border-mint/20 bg-white/70 px-4 py-3">
        <p className="text-xs text-ink-soft leading-relaxed">
          <span className="font-semibold text-mint-deep">
            Facility information:
          </span>{' '}
          This is a curated list of well-known Kenyan facilities, not a live
          search. Always confirm services, hours, and availability directly
          with the facility before traveling, especially in an emergency.
        </p>
      </div>


      {/* Results */}
      <div className="mt-5 space-y-4">

        {results.length === 0 ? (
          <EmptyState
            icon="🏥"
            title="No facilities match"
            body="Try clearing a filter or searching a broader area, like a county name."
          />
        ) : (
          results.map((f) => (
            <FacilityCard
              key={f.id}
              facility={f}
            />
          ))
        )}

      </div>

    </section>
  )
}