export default function EmptyState({ title = 'Nothing here yet', body, icon = '🔎' }) {
  return (
    <div className="rounded-card border border-dashed border-purple/30 bg-purple-mist/40 px-6 py-10 text-center">
      <div className="text-3xl mb-2" aria-hidden="true">{icon}</div>
      <p className="font-display text-lg text-ink">{title}</p>
      {body && <p className="text-sm text-ink-soft mt-1 max-w-sm mx-auto">{body}</p>}
    </div>
  )
}
