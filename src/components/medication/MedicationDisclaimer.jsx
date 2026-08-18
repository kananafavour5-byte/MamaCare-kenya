export default function MedicationDisclaimer() {
  return (
    <div className="rounded-card bg-alert-soft border border-alert/30 px-5 py-4 text-alert-deep">
      <p className="font-semibold text-sm">Not a safety recommendation</p>
      <p className="text-sm mt-1">
        This information is not a recommendation that a medication is safe
        for you. Always consult a qualified healthcare professional before
        taking medication during pregnancy or breastfeeding.
      </p>
    </div>
  )
}
