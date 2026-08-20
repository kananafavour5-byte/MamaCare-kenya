// Journey content — curated, not fetched from an API.
// Source: written from WHO's 8-contact antenatal care model and general
// WHO/UNICEF newborn care guidance. See project README for sourcing notes.
//
// Each pregnancy band also carries a `fruit` field: an emoji + label used
// for the "baby is about the size of a ___" badge — an original take on
// the fruit-size comparison popularized by sites like The Bump, written
// in our own words rather than reusing anyone else's copy.

// Main pregnancy journey topics shown in the horizontal navigation.
// These topics provide a simple overview; detailed information will be
// available on dedicated pages in a later step.

export const JOURNEY_TOPICS = [
  {
    id: 'first-trimester',
    title: 'First Trimester',
    subtitle: 'Early pregnancy & development',
    icon: '🌱',
  },
  {
    id: 'second-trimester',
    title: 'Second Trimester',
    subtitle: 'Growth, movement & changes',
    icon: '🌿',
  },
  {
    id: 'third-trimester',
    title: 'Third Trimester',
    subtitle: 'Growth & preparing for birth',
    icon: '🌸',
  },
  {
    id: 'antenatal-care',
    title: 'Antenatal Care',
    subtitle: 'Your pregnancy checkups',
    icon: '🩺',
  },
  {
    id: 'tests-scans',
    title: 'Tests & Scans',
    subtitle: 'What to expect',
    icon: '🔎',
  },
  {
    id: 'healthy-pregnancy',
    title: 'Healthy Pregnancy',
    subtitle: 'Nutrition & wellbeing',
    icon: '🥗',
  },
  {
    id: 'preparing-for-birth',
    title: 'Preparing for Birth',
    subtitle: 'Plan ahead',
    icon: '👜',
  },
  {
    id: 'labor-and-birth',
    title: 'Labor & Birth',
    subtitle: 'Know what to expect',
    icon: '👶',
  },
]

