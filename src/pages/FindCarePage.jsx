import FacilitySearch from '../components/facility/FacilitySearch.jsx'
import FindCareIllustration from '../components/shared/FindCareIllustration.jsx'

export default function FindCarePage() {
  return (
    <div>
      <div className="grid sm:grid-cols-[1fr_180px] gap-6 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-purple-deep mb-2">🏥 Find Care</p>
          <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold">Nearby maternal & newborn care</h1>
          <p className="text-ink-soft mt-2 max-w-xl">
            Search for maternal and newborn health facilities across Kenya,
            filter by county or service, and see which accept Linda Mama.
          </p>
        </div>
        <FindCareIllustration className="hidden sm:block w-full h-auto" />
      </div>
      <div className="mt-6">
        <FacilitySearch />
      </div>
    </div>
  )
}
