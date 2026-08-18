import SourceTag from '../shared/SourceTag.jsx'

const COLOR_CLASSES = {
  purple: { bg: 'bg-purple-mist', ring: 'border-purple/25', chip: 'bg-purple/20' },
  pink: { bg: 'bg-pink-soft', ring: 'border-pink/25', chip: 'bg-pink/25' },
  peach: { bg: 'bg-peach-soft', ring: 'border-peach/30', chip: 'bg-peach/25' },
  mint: { bg: 'bg-mint-soft', ring: 'border-mint/25', chip: 'bg-mint/25' },
}

export default function GuideCategoryCard({ category, isOpen, onToggle }) {
  const c = COLOR_CLASSES[category.color] || COLOR_CLASSES.purple

  return (
    <div className={`rounded-card border ${c.ring} ${isOpen ? c.bg : 'bg-surface'} overflow-hidden transition-colors`}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <span className={`h-11 w-11 rounded-full flex items-center justify-center text-xl ${c.chip}`}>
            {category.icon}
          </span>
          <span className="font-display text-lg text-ink font-semibold">{category.title}</span>
        </span>
        <span className="text-ink-soft text-lg">{isOpen ? '\u2212' : '+'}</span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 space-y-5">
          {category.articles.map((article) => (
            <div key={article.title} className="pt-4 border-t border-ink/10 first:border-t-0 first:pt-0">
              <p className="font-semibold text-ink">{article.title}</p>
              <p className="text-sm text-ink-soft mt-1 leading-relaxed">{article.body}</p>
              <SourceTag source={article.source} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