export const PREGNANCY_BANDS = [
  {
    id: 'p1', range: [1, 4], title: 'Early days',
     milestone: 'Your journey begins',
    whatsHappening: "These early weeks are counted from the first day of your last period, so by the time a pregnancy is confirmed, you may already be a few weeks in. The earliest changes are hormonal — even before symptoms appear.",
    learn: ['How pregnancy dating works (why "week 4" isn\u2019t 4 weeks since conception)', 'Common early signs: missed period, fatigue, breast tenderness, mild nausea', 'Why folic acid matters early on'],
    prepare: ['Book your first antenatal visit — WHO recommends starting before 12 weeks', 'Start a daily folic acid supplement if advised', 'Cut out alcohol, smoking, and unprescribed medication'],
    focus: [
  { icon: '🩺', label: 'Book your first antenatal visit' },
  { icon: '💊', label: 'Start folic acid if advised' },
  { icon: '📅', label: 'Confirm how your pregnancy is being dated' },
  { icon: '🚫', label: 'Avoid alcohol, smoking and unprescribed medicines' },
  { icon: '⚠️', label: 'Review common early symptoms and warning signs' },
],
  },
  {
    id: 'p2', range: [5, 8], title: 'Adjusting',
    milestone: 'Early changes',
    whatsHappening: 'Nausea, fatigue, and heightened smell sensitivity are common as hormone levels rise quickly. None of this means anything is wrong.',
    learn: ['Why nausea happens, and simple ways many women manage it', 'Foods and practices to avoid during pregnancy', 'When nausea might need medical attention'],
    prepare: ['Keep easy, bland snacks on hand', 'Track symptoms loosely for your first visit', 'Confirm your first antenatal appointment is booked'],
    focus: [
  { icon: '🤢', label: 'Review practical ways to manage nausea' },
  { icon: '🥗', label: 'Review foods and practices to avoid in pregnancy' },
  { icon: '⚠️', label: 'Know when nausea needs medical attention' },
  { icon: '📋', label: 'Track symptoms for your first visit' },
  { icon: '🩺', label: 'Confirm your first antenatal appointment' },
],
  },
  {
    id: 'p3', range: [9, 12], title: 'End of the first trimester',
    milestone: 'First trimester milestone',
    whatsHappening: 'The first trimester is wrapping up. Miscarriage risk drops meaningfully after this point.',
    learn: ["What typically happens at the first antenatal visit", 'Basic nutrition needs: protein, iron, calcium', 'Normal vs. concerning symptoms (spotting vs. heavy bleeding)'],
    prepare: ['Attend your first WHO-recommended antenatal contact', 'Ask your provider about routine screening tests', 'Start thinking about your support system'],
    focus: [
  { icon: '🩺', label: 'Attend your first antenatal contact' },
  { icon: '🧪', label: 'Ask about routine screening tests' },
  { icon: '🥗', label: 'Review protein, iron and calcium needs' },
  { icon: '⚠️', label: 'Review normal vs. concerning symptoms' },
  { icon: '🤝', label: 'Think about your pregnancy support system' },
],
  },
  {
    id: 'p4', range: [13, 16], title: 'Second trimester begins',
    milestone: 'Growing together',
    whatsHappening: 'Many women feel more energetic as nausea eases — often the most comfortable stretch of pregnancy.',
    learn: ['What changes in the second trimester', 'The value of continuing antenatal visits even when feeling well', 'Safe exercise during pregnancy'],
    prepare: ['Keep up antenatal visits on schedule', 'Consider maternity clothing as your body changes', 'Talk to your employer about maternity leave planning'],
    focus: [
  { icon: '🩺', label: 'Keep your antenatal visits on schedule' },
  { icon: '🚶', label: 'Review safe exercise during pregnancy' },
  { icon: '📋', label: 'Review changes expected in the second trimester' },
  { icon: '👗', label: 'Plan for changing body and maternity clothing needs' },
  { icon: '💼', label: 'Start planning maternity leave with your employer' },
],
  },
  {
    id: 'p5', range: [17, 20], title: 'Feeling movement',
    milestone: 'Feeling your baby move',
    whatsHappening: 'Many mothers start feeling the baby move around now. This is also when WHO recommends your second antenatal contact.',
    learn: ['What a mid-pregnancy scan checks for, if available', 'Why fetal movement matters', 'Common second-trimester discomforts: back pain, round ligament pain'],
    prepare: ['Attend your second antenatal contact (around 20 weeks)', 'Ask about scan availability at your facility', 'Start noticing your baby\u2019s movement patterns'],
    focus: [
  { icon: '🩺', label: 'Attend your 20-week antenatal contact' },
  { icon: '🔎', label: 'Ask about mid-pregnancy scan availability' },
  { icon: '👶', label: 'Start noticing your baby’s movement patterns' },
  { icon: '📝', label: 'Discuss common second-trimester discomforts' },
  { icon: '❓', label: 'Prepare questions for your next visit' },
],
  },
  {
    id: 'p6', range: [21, 24], title: 'Growing steadily',
    milestone: 'Growing stronger',
    whatsHappening: 'The baby is growing quickly now. Some providers screen for gestational diabetes in this window.',
    learn: ['What gestational diabetes screening involves, if offered', 'How to manage swelling, heartburn, backaches', 'Warning signs that need attention sooner (see Get Help)'],
    prepare: ['Ask your provider about glucose screening', 'Start thinking about your birth plan preferences', 'Note any new or worsening symptoms for your next visit'],
    focus: [
  { icon: '🩺', label: 'Ask about gestational diabetes screening' },
  { icon: '🧘', label: 'Discuss ways to manage common discomforts' },
  { icon: '⚠️', label: 'Review pregnancy warning signs' },
  { icon: '📝', label: 'Note any new or worsening symptoms' },
  { icon: '📋', label: 'Start thinking about birth-plan preferences' },
],
  },
  {
    id: 'p7', range: [25, 28], title: 'Approaching the third trimester',
    milestone: 'Preparing for the next stage',
    whatsHappening: 'You\u2019re nearing the end of the second trimester. WHO recommends a third antenatal contact around 26 weeks.',
    learn: ['Why visit frequency increases in the third trimester', 'Basics of preparing a simple birth plan', 'Early signs of preterm labor'],
    prepare: ['Attend your third antenatal contact (around 26 weeks)', 'Start a list of questions for your provider about delivery', 'Begin researching your delivery facility'],
    focus: [
  { icon: '🩺', label: 'Attend your third antenatal contact around 26 weeks' },
  { icon: '🏥', label: 'Research and choose your delivery facility' },
  { icon: '📝', label: 'Prepare questions about delivery and birth planning' },
  { icon: '⚠️', label: 'Learn the early signs of preterm labor' },
  { icon: '🤝', label: 'Review who will support you around delivery' },
],
  },
  {
    id: 'p8', range: [29, 32], title: 'Third trimester care',
    milestone: 'Third trimester care',
    whatsHappening: 'From here, antenatal contacts are recommended roughly every 2 weeks. Your body is preparing for labor.',
    learn: ['What to expect at more frequent third-trimester visits', 'Recognizing Braxton Hicks vs. real labor signs', 'Basics of newborn feeding decisions'],
    prepare: ['Keep up with your antenatal visit schedule', 'Start assembling a simple delivery bag', 'Think through a feeding plan and ask questions at your next visit'],
    focus: [
  { icon: '🩺', label: 'Keep up with your more frequent antenatal visits' },
  { icon: '🤰', label: 'Learn Braxton Hicks vs. true labor signs' },
  { icon: '🎒', label: 'Start assembling your delivery bag' },
  { icon: '🍼', label: 'Think through your newborn feeding plan' },
  { icon: '❓', label: 'Prepare feeding and labor questions for your next visit' },
],
  },
  {
    id: 'p9', range: [33, 36], title: 'Getting ready',
    milestone: 'Getting ready for birth',
    whatsHappening: 'The baby is gaining weight quickly and moving into position for birth. Visits continue at close intervals.',
    learn: ['Recognizing true labor signs vs. false alarms', 'What to pack for delivery', 'Postpartum recovery basics'],
    prepare: ['Finish your delivery bag', 'Confirm transport and support plans for when labor starts', 'Discuss "signs to come in immediately" with your provider'],
    focus: [
  { icon: '⏱️', label: 'Review signs of true labor vs. false alarms' },
  { icon: '🎒', label: 'Finish packing your delivery bag' },
  { icon: '🚗', label: 'Confirm transport and support plans' },
  { icon: '📞', label: 'Know when your provider wants you to come in immediately' },
  { icon: '🌸', label: 'Review basic postpartum recovery needs' },
],
  },
  {
    id: 'p10', range: [37, 42], title: 'Full term',
    milestone: 'Almost time to meet your baby',
    whatsHappening: 'Your pregnancy is considered full term. Labor could start any time now.',
    learn: ['Clear signs that labor has started', 'When to go to your delivery facility', 'What happens immediately after birth'],
    prepare: ['Keep your bag by the door and your transport plan confirmed', 'Know your facility\u2019s contact number', 'Rest when you can'],
    focus: [
  { icon: '🚨', label: 'Review the clear signs that labor has started' },
  { icon: '🏥', label: 'Know when to go to your delivery facility' },
  { icon: '📞', label: 'Keep your facility contact number ready' },
  { icon: '👜', label: 'Keep your delivery bag ready' },
  { icon: '👶', label: 'Learn what to expect immediately after birth' },
],
  },
]

