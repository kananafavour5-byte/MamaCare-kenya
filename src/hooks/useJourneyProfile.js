import { useState, useEffect } from 'react'

const STORAGE_KEY = 'mamacare_journey_profile_v1'

// { stage: 'pregnant' | 'postpartum' | null, dueDate: string|null, birthDate: string|null }
const DEFAULT_PROFILE = { stage: null, dueDate: null, birthDate: null }

/**
 * useJourneyProfile — tracks whether the mother is pregnant or postpartum,
 * and her due date / baby's birth date. Everything on Home, Dashboard, and
 * Journey is computed from this one piece of state.
 *
 * Lifted to App.jsx and passed down as props rather than put in Context:
 * three pages read it and one writes it, which plain props handle fine.
 * Persisted to localStorage so it survives a page refresh — a mother
 * shouldn't have to re-enter her due date every time she opens the app.
 */
export function useJourneyProfile() {
  const [profile, setProfile] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : DEFAULT_PROFILE
    } catch {
      return DEFAULT_PROFILE
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [profile])

  return [profile, setProfile]
}
