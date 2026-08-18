import { useState } from 'react'
import { useMedicationLookup } from '../../hooks/useMedicationLookup.js'
import MedicationResult from './MedicationResult.jsx'
import MedicationDisclaimer from './MedicationDisclaimer.jsx'
import LoadingSpinner from '../shared/LoadingSpinner.jsx'
import ErrorMessage from '../shared/ErrorMessage.jsx'
import EmptyState from '../shared/EmptyState.jsx'

export default function MedicationSearch() {
  const [query, setQuery] = useState('')
  const { status, results, error, search } = useMedicationLookup()

  const handleSubmit = (e) => {
    e.preventDefault()
    search(query)
  }

  return (
    <div>
      <MedicationDisclaimer />

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-5">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. ibuprofen, amoxicillin, paracetamol"
          className="flex-1 rounded-full border border-purple-line px-5 py-3 bg-surface focus-visible:outline-purple"
        />
        <button
          type="submit"
          className="rounded-full bg-purple text-white font-semibold px-6 py-3 hover:bg-purple-deep shadow-sm shadow-purple/30 transition-colors"
        >
          Search
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {status === 'loading' && <LoadingSpinner label="Searching medication labels…" />}

        {status === 'error' && (
          <ErrorMessage message={error} onRetry={() => search(query)} />
        )}

        {status === 'empty' && (
          <EmptyState
            icon="🔎"
            title="No label found"
            body="We couldn't find a matching entry in the openFDA database. Try a different spelling, or the medication's generic name."
          />
        )}

        {status === 'success' && results.map((result, i) => (
          <MedicationResult key={i} result={result} />
        ))}

        {status === 'idle' && (
          <p className="text-sm text-ink-soft">
            Search by brand or generic name to see label information from
            the FDA's public drug labeling database.
          </p>
        )}
      </div>
    </div>
  )
}
