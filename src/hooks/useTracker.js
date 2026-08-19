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

    // Track Today additions
    symptoms: [],
    weight: '',
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

  const today = {
    ...emptyDay(),
    ...(allDays[key] || {}),
    diapers: {
      ...emptyDay().diapers,
      ...(allDays[key]?.diapers || {}),
    },
  }

  const updateToday = (updater) => {
    setAllDays((prev) => ({
      ...prev,
      [key]: updater({
        ...emptyDay(),
        ...(prev[key] || {}),
        diapers: {
          ...emptyDay().diapers,
          ...(prev[key]?.diapers || {}),
        },
      }),
    }))
  }

  // -----------------------------
  // FEEDING
  // -----------------------------

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

  const removeFeed = (index) => {
    updateToday((day) => ({
      ...day,
      feeds: day.feeds.filter((_, i) => i !== index),
    }))
  }

  // -----------------------------
  // SLEEP
  // -----------------------------

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

  const removeSleep = (index) => {
    updateToday((day) => ({
      ...day,
      sleeps: day.sleeps.filter((_, i) => i !== index),
    }))
  }

  // -----------------------------
  // DIAPERS
  // -----------------------------

  const incrementDiaper = (type) => {
    updateToday((day) => ({
      ...day,
      diapers: {
        ...day.diapers,
        [type]: day.diapers[type] + 1,
      },
    }))
  }

  const decrementDiaper = (type) => {
    updateToday((day) => ({
      ...day,
      diapers: {
        ...day.diapers,
        [type]: Math.max(0, day.diapers[type] - 1),
      },
    }))
  }

  // -----------------------------
  // MOOD
  // -----------------------------

  const setMood = (mood) => {
    updateToday((day) => ({
      ...day,
      mood,
    }))
  }

  const clearMood = () => {
    updateToday((day) => ({
      ...day,
      mood: null,
    }))
  }

  // -----------------------------
  // KICK COUNTER
  // -----------------------------

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

  // -----------------------------
  // SYMPTOMS
  // -----------------------------

  const addSymptom = (symptom) => {
    const trimmed = symptom.trim()

    if (!trimmed) return

    updateToday((day) => ({
      ...day,
      symptoms: day.symptoms.includes(trimmed)
        ? day.symptoms
        : [...day.symptoms, trimmed],
    }))
  }

  const removeSymptom = (symptom) => {
    updateToday((day) => ({
      ...day,
      symptoms: day.symptoms.filter((item) => item !== symptom),
    }))
  }

  const clearSymptoms = () => {
    updateToday((day) => ({
      ...day,
      symptoms: [],
    }))
  }

  // -----------------------------
  // WEIGHT
  // -----------------------------

  const setWeight = (weight) => {
    updateToday((day) => ({
      ...day,
      weight,
    }))
  }

  const clearWeight = () => {
    updateToday((day) => ({
      ...day,
      weight: '',
    }))
  }

  return {
    today,

    // Feeding
    addFeed,
    removeFeed,

    // Sleep
    addSleep,
    removeSleep,

    // Diapers
    incrementDiaper,
    decrementDiaper,

    // Mood
    setMood,
    clearMood,

    // Kicks
    incrementKick,
    resetKicks,

    // Symptoms
    addSymptom,
    removeSymptom,
    clearSymptoms,

    // Weight
    setWeight,
    clearWeight,
  }
}