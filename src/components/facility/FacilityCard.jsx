const SERVICE_LABELS = {
  maternity: 'Maternity',
  newbornCare: 'Newborn care',
  surgery: 'Surgery',
  bloodBank: 'Blood bank',
  immunization: 'Immunization',
}

export default function FacilityCard({ facility }) {
  return (
    <article className="rounded-[22px] bg-white border border-mint/20 p-5 sm:p-6 shadow-sm shadow-mint/5 transition-shadow hover:shadow-md">

      {/* Facility heading */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <h3 className="font-display text-lg sm:text-xl text-ink font-semibold">
            {facility.name}
          </h3>

          <p className="text-sm text-ink-soft mt-1">
            {facility.subCounty}, {facility.county} County
          </p>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {facility.lindaMama && (
            <span className="rounded-full bg-mint-soft text-mint-deep px-3 py-1 text-xs font-semibold">
              Linda Mama
            </span>
          )}

          {facility.emergency && (
            <span className="rounded-full bg-alert-soft text-alert-deep px-3 py-1 text-xs font-semibold">
              24hr Emergency
            </span>
          )}
        </div>
      </div>


      {/* Facility details */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-ink-soft">

        <span>
          {facility.level} · {facility.ownership}
        </span>

        <span>
          {facility.operatingHours}
        </span>

        {facility.contact && (
          <span>
            {facility.contact}
          </span>
        )}

      </div>


      {/* Services */}
      <div className="flex flex-wrap gap-2 mt-4">
        {facility.services.map((s) => (
          <span
            key={s}
            className="rounded-full bg-mint-soft/70 border border-mint/15 text-mint-deep px-3 py-1.5 text-xs font-medium"
          >
            {SERVICE_LABELS[s] || s}
          </span>
        ))}
      </div>


      {/* Verification note */}
      <div className="mt-4 pt-3 border-t border-mint/10">
        <p className="font-mono text-[10px] text-ink-soft/70 uppercase tracking-[0.08em]">
          Curated facility information · Verify details before relying on them
        </p>
      </div>

    </article>
  )
}