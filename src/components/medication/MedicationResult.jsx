function Field({ label, value }) {
  if (!value) return null
  return (
    <div className="py-3 border-b border-purple-line last:border-b-0">
      <p className="font-mono text-[11px] uppercase tracking-wide text-purple-deep">{label}</p>
      <p className="text-sm text-ink mt-1 leading-relaxed line-clamp-6">{value}</p>
    </div>
  )
}

export default function MedicationResult({ result }) {
  const name = result.brandName || result.genericName || 'Unnamed label'
  return (
    <div className="rounded-card bg-surface border border-purple-line p-5 sm:p-6 shadow-sm shadow-purple/5">
      <p className="font-display text-xl text-ink">{name}</p>
      {result.genericName && result.brandName && (
        <p className="text-sm text-ink-soft">Generic name: {result.genericName}</p>
      )}

      <div className="mt-3">
        <Field label="Active ingredient" value={result.activeIngredient} />
        <Field label="Indications & usage" value={result.indications} />
        <Field label="Dosage as labeled" value={result.dosage} />
        <Field label="Warnings" value={result.warnings} />
        <Field label="Pregnancy information" value={result.pregnancy} />
        <Field label="Pregnancy / breastfeeding information" value={result.pregnancyOrBreastfeeding} />
      </div>

      {!result.pregnancy && !result.pregnancyOrBreastfeeding && (
        <p className="text-xs text-ink-soft mt-3 italic">
          This label doesn't include specific pregnancy or breastfeeding
          information — that's not the same as being confirmed safe. Ask a
          health professional.
        </p>
      )}

      <p className="font-mono text-[11px] text-ink-soft mt-4 uppercase tracking-wide">
        Source: openFDA (FDA structured product labeling)
        {result.lastUpdated && ` \u00b7 Label effective ${result.lastUpdated}`}
      </p>
    </div>
  )
}
