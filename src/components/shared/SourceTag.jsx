export default function SourceTag({ source }) {
  if (!source) return null
  return (
    <p className="font-mono text-[11px] tracking-wide uppercase text-purple/70 mt-3">
      Information source: <span className="text-purple-deep">{source}</span>
    </p>
  )
}
