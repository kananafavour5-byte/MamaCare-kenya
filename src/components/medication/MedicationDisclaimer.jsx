export default function MedicationDisclaimer() {
  return (
    <div className="rounded-[18px] bg-alert-soft border border-alert/30 px-5 py-4">
      <div className="flex gap-3 items-start">
        <span className="shrink-0 h-9 w-9 rounded-full bg-white/70 flex items-center justify-center text-lg">
          ⚠️
        </span>

        <div>
          <p className="font-semibold text-sm text-alert-deep">
            Not a safety recommendation
          </p>

          <p className="text-sm mt-1 text-alert-deep/90 leading-relaxed">
            This information is not a recommendation that a medication is safe
            for you. Always consult a qualified healthcare professional before
            taking medication during pregnancy or breastfeeding.
          </p>
        </div>
      </div>
    </div>
  )
}