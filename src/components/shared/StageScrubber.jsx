// An original take on the "browse any week" pattern seen on sites like
// The Bump — lets a mother preview any stage's content, not just her
// current one, without losing track of where she actually is.
export default function StageScrubber({ bands, activeId, selectedId, onSelect, formatLabel }) {
  return (
    <div className="overflow-x-auto pb-2 -mx-1 px-1">
      <div className="flex gap-2 w-max">
        {bands.map((band) => {
          const isSelected = band.id === selectedId
          const isActual = band.id === activeId
          return (
            <button
              key={band.id}
              type="button"
              onClick={() => onSelect(band.id)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                isSelected
                  ? 'bg-purple text-white border-purple'
                  : 'bg-surface text-ink-soft border-purple-line hover:border-purple/40'
              }`}
            >
              {formatLabel(band)}
              {isActual && (
                <span
                  className={`absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full ${isSelected ? 'bg-pink' : 'bg-pink'} ring-2 ring-canvas`}
                  aria-hidden="true"
                  title="Where you are now"
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
