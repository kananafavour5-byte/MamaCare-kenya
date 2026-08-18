// Journey content — curated, not fetched from an API.
// Source: written from WHO's 8-contact antenatal care model and general
// WHO/UNICEF newborn care guidance. See project README for sourcing notes.
//
// Each pregnancy band also carries a `fruit` field: an emoji + label used
// for the "baby is about the size of a ___" badge — an original take on
// the fruit-size comparison popularized by sites like The Bump, written
// in our own words rather than reusing anyone else's copy.

export const PREGNANCY_BANDS = [
  {
    id: 'p1', range: [1, 4], title: 'Early days',
     milestone: 'Your journey begins',
    whatsHappening: "These early weeks are counted from the first day of your last period, so by the time a pregnancy is confirmed, you may already be a few weeks in. The earliest changes are hormonal — even before symptoms appear.",
    learn: ['How pregnancy dating works (why "week 4" isn\u2019t 4 weeks since conception)', 'Common early signs: missed period, fatigue, breast tenderness, mild nausea', 'Why folic acid matters early on'],
    prepare: ['Book your first antenatal visit — WHO recommends starting before 12 weeks', 'Start a daily folic acid supplement if advised', 'Cut out alcohol, smoking, and unprescribed medication'],
    focus: [{ icon: '🩺', label: 'Book first checkup' }, { icon: '💊', label: 'Folic acid' }, { icon: '🥗', label: 'Gentle nutrition start' }],
  },
  {
    id: 'p2', range: [5, 8], title: 'Adjusting',
    milestone: 'Early changes',
    whatsHappening: 'Nausea, fatigue, and heightened smell sensitivity are common as hormone levels rise quickly. None of this means anything is wrong.',
    learn: ['Why nausea happens, and simple ways many women manage it', 'Foods and practices to avoid during pregnancy', 'When nausea might need medical attention'],
    prepare: ['Keep easy, bland snacks on hand', 'Track symptoms loosely for your first visit', 'Confirm your first antenatal appointment is booked'],
    focus: [{ icon: '🤢', label: 'Managing nausea' }, { icon: '💧', label: 'Staying hydrated' }, { icon: '🩺', label: 'First visit prep' }],
  },
  {
    id: 'p3', range: [9, 12], title: 'End of the first trimester',
    milestone: 'First trimester milestone',
    whatsHappening: 'The first trimester is wrapping up. Miscarriage risk drops meaningfully after this point.',
    learn: ["What typically happens at the first antenatal visit", 'Basic nutrition needs: protein, iron, calcium', 'Normal vs. concerning symptoms (spotting vs. heavy bleeding)'],
    prepare: ['Attend your first WHO-recommended antenatal contact', 'Ask your provider about routine screening tests', 'Start thinking about your support system'],
    focus: [{ icon: '🩺', label: 'First antenatal contact' }, { icon: '🥗', label: 'Building nutrition habits' }],
  },
  {
    id: 'p4', range: [13, 16], title: 'Second trimester begins',
    milestone: 'Growing together',
    whatsHappening: 'Many women feel more energetic as nausea eases — often the most comfortable stretch of pregnancy.',
    learn: ['What changes in the second trimester', 'The value of continuing antenatal visits even when feeling well', 'Safe exercise during pregnancy'],
    prepare: ['Keep up antenatal visits on schedule', 'Consider maternity clothing as your body changes', 'Talk to your employer about maternity leave planning'],
    focus: [{ icon: '🚶', label: 'Staying active safely' }, { icon: '🩺', label: 'Keeping up antenatal visits' }],
  },
  {
    id: 'p5', range: [17, 20], title: 'Feeling movement',
    milestone: 'Feeling your baby move',
    whatsHappening: 'Many mothers start feeling the baby move around now. This is also when WHO recommends your second antenatal contact.',
    learn: ['What a mid-pregnancy scan checks for, if available', 'Why fetal movement matters', 'Common second-trimester discomforts: back pain, round ligament pain'],
    prepare: ['Attend your second antenatal contact (around 20 weeks)', 'Ask about scan availability at your facility', 'Start noticing your baby\u2019s movement patterns'],
    focus: [{ icon: '🩺', label: '20-week antenatal contact' }, { icon: '👶', label: 'Noticing movement' }],
  },
  {
    id: 'p6', range: [21, 24], title: 'Growing steadily',
    milestone: 'Growing stronger',
    whatsHappening: 'The baby is growing quickly now. Some providers screen for gestational diabetes in this window.',
    learn: ['What gestational diabetes screening involves, if offered', 'How to manage swelling, heartburn, backaches', 'Warning signs that need attention sooner (see Get Help)'],
    prepare: ['Ask your provider about glucose screening', 'Start thinking about your birth plan preferences', 'Note any new or worsening symptoms for your next visit'],
    focus: [{ icon: '🩺', label: 'Glucose screening (if offered)' }, { icon: '🧘', label: 'Managing discomfort' }],
  },
  {
    id: 'p7', range: [25, 28], title: 'Approaching the third trimester',
    milestone: 'Preparing for the next stage',
    whatsHappening: 'You\u2019re nearing the end of the second trimester. WHO recommends a third antenatal contact around 26 weeks.',
    learn: ['Why visit frequency increases in the third trimester', 'Basics of preparing a simple birth plan', 'Early signs of preterm labor'],
    prepare: ['Attend your third antenatal contact (around 26 weeks)', 'Start a list of questions for your provider about delivery', 'Begin researching your delivery facility'],
    focus: [{ icon: '🩺', label: '26-week antenatal contact' }, { icon: '🏥', label: 'Choosing a delivery facility' }],
  },
  {
    id: 'p8', range: [29, 32], title: 'Third trimester care',
    milestone: 'Third trimester care',
    whatsHappening: 'From here, antenatal contacts are recommended roughly every 2 weeks. Your body is preparing for labor.',
    learn: ['What to expect at more frequent third-trimester visits', 'Recognizing Braxton Hicks vs. real labor signs', 'Basics of newborn feeding decisions'],
    prepare: ['Keep up with your antenatal visit schedule', 'Start assembling a simple delivery bag', 'Think through a feeding plan and ask questions at your next visit'],
    focus: [{ icon: '🩺', label: 'Frequent antenatal visits begin' }, { icon: '🎒', label: 'Starting your delivery bag' }],
  },
  {
    id: 'p9', range: [33, 36], title: 'Getting ready',
    milestone: 'Getting ready for birth',
    whatsHappening: 'The baby is gaining weight quickly and moving into position for birth. Visits continue at close intervals.',
    learn: ['Recognizing true labor signs vs. false alarms', 'What to pack for delivery', 'Postpartum recovery basics'],
    prepare: ['Finish your delivery bag', 'Confirm transport and support plans for when labor starts', 'Discuss "signs to come in immediately" with your provider'],
    focus: [{ icon: '🎒', label: 'Finishing your bag' }, { icon: '🚗', label: 'Transport & support plan' }],
  },
  {
    id: 'p10', range: [37, 42], title: 'Full term',
    milestone: 'Almost time to meet your baby',
    whatsHappening: 'Your pregnancy is considered full term. Labor could start any time now.',
    learn: ['Clear signs that labor has started', 'When to go to your delivery facility', 'What happens immediately after birth'],
    prepare: ['Keep your bag by the door and your transport plan confirmed', 'Know your facility\u2019s contact number', 'Rest when you can'],
    focus: [{ icon: '🚨', label: 'Know your labor signs' }, { icon: '🏥', label: 'Facility contact ready' }],
  },
]

