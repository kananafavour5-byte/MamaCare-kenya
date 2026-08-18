import { useMemo, useState } from 'react'
import { facilities, counties, serviceTypes } from '../data/facilities.js'

// Filters a curated, static dataset of real Kenyan maternal/newborn health
// facilities. Deliberately not a live API call — no API key required, so
// Find Care works immediately for every user. See README for why this
// approach was chosen over requiring a Google Places key for Phase 1.
export function useFacilityFilter() {
  const [query, setQuery] = useState('')
  const [county, setCounty] = useState('')
  const [service, setService] = useState('')
  const [lindaMamaOnly, setLindaMamaOnly] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return facilities.filter((f) => {
      if (q && !`${f.name} ${f.county} ${f.subCounty}`.toLowerCase().includes(q)) return false
      if (county && f.county !== county) return false
      if (service && !f.services.includes(service)) return false
      if (lindaMamaOnly && !f.lindaMama) return false
      return true
    })
  }, [query, county, service, lindaMamaOnly])

  return {
    query, setQuery,
    county, setCounty,
    service, setService,
    lindaMamaOnly, setLindaMamaOnly,
    counties, serviceTypes,
    results,
  }
}
