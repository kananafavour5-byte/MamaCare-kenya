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

      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3">
          <span className="h-11 w-11 rounded-full bg-purple/10 flex items-center justify-center text-xl">
            💊
          </span>

          <div>
            <h3 className="font-display text-xl text-purple-deep font-semibold">
              Medication information
            </h3>

            <p className="text-sm text-ink-soft mt-0.5">
              Review official drug-label information by brand or generic name.
            </p>
          </div>
        </div>
      </div>

      {/* Safety disclaimer */}
      <MedicationDisclaimer />

      {/* Search */}
      <form
        onSubmit={handleSubmit}
        className="mt-5 rounded-[20px] bg-purple-mist/35 border border-purple-line p-3 sm:p-4"
      >
        <label
          htmlFor="medication-search"
          className="block text-xs font-semibold text-purple-deep mb-2"
        >
          Search for a medication
        </label>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="medication-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. ibuprofen, amoxicillin, panadol"
            className="flex-1 min-w-0 rounded-full border border-purple-line px-5 py-3 bg-white focus-visible:outline-purple"
          />

          <button
            type="submit"
            className="rounded-full bg-purple text-white font-semibold px-6 py-3 hover:bg-purple-deep shadow-sm transition-colors"
          >
            Search
          </button>
        </div>

        <p className="text-xs text-ink-soft mt-2 px-1">
          Search using a brand or generic medication name.
        </p>
      </form>

      {/* Results */}
      <div className="mt-6 space-y-4">

        {status === 'loading' && (
          <LoadingSpinner label="Searching medication labels…" />
        )}

        {status === 'error' && (
          <ErrorMessage
            message={error}
            onRetry={() => search(query)}
          />
        )}

        {status === 'empty' && (
          <EmptyState
            icon="🔎"
            title="No label found"
            body="We couldn't find a matching entry in the openFDA database. Try a different spelling, or search using the medication's generic name."
          />
        )}

        {status === 'success' && (
          <>
            <p className="text-xs text-ink-soft">
              Showing information from FDA public drug labeling.
            </p>

            {results.map((result, i) => (
              <MedicationResult
                key={i}
                result={result}
              />
            ))}
          </>
        )}

        {status === 'idle' && (
          <div className="rounded-[18px] bg-surface border border-purple-line px-4 py-4">
            <p className="text-sm text-ink-soft leading-relaxed">
              Search by brand or generic name to review information from the
              FDA's public drug labeling database.
            </p>
          </div>
        )}

      </div>

    </div>
  )
}