import { useState } from 'react'
import { Link } from 'react-router-dom'
import guidePregnancy from '../assets/guide-pregnancy.jpg'
import SourceTag from '../components/shared/SourceTag.jsx'

const TOPICS = [
  {
    id: 'what-is-anc',
    icon: '🏥',
    title: 'What is antenatal care?',
    summary: 'Understanding ANC and why it matters during pregnancy.',
    content: (
      <>
        <p>
          Antenatal care, commonly called ANC, is care provided during
          pregnancy to support the health and wellbeing of the mother and baby.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          {[
            'Monitor maternal health',
            'Monitor fetal wellbeing',
            'Prevent health problems',
            'Screen for complications',
            'Provide health education',
            'Prepare for birth',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-pink-50 border border-pink-100 px-4 py-3 text-sm text-ink-soft"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-5">
          Good ANC is not only about finding problems. It should also provide
          respectful, person-centred support throughout pregnancy.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'when-start',
    icon: '⏰',
    title: 'When should ANC start?',
    summary: 'Why early contact with a healthcare provider matters.',
    content: (
      <>
        <p>
          WHO recommends that the first antenatal contact take place during the
          first 12 weeks of pregnancy.
        </p>

        <div className="mt-5 rounded-2xl bg-pink-50 p-4">
          <p className="font-semibold text-pink-700">
            Start as early as possible.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Early ANC creates an opportunity to establish your pregnancy
            history, assess your health, provide preventive care and plan
            appropriate follow-up.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          If you have not started ANC yet, do not wait for the "perfect" week.
          Contact a qualified healthcare provider.
        </p>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'eight-contacts',
    icon: '📅',
    title: 'The 8-contact model',
    summary: 'The WHO-recommended minimum pattern of antenatal contacts.',
    content: (
      <>
        <p>
          WHO recommends a minimum of eight antenatal contacts during
          pregnancy. The model increases opportunities to monitor maternal and
          fetal wellbeing and identify problems early.
        </p>

        <div className="mt-5 space-y-2">
          {[
            ['1', 'First trimester', 'Up to 12 weeks'],
            ['2', 'Second trimester', 'Around 20 weeks'],
            ['3', 'Second trimester', 'Around 26 weeks'],
            ['4', 'Third trimester', 'Around 30 weeks'],
            ['5', 'Third trimester', 'Around 34 weeks'],
            ['6', 'Third trimester', 'Around 36 weeks'],
            ['7', 'Third trimester', 'Around 38 weeks'],
            ['8', 'Third trimester', 'Around 40 weeks'],
          ].map(([number, stage, timing]) => (
            <div
              key={number}
              className="flex items-center gap-3 rounded-xl bg-pink-50 px-4 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white text-sm font-bold">
                {number}
              </span>

              <div>
                <p className="font-semibold text-ink">{stage}</p>
                <p className="text-xs text-ink-soft">{timing}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-ink-soft mt-4">
          The timing can be adapted to an individual's needs and local
          healthcare context.
        </p>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'what-happens',
    icon: '🩺',
    title: 'What happens during ANC?',
    summary: 'The checks, discussions and care you may receive.',
    content: (
      <>
        <p>
          ANC contacts can include maternal and fetal assessment, preventive
          care, screening, counselling and discussion of any concerns you have.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          {[
            'Blood pressure',
            'Weight and general health',
            'Pregnancy history',
            'Fetal growth and wellbeing',
            'Blood tests',
            'Urine assessment',
            'Nutrition counselling',
            'Supplement review',
            'Vaccination',
            'Birth preparedness',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border border-pink-100 px-4 py-3 text-sm text-ink-soft"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-5">
          The exact assessments depend on your stage of pregnancy, health
          history, risk factors and local clinical guidance.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'tests',
    icon: '🧪',
    title: 'Tests & screening',
    summary: 'Why your provider may recommend pregnancy tests.',
    content: (
      <>
        <p>
          Screening and diagnostic tests can help identify conditions that may
          affect pregnancy and help your healthcare team decide whether you
          need additional care.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Blood group and Rh status</li>
          <li>Haemoglobin and assessment for anaemia</li>
          <li>HIV, syphilis and hepatitis B screening</li>
          <li>Urine testing when indicated</li>
          <li>Blood-pressure assessment</li>
          <li>Pre-eclampsia assessment after 20 weeks</li>
          <li>Gestational diabetes testing around 24–28 weeks</li>
          <li>Ultrasound when recommended</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-pink-50 p-4">
          <p className="font-semibold text-pink-700">
            Ask what each test is for.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Your healthcare provider should explain recommended tests and what
            the results mean for your care.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'nutrition',
    icon: '🥗',
    title: 'Nutrition & supplements',
    summary: 'Supporting maternal health throughout pregnancy.',
    content: (
      <>
        <p>
          ANC provides opportunities to discuss healthy eating, nutritional
          needs and recommended supplements.
        </p>

        <div className="mt-5 rounded-2xl bg-mint-soft p-4">
          <p className="font-semibold text-ink">
            Iron and folic acid
          </p>

          <p className="text-sm text-ink-soft mt-1">
            WHO recommends daily iron and folic acid supplementation during
            pregnancy. Your provider can advise you about the appropriate
            preparation and how to manage side effects.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          A varied diet remains important alongside any supplements prescribed
          or recommended by your healthcare provider.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'malaria',
    icon: '🦟',
    title: 'Malaria prevention',
    summary: 'Protecting pregnancy where malaria is a risk.',
    content: (
      <>
        <p>
          Malaria in pregnancy can cause serious complications. In malaria-risk
          areas, ANC provides opportunities for prevention and appropriate
          treatment.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-mint-soft p-4">
            <p className="font-semibold text-ink">
              Mosquito-net protection
            </p>
            <p className="text-sm text-ink-soft mt-1">
              Sleeping under a recommended insecticide-treated mosquito net is
              an important malaria-prevention measure.
            </p>
          </div>

          <div className="rounded-2xl bg-pink-50 p-4">
            <p className="font-semibold text-pink-700">
              Preventive treatment
            </p>
            <p className="text-sm text-ink-soft mt-1">
              In areas where intermittent preventive treatment is recommended,
              your ANC provider can advise you about the appropriate schedule.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'birth-preparation',
    icon: '👜',
    title: 'Birth & emergency preparedness',
    summary: 'Planning ahead for labour, birth and emergencies.',
    content: (
      <>
        <p>
          Birth preparedness helps families think through practical arrangements
          before labour begins and reduces avoidable delays when care is needed.
        </p>

        <div className="mt-5 space-y-2">
          {[
            'Know your planned place of birth.',
            'Plan reliable transport.',
            'Identify someone who can support you.',
            'Keep maternity records accessible.',
            'Prepare essential items for yourself and your baby.',
            'Know how to reach your maternity facility.',
            'Understand the warning signs that require urgent care.',
            'Discuss what to do if an emergency develops.',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-pink-50 px-4 py-3 text-sm text-ink-soft"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'questions',
    icon: '❓',
    title: 'Questions for your health worker',
    summary: 'Questions to take with you to your next ANC contact.',
    content: (
      <>
        <div className="space-y-2">
          {[
            'Is my pregnancy progressing normally?',
            'Are my blood pressure and other checks normal?',
            'Do I have signs of anaemia?',
            'Which tests do I still need?',
            'Are my supplements appropriate?',
            'Which vaccinations should I receive?',
            'Do I need malaria prevention?',
            'When is my next ANC contact?',
            'Where should I give birth?',
            'What warning signs should make me seek urgent care?',
            'What should I do when labour starts?',
          ].map((question) => (
            <div
              key={question}
              className="flex gap-3 rounded-xl bg-white border border-pink-100 px-4 py-3 text-sm text-ink-soft"
            >
              <span className="text-pink-500 font-semibold">✓</span>
              <span>{question}</span>
            </div>
          ))}
        </div>
      </>
    ),
    source: 'MamaCare Kenya educational checklist',
  },
]

function TopicSection({ topic, isOpen, onToggle }) {
  return (
    <section
      className={`rounded-[20px] border overflow-hidden transition-all ${
        isOpen
          ? 'border-pink-300 shadow-sm'
          : 'border-purple-line'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left px-4 sm:px-5 py-4 flex items-center gap-3"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-50 text-xl">
          {topic.icon}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display font-semibold text-ink">
            {topic.title}
          </span>

          <span className="block text-xs text-ink-soft mt-0.5">
            {topic.summary}
          </span>
        </span>

        <span
          className={`text-pink-600 font-semibold transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ↓
        </span>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 pt-1">
          <div className="rounded-2xl bg-white/80 p-1 text-sm leading-relaxed text-ink-soft">
            {topic.content}
          </div>

          <div className="mt-4">
            <SourceTag source={topic.source} />
          </div>
        </div>
      )}
    </section>
  )
}

export default function AntenatalCarePage() {
  const [openTopic, setOpenTopic] = useState('what-is-anc')

  return (
    <div className="pb-12">

      {/* Back navigation */}
      <div className="mb-5">
        <Link
          to="/journey"
          className="text-sm font-semibold text-pink-700 hover:text-pink-900 transition-colors"
        >
          ← Back to Journey
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] border border-pink-200 bg-[#fff7fa]">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] items-stretch">
          <div className="relative z-10 p-6 sm:p-9 lg:p-12">
            <span className="inline-flex rounded-full bg-pink-100 text-pink-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
              Care throughout pregnancy
            </span>

            <h1 className="font-display text-4xl sm:text-5xl text-pink-800 font-semibold mt-4">
              Antenatal Care
            </h1>

            <p className="text-lg text-ink-soft mt-3">
              Good care for you and your baby
            </p>

            <p className="text-sm sm:text-base text-ink-soft mt-5 max-w-xl leading-7">
              Antenatal care supports your health and your baby's wellbeing
              throughout pregnancy. It provides opportunities for assessment,
              prevention, screening, education and preparation for birth.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/dashboard"
                className="rounded-full bg-pink-500 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-pink-600 transition-colors"
              >
                📊 Track my pregnancy
              </Link>

              <Link
                to="/get-help"
                className="rounded-full border border-alert/40 text-alert-deep px-5 py-2.5 text-sm font-semibold hover:bg-alert-soft transition-colors"
              >
                🚨 Get Help
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:min-h-[390px]">
            <img
              src={guidePregnancy}
              alt="Antenatal pregnancy care"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#fff7fa] via-[#fff7fa]/20 to-transparent lg:from-[#fff7fa] lg:via-transparent" />
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="mt-6 rounded-[24px] border border-pink-200 bg-[#fff9fb] p-5 sm:p-6">
        <h2 className="font-display text-xl text-pink-800 font-semibold">
          In this section
        </h2>

        <p className="text-sm text-ink-soft mt-1">
          Jump to the information you need.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
          {TOPICS.slice(0, 6).map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => {
                setOpenTopic(topic.id)

                document
                  .getElementById(`topic-${topic.id}`)
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
              }}
              className="rounded-2xl bg-white border border-pink-100 px-3 py-4 text-center hover:border-pink-300 hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl block">
                {topic.icon}
              </span>

              <span className="block text-xs font-semibold text-pink-700 mt-2">
                {topic.title
                  .replace('What is antenatal care?', 'What is ANC?')
                  .replace('When should ANC start?', 'When to start')
                  .replace('The 8-contact model', '8 ANC contacts')
                  .replace('What happens during ANC?', 'ANC visits')
                  .replace('Tests & screening', 'Tests')
                  .replace('Nutrition & supplements', 'Nutrition')}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="mt-8">
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-wide text-pink-600">
            Antenatal care guide
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-pink-800 font-semibold mt-1">
            Understanding antenatal care
          </h2>

          <p className="text-sm text-ink-soft mt-2">
            Click on each topic to learn more. Take your time and come back
            whenever you need.
          </p>
        </div>

        <div className="space-y-3">
          {TOPICS.map((topic) => (
            <div
              key={topic.id}
              id={`topic-${topic.id}`}
            >
              <TopicSection
                topic={topic}
                isOpen={openTopic === topic.id}
                onToggle={() =>
                  setOpenTopic((current) =>
                    current === topic.id ? null : topic.id
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* Support panels */}
      <div className="grid lg:grid-cols-2 gap-5 mt-8">

        <section className="rounded-[24px] bg-pink-soft border border-pink/20 p-5 sm:p-7">
          <h2 className="font-display text-xl text-pink-800 font-semibold">
            🌸 Making the most of ANC
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            {[
              'Start ANC early.',
              'Attend your scheduled contacts.',
              'Bring your maternity records.',
              'Take prescribed supplements.',
              'Ask questions when something is unclear.',
              'Tell your provider about medicines you take.',
              'Discuss birth and emergency plans.',
              'Seek care promptly when warning signs appear.',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-pink-500">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[24px] bg-alert-soft border border-alert/20 p-5 sm:p-7">
          <h2 className="font-display text-xl text-alert-deep font-semibold">
            🚨 Warning signs
          </h2>

          <p className="text-sm text-ink-soft mt-2">
            Seek urgent medical care if you experience serious symptoms.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-alert-deep">
            {[
              'Heavy vaginal bleeding',
              'Severe abdominal pain',
              'Severe headache or vision changes',
              'Sudden swelling of the face or hands',
              'Convulsions or loss of consciousness',
              'Difficulty breathing or chest pain',
              'Fever or feeling seriously unwell',
              'Reduced fetal movement later in pregnancy',
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>

          <Link
            to="/get-help"
            className="inline-flex mt-5 rounded-full bg-alert text-white px-5 py-2.5 text-sm font-semibold hover:bg-alert-deep transition-colors"
          >
            🚨 Get Help Now
          </Link>
        </section>
      </div>

      {/* Questions */}
      <section className="mt-6 rounded-[24px] bg-pink-50 border border-pink-100 p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl text-pink-800 font-semibold">
              ❓ Questions for your health worker?
            </h2>

            <p className="text-sm text-ink-soft mt-1">
              Write down your questions before your next ANC contact.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpenTopic('questions')

              document
                .getElementById('topic-questions')
                ?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
            }}
            className="shrink-0 rounded-full border border-pink-300 text-pink-700 px-4 py-2 text-sm font-semibold hover:bg-white transition-colors"
          >
            View helpful questions →
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-6 rounded-[20px] bg-white border border-pink-100 p-5">
        <p className="text-sm font-semibold text-pink-800">
          Important
        </p>

        <p className="text-sm text-ink-soft mt-1 leading-relaxed">
          MamaCare provides general educational information. It does not replace
          advice, diagnosis or treatment from a qualified healthcare
          professional. If you have concerns about your pregnancy, speak with
          your midwife, nurse, clinical officer or doctor.
        </p>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 mt-7">
        <Link
          to="/journey/third-trimester"
          className="rounded-full border border-purple-line text-purple-deep px-4 py-2 text-sm font-semibold hover:border-purple transition-colors"
        >
          ← Third Trimester
        </Link>

        <Link
          to="/journey"
          className="rounded-full bg-pink-500 text-white px-4 py-2 text-sm font-semibold hover:bg-pink-600 transition-colors"
        >
          Journey overview →
        </Link>
      </div>
    </div>
  )
}