import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mamacare_checklist_v1'

/**
 * useChecklist — tracks which "focus this week" items a mother has ticked
 * off, persisted in localStorage so progress survives a page reload.
 *
 * Checked items are stored per band ID (e.g. "p8" or "n4"), so when the
 * mother moves into a new pregnancy/newborn stage, that stage's checklist
 * naturally starts fresh instead of carrying over irrelevant old items.
 *
 * Phase 1 note: this is intentionally local-only (no backend). In Phase 2
 * this same shape of data (bandId -> list of completed labels) is exactly
 * what would move to a database, keyed by the mother's account instead of
 * her browser's localStorage.
 */
export function useChecklist(bandId) {
  // All checklist state across every band, loaded once from localStorage.
  const [allChecked, setAllChecked] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  // Whenever the checklist state changes, persist the whole thing back to
  // localStorage. A try/catch guards against private-browsing modes where
  // localStorage writes can throw.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allChecked))
    } catch {
      // Ignore storage failures — the app should still work in-memory.
    }
  }, [allChecked])

  const checkedLabels = allChecked[bandId] || []

  const toggle = (label) => {
    setAllChecked((prev) => {
      const current = prev[bandId] || []
      const next = current.includes(label)
        ? current.filter((l) => l !== label)
        : [...current, label]
      return { ...prev, [bandId]: next }
    })
  }

  const isChecked = (label) => checkedLabels.includes(label)

  return { checkedLabels, toggle, isChecked }
}
