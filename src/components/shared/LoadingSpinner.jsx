export default function LoadingSpinner({ label = 'Loading…' }) {
  return (
    <div className="flex items-center gap-3 py-8 text-ink-soft" role="status" aria-live="polite">
      <span
        className="h-5 w-5 rounded-full border-2 border-purple-mist border-t-purple animate-spin"
        aria-hidden="true"
      />
      <span className="font-body text-sm">{label}</span>
    </div>
  )
}
