import { useState } from 'react'
import { GUIDE_CATEGORIES } from '../data/guideData.js'
import GuideCategoryCard from '../components/guide/GuideCategoryCard.jsx'
import MedicationSearch from '../components/medication/MedicationSearch.jsx'
import GuideIllustration from '../components/shared/GuideIllustration.jsx'

export default function GuidePage() {
  const [openId, setOpenId] = useState(null)
  const [showMedication, setShowMedication] = useState(false)

  return (
    <div>
      <div className="grid sm:grid-cols-[1fr_180px] gap-6 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-purple-deep mb-2">📚 Guide</p>
          <h1 className="font-display text-3xl sm:text-4xl text-ink font-semibold">Everything, organized by topic</h1>
          <p className="text-ink-soft mt-2 max-w-xl">
            Written from WHO, UNICEF, and Kenya Ministry of Health public
            guidance — always a starting point, never a replacement for a
            health professional.
          </p>
        </div>
        <GuideIllustration className="hidden sm:block w-full h-auto" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        {GUIDE_CATEGORIES.map((category) => (
          <GuideCategoryCard
            key={category.id}
            category={category}
            isOpen={openId === category.id}
            onToggle={() => setOpenId(openId === category.id ? null : category.id)}
          />
        ))}
      </div>

      <div className="mt-8 rounded-card bg-purple text-white overflow-hidden">
        <button
          type="button"
          onClick={() => setShowMedication((v) => !v)}
          className="w-full flex items-center justify-between gap-3 px-5 py-5 text-left"
          aria-expanded={showMedication}
        >
          <span className="font-display text-lg font-semibold">🔎 Medication Information</span>
          <span className="text-lg">{showMedication ? '\u2212' : '+'}</span>
        </button>
        {showMedication && (
          <div className="px-5 pb-5 bg-surface text-ink rounded-t-card -mx-px">
            <div className="pt-5">
              <MedicationSearch />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
