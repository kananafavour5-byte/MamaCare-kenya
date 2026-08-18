// Get Help content — the most sensitive page in the app.
// Every item reads as "get this checked," never as a diagnosis.

export const EMERGENCY_NUMBERS = [
  { label: 'National emergency lines', value: '999 / 112 / 911', note: 'Police, fire, ambulance — free, works across Kenya' },
  { label: 'Kenya Red Cross ambulance', value: '1199', note: '24/7 emergency medical response line' },
]

export const MOTHER_WARNING_SIGNS = [
  {
    id: 'bleeding', title: 'Bleeding', urgency: 'now',
    body: 'Bleeding that\u2019s heavier than a normal period, that soaks through a pad in an hour, or that gets worse instead of lighter over time.',
  },
  {
    id: 'head-vision', title: 'Head & vision', urgency: 'now',
    body: 'A severe or worsening headache, changes in your vision (blurring, spots, flashing), or dizziness and fainting.',
  },
  {
    id: 'fever', title: 'Fever & infection', urgency: 'today',
    body: 'A fever, chills, or a wound/incision that looks more red, swollen, or painful instead of healing.',
  },
  {
    id: 'breathing', title: 'Breathing & chest', urgency: 'now',
    body: 'Chest pain, difficulty breathing, or a racing heartbeat.',
  },
  {
    id: 'legs', title: 'Legs', urgency: 'today',
    body: 'Swelling, redness, warmth, or pain in one leg, especially the calf.',
  },
  {
    id: 'mental-health', title: 'Mental health', urgency: 'now',
    body: 'Feeling overwhelmed or persistently sad or anxious for more than two weeks, feeling disconnected from your baby, or — treat this as urgent — any thoughts of harming yourself or your baby.',
    emphasis: 'If you have thoughts of harming yourself or your baby, seek help immediately — call the emergency numbers above or go to the nearest facility now. Otherwise, reach out to a health professional soon; this is common and treatable.',
  },
]

export const NEWBORN_WARNING_SIGNS = [
  {
    id: 'feeding', title: 'Feeding', urgency: 'now',
    body: 'Your baby stops feeding well, feeds much less than usual, or won\u2019t suck.',
  },
  {
    id: 'movement', title: 'Movement', urgency: 'now',
    body: 'Convulsions (jerking, fitting), no spontaneous movement, or an unusually floppy body.',
  },
  {
    id: 'breathing', title: 'Breathing', urgency: 'now',
    body: 'Fast breathing, chest indrawing (the chest pulling in with each breath), or grunting sounds while breathing.',
  },
  {
    id: 'temperature', title: 'Temperature', urgency: 'now',
    body: 'A fever (above about 37.5\u00b0C) or a low body temperature (below about 35.5\u00b0C) — feeling unusually hot or cold to the touch.',
  },
  {
    id: 'skin', title: 'Skin & color', urgency: 'now',
    body: 'Jaundice (yellowing of skin or eyes) appearing in the first 24 hours of life, or yellow palms and soles at any age; skin that looks pale or bluish.',
  },
]

export const MOTHER_SIGNS_SOURCE = 'Adapted from international clinical guidance (ACOG/AWHONN) — no Kenya-specific public maternal warning-sign list was found during research.'
export const NEWBORN_SIGNS_SOURCE = 'Kenya Ministry of Health MCH-booklet danger-sign framework'
