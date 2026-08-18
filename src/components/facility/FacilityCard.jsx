const SERVICE_LABELS = {
  maternity: '🤰 Maternity',
  newbornCare: '👶 Newborn care',
  surgery: '⚕️ Surgery',
  bloodBank: '🩸 Blood bank',
  immunization: '💉 Immunization',
}

export default function FacilityCard({ facility }) {
  return (
    <div className="rounded-card bg-surface border border-purple-line p-5 shadow-sm shadow-purple/5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-display text-lg text-ink font-semibold">{facility.name}</p>
          <p className="text-sm text-ink-soft mt-0.5">{facility.subCounty}, {facility.county} County</p>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {facility.lindaMama && (
            <span className="rounded-full bg-mint-soft text-mint px-2.5 py-1 text-xs font-semibold">Linda Mama</span>
          )}
          {facility.emergency && (
            <span className="rounded-full bg-alert-soft text-alert-deep px-2.5 py-1 text-xs font-semibold">24hr Emergency</span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-ink-soft">
        <span>🏷️ {facility.level} · {facility.ownership}</span>
        <span>🕐 {facility.operatingHours}</span>
        {facility.contact && <span>📞 {facility.contact}</span>}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {facility.services.map((s) => (
          <span key={s} className="rounded-full bg-purple-mist text-purple-deep px-2.5 py-1 text-xs font-medium">
            {SERVICE_LABELS[s] || s}
          </span>
        ))}
      </div>

      <p className="font-mono text-[11px] text-ink-soft/70 mt-3 uppercase tracking-wide">
        Curated facility info — verify details before relying on them
      </p>
    </div>
  )
}
