// Generic "something went wrong" state — deliberately kept distinct from
// the Get Help alert color, so that color stays meaningful for real
// health warnings rather than everyday network errors.
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="rounded-card border border-peach/40 bg-peach-soft px-5 py-4 text-ink">
      <p className="font-semibold text-sm">Something didn't work</p>
      <p className="text-sm mt-1 text-ink-soft">{message || 'Please try again in a moment.'}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 font-mono text-xs uppercase tracking-wide underline underline-offset-2 text-purple-deep hover:text-purple"
        >
          Try again
        </button>
      )}
    </div>
  )
}