export const NEWBORN_BANDS = [
  {
    id: 'n1', range: [0, 7], unit: 'days', title: 'The first week',
    whatsHappening: 'This is the most closely monitored week of your baby\u2019s life. Feeding, warmth, and bonding are the priorities, alongside your own recovery.',
    learn: ['Establishing breastfeeding (or your chosen feeding method)', 'Basic cord care — keeping it clean and dry', 'Normal newborn appearance: some swelling, mild jaundice by day 2\u20133'],
    prepare: ['Attend the first newborn checkup as advised by your facility', 'Know your newborn\u2019s normal feeding pattern (8\u201312 times a day)', 'Keep the Get Help warning signs close this week'],
    focus: [
  { icon: '🍼', label: 'Establish feeding and recognize early hunger cues' },
  { icon: '🩹', label: 'Keep the umbilical cord clean and dry' },
  { icon: '🏥', label: 'Attend the first newborn health check' },
  { icon: '🌡️', label: 'Check that your baby stays warm' },
  { icon: '⚠️', label: 'Know the newborn danger signs that need prompt care' },
],
  },
  {
    id: 'n2', range: [8, 14], unit: 'days', title: 'Settling in',
    whatsHappening: 'Feeding rhythms start to settle. Jaundice, if it becomes more noticeable, tends to peak before easing.',
    learn: ['Normal newborn jaundice vs. signs that need attention', 'Typical weight-check expectations', 'Building a simple day/night rhythm, even loosely'],
    prepare: ['Attend a weight-check visit if scheduled', 'Keep tracking wet/dirty diapers as a feeding indicator', 'Rest when the baby rests, where possible'],
    focus: [
  { icon: '⚖️', label: 'Attend the 7–14 day weight and growth check' },
  { icon: '🍼', label: 'Review feeding effectiveness and intake' },
  { icon: '💛', label: 'Monitor jaundice as it changes or persists' },
  { icon: '🌙', label: 'Begin establishing a gentle day–night rhythm' },
  { icon: '⚠️', label: 'Watch for feeding difficulties or signs of infection' },
],
  },
  {
    id: 'n3', range: [15, 28], unit: 'days', title: 'Finding a rhythm',
    whatsHappening: 'Many babies have a growth spurt around this time, meaning more frequent feeding for a few days.',
    learn: ['Growth spurts and temporary hunger increases', 'Safe sleep basics (back sleeping, firm surface, no loose bedding)', 'Normal crying vs. signs something else is going on'],
    prepare: ['Set up a safe sleep space if you haven\u2019t already', 'Keep feeding on demand through the growth spurt', 'Start noticing early hunger cues before crying starts'],
    focus: [
  { icon: '😴', label: 'Check that baby sleeps on a firm, flat surface' },
  { icon: '🍼', label: 'Recognize increased feeding during growth spurts' },
  { icon: '👶', label: 'Watch for early hunger cues before crying' },
  { icon: '💗', label: 'Use responsive soothing for normal crying' },
  { icon: '⚠️', label: 'Know when unusual crying may need medical attention' },
],
  },
  {
    id: 'n4', range: [29, 59], unit: 'days', title: 'New routines', monthLabel: 'Month 2',
    whatsHappening: 'Babies begin to show more social behavior — brief eye contact, early smiles. Vaccination rounds typically begin around now.',
    learn: ['General immunization timing and why staying on schedule matters', 'Tummy time basics', 'Recognizing early social cues as normal development'],
    prepare: ['Confirm your baby\u2019s immunization schedule with your facility', 'Start short daily tummy time sessions', 'Keep observing feeding and sleep patterns'],
    focus: [
  { icon: '💉', label: 'Confirm your baby’s next immunizations' },
  { icon: '🩺', label: 'Prepare for the 6-week health assessment' },
  { icon: '🤸', label: 'Continue short, supervised tummy-time sessions' },
  { icon: '👀', label: 'Notice early social and developmental responses' },
  { icon: '📋', label: 'Bring feeding and sleep observations to the checkup' },
],
  },
  {
    id: 'n5', range: [60, 90], unit: 'days', title: 'More predictable patterns', monthLabel: 'Month 3',
    whatsHappening: 'Sleep and feeding often become somewhat more predictable, though every baby is different.',
    learn: ['Building a loose daily routine', 'Continued immunization follow-ups', 'Recognizing developmental progress (head control, tracking objects)'],
    prepare: ['Keep up with the immunization schedule', 'Introduce more interactive awake-time activities', 'Note any developmental concerns for your next checkup'],
    focus: [
  { icon: '📅', label: 'Build a flexible daily routine' },
  { icon: '💉', label: 'Keep immunization follow-ups on schedule' },
  { icon: '👀', label: 'Observe head control and visual tracking' },
  { icon: '🧸', label: 'Add more interactive awake-time activities' },
  { icon: '📝', label: 'Record developmental concerns for the next checkup' },
],
  },
  {
    id: 'n6', range: [91, 182], unit: 'days', title: 'Looking ahead', monthLabel: 'Months 4\u20136',
    whatsHappening: 'Babies become noticeably more interactive — reaching, rolling, stronger head and neck control. Around 6 months, many caregivers start thinking about solids.',
    learn: ['General signs of readiness for solids (around 6 months)', 'Continued immunization follow-ups', 'Milestones typical of this age range'],
    prepare: ['Discuss introducing solids with a health worker before starting', 'Keep immunizations on schedule', 'Start childproofing as mobility increases'],
    focus: [
  { icon: '🥄', label: 'Discuss readiness for complementary foods around 6 months' },
  { icon: '🥣', label: 'Learn about safe, nutrient-dense first foods' },
  { icon: '💉', label: 'Keep immunizations up to date' },
  { icon: '🧠', label: 'Observe reaching, rolling and head-control progress' },
  { icon: '🏠', label: 'Begin childproofing as your baby becomes more mobile' },
],
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
