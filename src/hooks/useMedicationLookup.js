import { useState, useCallback } from 'react'

// openFDA's public drug label endpoint. No API key needed for light use.
const OPENFDA_BASE = 'https://api.fda.gov/drug/label.json'

/** openFDA label fields are sometimes a string, sometimes an array of
 * strings (when a label has multiple sections with the same tag) — this
 * normalizes both shapes into one displayable string. */
function pickField(field) {
  if (!field) return null
  if (Array.isArray(field)) return field.join(' ')
  return field
}

/** Reshapes one raw openFDA label result into the flat, display-ready
 * shape MedicationResult.jsx expects, so the component doesn't need to
 * know anything about openFDA's response format. */
function parseLabelResult(result) {
  const openfda = result.openfda || {}
  return {
    brandName: openfda.brand_name?.[0] || null,
    genericName: openfda.generic_name?.[0] || null,
    activeIngredient: pickField(result.active_ingredient),
    indications: pickField(result.indications_and_usage),
    dosage: pickField(result.dosage_and_administration),
    warnings: pickField(result.warnings) || pickField(result.warnings_and_cautions),
    pregnancy: pickField(result.pregnancy),
    pregnancyOrBreastfeeding: pickField(result.pregnancy_or_breast_feeding),
    lastUpdated: result.effective_time || null,
  }
}

/**
 * useMedicationLookup — custom hook wrapping the openFDA drug label API.
 * Keeps fetch logic, loading, and error state out of page/UI components
 * (MedicationSearch just calls `search(query)` and reads `status`).
 *
 * `status` is a small state machine a component can render off directly:
 *   idle -> loading -> success | empty | error
 */
export function useMedicationLookup() {
  const [status, setStatus] = useState('idle')
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)

  const search = useCallback(async (query) => {
    const trimmed = query.trim()
    if (!trimmed) {
      setStatus('idle')
      setResults([])
      return
    }
    setStatus('loading')
    setError(null)
    try {
      // Search both brand_name and generic_name fields, joined with an
      // explicit OR — a drug's brand and generic names are different
      // strings, so joining with a plain "+" (which openFDA reads as AND)
      // would require both fields to match the same term and almost
      // never return a result. OR is what a user actually expects here:
      // "ibuprofen" should match whichever field it appears in.
      const term = encodeURIComponent(trimmed)
      const url = `${OPENFDA_BASE}?search=openfda.brand_name:"${term}"+OR+openfda.generic_name:"${term}"&limit=5`
      const res = await fetch(url)

      // openFDA returns a plain 404 (not an empty 200) when nothing matches.
      if (res.status === 404) {
        setStatus('empty')
        setResults([])
        return
      }
      if (!res.ok) {
        throw new Error(`openFDA request failed (${res.status})`)
      }

      const data = await res.json()
      const parsed = (data.results || []).map(parseLabelResult)
      setResults(parsed)
      setStatus(parsed.length ? 'success' : 'empty')
    } catch (err) {
      // Covers network failures and the manual throw above.
      setError(err.message || 'Something went wrong searching for this medication.')
      setStatus('error')
    }
  }, [])

  return { status, results, error, search }
}
