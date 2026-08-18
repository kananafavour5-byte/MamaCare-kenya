import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mamacare_tracker_v1'

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function emptyDay() {
  return {
    feeds: [],
    sleeps: [],
    diapers: {
      wet: 0,
      soiled: 0,
    },
    mood: null,
    kicks: 0,
  }
}

export function useTracker() {
  const [allDays, setAllDays] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(allDays)
      )
    } catch {
      // Ignore storage errors.
    }
  }, [allDays])

  const key = todayKey()
  const today = allDays[key] || emptyDay()

  const updateToday = (updater) => {
    setAllDays((prev) => ({
      ...prev,
      [key]: updater(prev[key] || emptyDay()),
    }))
  }

  const addFeed = (durationMin) => {
    updateToday((day) => ({
      ...day,
      feeds: [
        ...day.feeds,
        {
          time: new Date().toISOString(),
          durationMin,
        },
      ],
    }))
  }

  const addSleep = (label, minutes) => {
    updateToday((day) => ({
      ...day,
      sleeps: [
        ...day.sleeps,
        {
          label,
          minutes,
        },
      ],
    }))
  }

  const incrementDiaper = (type) => {
    updateToday((day) => ({
      ...day,
      diapers: {
        ...day.diapers,
        [type]: day.diapers[type] + 1,
      },
    }))
  }

  const setMood = (mood) => {
    updateToday((day) => ({
      ...day,
      mood,
    }))
  }

  const incrementKick = () => {
    updateToday((day) => ({
      ...day,
      kicks: day.kicks + 1,
    }))
  }

  const resetKicks = () => {
    updateToday((day) => ({
      ...day,
      kicks: 0,
    }))
  }

  return {
    today,
    addFeed,
    addSleep,
    incrementDiaper,
    setMood,
    incrementKick,
    resetKicks,
  }
}

