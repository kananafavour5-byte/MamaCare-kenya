// Pure JS date math — no API needed for this part of the Journey feature.

const MS_PER_DAY = 1000 * 60 * 60 * 24
const PREGNANCY_LENGTH_DAYS = 280 // ~40 weeks from last menstrual period

/**
 * Given a due date, returns the current pregnancy week (1-42+) as of today.
 */
export function pregnancyWeekFromDueDate(dueDateStr, today = new Date()) {
  const dueDate = new Date(dueDateStr)
  if (Number.isNaN(dueDate.getTime())) return null
  const lmp = new Date(dueDate.getTime() - PREGNANCY_LENGTH_DAYS * MS_PER_DAY)
  const daysElapsed = Math.floor((today.getTime() - lmp.getTime()) / MS_PER_DAY)
  const week = Math.floor(daysElapsed / 7) + 1
  return Math.min(Math.max(week, 1), 42)
}

/**
 * Given a baby's birth date, returns age in whole days as of today.
 */
export function babyAgeInDays(birthDateStr, today = new Date()) {
  const birthDate = new Date(birthDateStr)
  if (Number.isNaN(birthDate.getTime())) return null
  const days = Math.floor((today.getTime() - birthDate.getTime()) / MS_PER_DAY)
  return Math.max(days, 0)
}

export function formatBabyAge(days) {
  if (days < 14) return `${days} day${days === 1 ? '' : 's'} old`
  if (days < 60) return `${Math.floor(days / 7)} weeks old`
  const months = Math.floor(days / 30.4)
  return `${months} month${months === 1 ? '' : 's'} old`
}

/**
 * Whole days remaining until the due date (can be negative if it's passed —
 * callers should clamp/handle that, since "overdue" is normal and common).
 */
export function daysUntilDueDate(dueDateStr, today = new Date()) {
  const dueDate = new Date(dueDateStr)
  if (Number.isNaN(dueDate.getTime())) return null
  return Math.ceil((dueDate.getTime() - today.getTime()) / MS_PER_DAY)
}

/**
 * Maps a pregnancy week to the trimester label mothers actually think in
 * (1st/2nd/3rd), separate from our internal 10 four-week content bands.
 */
export function trimesterFromWeek(week) {
  if (week <= 13) return '1st trimester'
  if (week <= 27) return '2nd trimester'
  return '3rd trimester'
}