export const NEWBORN_BANDS = [
  {
    id: 'n1', range: [0, 7], unit: 'days', title: 'The first week',
    whatsHappening: 'This is the most closely monitored week of your baby\u2019s life. Feeding, warmth, and bonding are the priorities, alongside your own recovery.',
    learn: ['Establishing breastfeeding (or your chosen feeding method)', 'Basic cord care — keeping it clean and dry', 'Normal newborn appearance: some swelling, mild jaundice by day 2\u20133'],
    prepare: ['Attend the first newborn checkup as advised by your facility', 'Know your newborn\u2019s normal feeding pattern (8\u201312 times a day)', 'Keep the Get Help warning signs close this week'],
    focus: [{ icon: '🍼', label: 'Establishing feeding' }, { icon: '🩹', label: 'Cord care' }, { icon: '🏥', label: 'First checkup' }],
  },
  {
    id: 'n2', range: [8, 14], unit: 'days', title: 'Settling in',
    whatsHappening: 'Feeding rhythms start to settle. Jaundice, if it becomes more noticeable, tends to peak before easing.',
    learn: ['Normal newborn jaundice vs. signs that need attention', 'Typical weight-check expectations', 'Building a simple day/night rhythm, even loosely'],
    prepare: ['Attend a weight-check visit if scheduled', 'Keep tracking wet/dirty diapers as a feeding indicator', 'Rest when the baby rests, where possible'],
    focus: [{ icon: '⚖️', label: 'Weight check' }, { icon: '🍼', label: 'Feeding rhythm' }, { icon: '😴', label: 'Early rest patterns' }],
  },
  {
    id: 'n3', range: [15, 28], unit: 'days', title: 'Finding a rhythm',
    whatsHappening: 'Many babies have a growth spurt around this time, meaning more frequent feeding for a few days.',
    learn: ['Growth spurts and temporary hunger increases', 'Safe sleep basics (back sleeping, firm surface, no loose bedding)', 'Normal crying vs. signs something else is going on'],
    prepare: ['Set up a safe sleep space if you haven\u2019t already', 'Keep feeding on demand through the growth spurt', 'Start noticing early hunger cues before crying starts'],
    focus: [{ icon: '😴', label: 'Safe sleep setup' }, { icon: '🍼', label: 'Riding out growth spurts' }],
  },
  {
    id: 'n4', range: [29, 59], unit: 'days', title: 'New routines', monthLabel: 'Month 2',
    whatsHappening: 'Babies begin to show more social behavior — brief eye contact, early smiles. Vaccination rounds typically begin around now.',
    learn: ['General immunization timing and why staying on schedule matters', 'Tummy time basics', 'Recognizing early social cues as normal development'],
    prepare: ['Confirm your baby\u2019s immunization schedule with your facility', 'Start short daily tummy time sessions', 'Keep observing feeding and sleep patterns'],
    focus: [{ icon: '💉', label: 'Immunization schedule' }, { icon: '🤸', label: 'Tummy time' }, { icon: '😊', label: 'Bonding moments' }],
  },
  {
    id: 'n5', range: [60, 90], unit: 'days', title: 'More predictable patterns', monthLabel: 'Month 3',
    whatsHappening: 'Sleep and feeding often become somewhat more predictable, though every baby is different.',
    learn: ['Building a loose daily routine', 'Continued immunization follow-ups', 'Recognizing developmental progress (head control, tracking objects)'],
    prepare: ['Keep up with the immunization schedule', 'Introduce more interactive awake-time activities', 'Note any developmental concerns for your next checkup'],
    focus: [{ icon: '📅', label: 'Building routine' }, { icon: '👀', label: 'Watching development' }],
  },
  {
    id: 'n6', range: [91, 182], unit: 'days', title: 'Looking ahead', monthLabel: 'Months 4\u20136',
    whatsHappening: 'Babies become noticeably more interactive — reaching, rolling, stronger head and neck control. Around 6 months, many caregivers start thinking about solids.',
    learn: ['General signs of readiness for solids (around 6 months)', 'Continued immunization follow-ups', 'Milestones typical of this age range'],
    prepare: ['Discuss introducing solids with a health worker before starting', 'Keep immunizations on schedule', 'Start childproofing as mobility increases'],
    focus: [{ icon: '🥄', label: 'Solids conversation (ask your provider)' }, { icon: '💉', label: 'Immunizations' }, { icon: '🧸', label: 'Development watch' }],
  },
]

/** Finds the 4-week content band that covers a given pregnancy week.
 * Falls back to the final (37-40+) band for anything past week 40, since
 * pregnancies can run a little long. */
export function findPregnancyBand(week) {
  return PREGNANCY_BANDS.find((b) => week >= b.range[0] && week <= b.range[1]) || PREGNANCY_BANDS[PREGNANCY_BANDS.length - 1]
}

/** Same idea for newborn age bands, keyed by age in whole days. */
export function findNewbornBand(ageInDays) {
  return NEWBORN_BANDS.find((b) => ageInDays >= b.range[0] && ageInDays <= b.range[1]) || NEWBORN_BANDS[NEWBORN_BANDS.length - 1]
}
