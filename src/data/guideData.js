// Guide content — curated, not fetched from an API.
// Written in plain language from WHO / UNICEF public guidance.

export const GUIDE_CATEGORIES = [
  {
    id: 'pregnancy', title: 'Pregnancy', icon: '🌸', color: 'purple',
    articles: [
      { title: 'Trimester overview', source: 'WHO', body: 'Pregnancy is generally grouped into three trimesters, each about three months long. The first trimester (weeks 1\u201312) is when major organs form and early symptoms like nausea and fatigue are common. The second trimester (weeks 13\u201327) is often the most comfortable, with visible growth and the baby\u2019s first movements. The third trimester (weeks 28\u201340+) is about continued growth, more frequent checkups, and preparing for birth.' },
      { title: 'Nutrition during pregnancy', source: 'WHO', body: 'A balanced diet supports both mother and baby — regular meals with protein, iron-rich foods, calcium sources, and plenty of fluids. Folic acid is particularly important early on. Some foods are best avoided or limited, including raw or undercooked meat and fish, unpasteurized dairy, and excess caffeine.' },
      { title: 'Common discomforts and what helps', source: 'WHO', body: 'Nausea, fatigue, back pain, swelling, and heartburn are common and don\u2019t usually signal a problem. Small frequent meals can ease nausea and heartburn; gentle movement and rest can help back pain. If a discomfort feels severe or sudden, check the Get Help section.' },
      { title: 'What happens at prenatal visits', source: 'WHO', body: 'Antenatal visits typically include checking your weight, blood pressure, and the baby\u2019s growth, along with routine tests at certain points. WHO recommends at least 8 antenatal contacts across a pregnancy, starting before 12 weeks. It helps to write questions down beforehand.' },
      { title: 'Preparing for labor and birth', source: 'WHO', body: 'Preparing for birth generally includes choosing a delivery facility, packing a simple bag, knowing the signs labor has started, and having a transport and support plan ready. Talk through your preferences with your provider ahead of time.' },
    ],
  },
  {
    id: 'newborn', title: 'Newborn', icon: '👶', color: 'pink',
    articles: [
      { title: 'Basic newborn care fundamentals', source: 'WHO / UNICEF', body: 'Newborns need warmth, frequent feeding, gentle handling, and close observation in the early days. Supporting the head and neck is important since neck muscles are still developing. Skin-to-skin contact in the early hours supports bonding, feeding, and temperature regulation.' },
      { title: 'Diapering', source: 'UNICEF', body: 'Newborns need frequent diaper changes — often 8\u201310 times a day in the early weeks. Clean gently front to back, let the skin air-dry briefly, and watch for signs of diaper rash, which usually responds well to more frequent changes.' },
      { title: 'Bathing a newborn', source: 'WHO', body: 'Full baths aren\u2019t usually necessary every day early on — gentle sponge baths are often enough, especially before the umbilical cord falls off. Water should be warm, not hot, and always support the head and neck.' },
      { title: 'Umbilical cord care', source: 'WHO', body: 'Keep the cord stump clean and dry and let it fall off naturally, usually within 1\u20132 weeks. Avoid covering it tightly with a diaper. Watch for redness, swelling, discharge, or a bad smell — these need professional attention.' },
      { title: 'Understanding newborn reflexes and behavior', source: 'WHO', body: 'Newborns have natural reflexes — rooting, sucking, grasping, and a startle (Moro) reflex when surprised. These are normal signs of a developing nervous system.' },
    ],
  },
  {
    id: 'mother', title: 'Mother Care', icon: '❤️', color: 'peach',
    articles: [
      { title: 'Physical recovery after birth', source: 'WHO', body: 'Recovery after birth takes weeks, not days. Vaginal bleeding (lochia) is normal for several weeks, gradually lightening. Rest, gentle movement, and attending postpartum checkups all support recovery. Heavier bleeding or worsening pain are not things to wait out — see Get Help.' },
      { title: 'Emotional wellbeing after birth', source: 'WHO', body: 'It\u2019s common to feel tearful or overwhelmed in the days after birth — often called the "baby blues," which usually eases within about two weeks. If low mood or anxiety lasts longer, it\u2019s worth talking to a professional. If you ever have thoughts of harming yourself or your baby, treat that as urgent — see Get Help.' },
      { title: 'Nutrition while breastfeeding', source: 'WHO / UNICEF', body: 'Breastfeeding mothers generally need extra fluids and a balanced diet. There\u2019s no need for a special diet, though it\u2019s worth asking a health worker about any medications, since some substances can pass into breast milk — the Medication Information tool can help.' },
      { title: 'Rest, support, and asking for help', source: 'WHO', body: 'Recovery is easier with support. It\u2019s normal and reasonable to ask for help with household tasks or other children so you can rest. Sleep when the baby sleeps where possible.' },
      { title: 'Returning to activity safely', source: 'WHO', body: 'Most mothers can gradually return to light activity within days to weeks, though this varies by delivery type. More strenuous exercise is generally better delayed until cleared by a health professional.' },
    ],
  },
  {
    id: 'feeding', title: 'Feeding', icon: '🍼', color: 'mint',
    articles: [
      { title: 'Breastfeeding basics', source: 'WHO / UNICEF', body: 'Exclusive breastfeeding is generally recommended for the first six months, feeding on demand — typically 8\u201312 times a day for a newborn. A good latch matters more than a strict schedule early on.' },
      { title: 'Common breastfeeding challenges', source: 'WHO / UNICEF', body: 'Sore nipples, engorgement, and supply worries are common, especially early on. Persistent pain, fever, or a hot, red area on the breast should be checked by a professional.' },
      { title: 'Formula feeding basics', source: 'WHO', body: 'Formula feeding is a valid choice. Following preparation instructions carefully — correct water ratio, clean equipment, safe water — matters for your baby\u2019s safety.' },
      { title: 'Recognizing hunger and fullness cues', source: 'WHO / UNICEF', body: 'Early hunger cues include rooting and hands to mouth; crying is often a later signal. Fullness cues include turning away and slowing down. Following cues rather than a strict clock is generally recommended for newborns.' },
      { title: 'Introducing solids', source: 'WHO / UNICEF', body: 'Around 6 months, alongside continued breastfeeding or formula, most babies are ready for solids — signs include sitting with support and interest in food. Worth discussing directly with a health worker before starting.' },
    ],
  },
  {
    id: 'sleep', title: 'Sleep', icon: '😴', color: 'purple',
    articles: [
      { title: 'Safe sleep guidelines', source: 'WHO', body: 'Placing a baby on their back to sleep, on a firm surface, without loose bedding, pillows, or soft toys, is the safest sleep practice recommended worldwide. Room-sharing is often recommended for at least the first several months.' },
      { title: 'Typical sleep patterns by age', source: 'WHO', body: 'Newborns sleep a lot in total but in short stretches, waking frequently to feed. Sleep gradually consolidates over the first months, with longer nighttime stretches often developing by 3\u20136 months.' },
      { title: 'Building a sleep routine', source: 'UNICEF', body: 'A simple, consistent wind-down routine can help signal that sleep is coming, even from a young age. Consistency matters more than any specific set of steps.' },
    ],
  },
  {
    id: 'hygiene', title: 'Hygiene', icon: '🧼', color: 'pink',
    articles: [
      { title: 'Bathing basics', source: 'WHO', body: 'Warm (not hot) water, a warm room, and full support for the head and neck are the essentials of safe newborn bathing. Mild, unscented products are gentler on sensitive skin.' },
      { title: 'Diaper area care', source: 'UNICEF', body: 'Regular changes, gentle front-to-back cleaning, and brief air-drying time help prevent diaper rash. A rash that persists despite good care is worth mentioning to a health worker.' },
      { title: 'Handwashing and infection prevention', source: 'WHO', body: 'Newborns have developing immune systems, so handwashing before handling or feeding a baby is one of the simplest, most effective ways to reduce infection risk.' },
      { title: 'Cord and skin care', source: 'WHO', body: 'General newborn skin care is about keeping things simple — gentle cleaning, avoiding unnecessary products, and watching for unusual redness or peeling that doesn\u2019t resolve.' },
    ],
  },
  {
    id: 'development', title: 'Development', icon: '🧸', color: 'peach',
    articles: [
      { title: 'Milestones by age (0\u20136 months)', source: 'WHO', body: 'Rough patterns many babies follow: social smiling by 2 months; better head control by 3\u20134 months; rolling and babbling by 4\u20136 months. These are general patterns, not a checklist — any specific concern is worth raising with a health worker.' },
      { title: 'Tummy time', source: 'WHO / UNICEF', body: 'Supervised time on the tummy while awake helps build neck, shoulder, and core strength, supporting later milestones like rolling. A few short sessions a day from the early weeks works well.' },
      { title: 'Bonding and everyday stimulation', source: 'UNICEF', body: 'Talking, singing, and eye contact during everyday care support early development — no special toys required. Responding to your baby\u2019s cues builds a sense of security over time.' },
    ],
  },
]
