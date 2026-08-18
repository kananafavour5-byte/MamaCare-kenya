import { useState, useCallback } from 'react'

// NOT CURRENTLY USED — Find Care runs on the curated dataset in
// src/data/facilities.js instead (see README, "Known limitations").
// Kept here as a ready-to-wire-in option for a future live-data version:
// uses the Places API (New) Text Search endpoint.
// Requires VITE_GOOGLE_PLACES_API_KEY in a local .env file — see README.
const PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places:searchText'

/**
 * Custom hook wrapping Google Places Text Search, scoped toward
 * maternal / newborn health facilities.
 */
export function useFacilitySearch() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error | empty | missing-key
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)

  const search = useCallback(async (locationQuery) => {
    const trimmed = locationQuery.trim()
    if (!trimmed) {
      setStatus('idle')
      setResults([])
      return
    }

    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY
    if (!apiKey) {
      setStatus('missing-key')
      return
    }

    setStatus('loading')
    setError(null)
    try {
      const res = await fetch(PLACES_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask':
            'places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.rating,places.id',
        },
        body: JSON.stringify({
          textQuery: `maternity or newborn health clinic near ${trimmed}`,
          languageCode: 'en',
        }),
      })
      if (!res.ok) {
        throw new Error(`Facility search failed (${res.status})`)
      }
      const data = await res.json()
      const places = data.places || []
      setResults(places)
      setStatus(places.length ? 'success' : 'empty')
    } catch (err) {
      setError(err.message || 'Something went wrong searching for facilities.')
      setStatus('error')
    }
  }, [])

  return { status, results, error, search }
}
