import { useState } from 'react'
import { Link } from 'react-router-dom'
import guidePregnancy from '../assets/guide-pregnancy.jpg'
import SourceTag from '../components/shared/SourceTag.jsx'

const TOPICS = [
  {
    id: 'baby',
    icon: '👶',
    title: "Your baby's development",
    summary: 'How your baby grows and matures during weeks 28–40+.',
    content: (
      <>
        <p>
          The third trimester is a period of continued growth and maturation.
          Your baby's brain, lungs and other organs continue developing while
          your baby gains weight and prepares for life after birth.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-blue-50 p-4">
            <p className="font-semibold text-ink">Weeks 28–31</p>
            <p className="text-sm text-ink-soft mt-1">
              Your baby continues gaining weight and growing rapidly. Brain
              development and maturation of the lungs and other organs continue.
            </p>
          </div>

          <div className="rounded-2xl bg-sky-50 p-4">
            <p className="font-semibold text-ink">Weeks 32–35</p>
            <p className="text-sm text-ink-soft mt-1">
              Your baby continues to grow and mature while movements may become
              stronger and easier for you to recognize.
            </p>
          </div>

          <div className="rounded-2xl bg-indigo-50 p-4">
            <p className="font-semibold text-ink">Weeks 36–40+</p>
            <p className="text-sm text-ink-soft mt-1">
              Your baby continues preparing for birth. Growth and maturation
              continue while your body prepares for labour.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white border border-blue-100 p-4">
          <p className="font-semibold text-blue-800">
            Pregnancy milestones are general patterns.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Babies develop at different rates, so individual timing can vary.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'changes',
    icon: '🤰',
    title: 'Changes you may notice',
    summary: 'Common physical and emotional changes later in pregnancy.',
    content: (
      <>
        <p>
          As your baby grows, your body continues adapting to pregnancy. Some
          symptoms become more noticeable during the final months.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Backache or pelvic discomfort</li>
          <li>Heartburn or indigestion</li>
          <li>More frequent urination</li>
          <li>Difficulty finding a comfortable sleeping position</li>
          <li>Increased tiredness</li>
          <li>Mild swelling of the feet or ankles</li>
          <li>Braxton Hicks contractions</li>
          <li>Shortness of breath as the uterus grows</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-blue-50 p-4">
          <p className="font-semibold text-blue-800">
            Severe or sudden symptoms are different.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Do not assume a severe symptom is simply part of pregnancy. Seek
            professional assessment when something feels seriously wrong.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'movement',
    icon: '👣',
    title: 'Your baby\'s movements',
    summary: 'Know your baby\'s usual pattern and act if movements decrease.',
    content: (
      <>
        <p>
          By the third trimester, you are usually becoming familiar with your
          baby's movements. What matters is paying attention to your baby's
          usual pattern.
        </p>

        <div className="mt-5 rounded-2xl bg-blue-50 p-4">
          <p className="font-semibold text-blue-800">
            Reduced or changed movement needs attention.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            If you notice that your baby is moving less than usual or the
            pattern has changed significantly, contact your maternity provider
            or seek urgent assessment.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          WHO does not recommend routine daily fetal-movement counting using
          fixed "count-to-ten" charts for every healthy pregnancy. Instead,
          women should be aware of fetal movements and report reduced movement.
        </p>
      </>
    ),
    source: 'WHO 2025 maternal health recommendations',
  },

  {
    id: 'anc',
    icon: '🏥',
    title: 'Antenatal care in the third trimester',
    summary: 'Why regular ANC becomes especially important now.',
    content: (
      <>
        <p>
          Continue attending your scheduled antenatal contacts even when you
          feel well. The third trimester provides important opportunities to
          monitor maternal and fetal wellbeing and identify complications.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Blood pressure and maternal wellbeing</li>
          <li>Assessment of fetal growth and wellbeing</li>
          <li>Discussion of fetal movements</li>
          <li>Screening or follow-up for pregnancy complications</li>
          <li>Nutrition and supplement review</li>
          <li>Birth and emergency preparedness</li>
          <li>Planning for the postpartum period</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-indigo-50 p-4">
          <p className="font-semibold text-indigo-800">
            Keep every scheduled contact.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Some pregnancy complications may have few or no symptoms at first,
            which is why routine assessment matters.
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
    summary: 'Supporting your health and your baby\'s continued growth.',
    content: (
      <>
        <p>
          Continue eating a varied and nutritious diet throughout the third
          trimester. Pregnancy increases the need for several nutrients and
          your healthcare provider can advise you about supplements.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          {[
            'Vegetables and fruits',
            'Beans, peas and lentils',
            'Eggs and other protein foods',
            'Whole grains and staple foods',
            'Milk or appropriate dairy foods',
            'Nuts and seeds',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border border-blue-100 px-4 py-3 text-sm text-ink-soft"
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-5">
          Continue iron and folic acid supplementation as recommended by your
          healthcare provider. If side effects make supplements difficult to
          take, ask for advice rather than stopping them yourself.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'pre-eclampsia',
    icon: '🩺',
    title: 'Blood pressure & pre-eclampsia',
    summary: 'Why blood pressure checks matter after 20 weeks.',
    content: (
      <>
        <p>
          High blood pressure during pregnancy can sometimes develop without
          obvious symptoms. This is one reason blood pressure is checked during
          antenatal care.
        </p>

        <div className="mt-5 rounded-2xl bg-alert-soft border border-alert/20 p-4">
          <p className="font-semibold text-alert-deep">
            Seek urgent medical attention for symptoms such as:
          </p>

          <ul className="mt-2 space-y-2 text-sm text-alert-deep">
            <li>• Severe headache</li>
            <li>• Blurred vision or other visual changes</li>
            <li>• Severe upper abdominal pain</li>
            <li>• Sudden swelling of the face or hands</li>
            <li>• Difficulty breathing</li>
            <li>• Feeling seriously unwell</li>
          </ul>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          These symptoms can have different causes, but they should not be
          ignored during pregnancy.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'birth',
    icon: '👜',
    title: 'Preparing for birth',
    summary: 'Make practical plans before labour begins.',
    content: (
      <>
        <p>
          The third trimester is a good time to make practical arrangements
          for labour, birth and the first days with your baby.
        </p>

        <div className="mt-5 space-y-3">
          {[
            'Know where you plan to give birth.',
            'Arrange reliable transport.',
            'Identify a person who can support you.',
            'Keep your maternity records and identification available.',
            'Prepare essential items for yourself and your baby.',
            'Discuss your birth preferences with your healthcare team.',
            'Know where to seek emergency care.',
            'Make a plan for reaching the facility at any time of day or night.',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-blue-50 px-4 py-3 text-sm text-ink-soft"
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
    id: 'labour',
    icon: '⏳',
    title: 'Knowing when labour may be starting',
    summary: 'Understanding common signs and when to contact your provider.',
    content: (
      <>
        <p>
          Labour can begin differently from one person to another. Possible
          signs include regular contractions that become stronger and closer
          together, changes in vaginal discharge and rupture of the membranes.
        </p>

        <div className="mt-5 rounded-2xl bg-blue-50 p-4">
          <p className="font-semibold text-blue-800">
            Have a clear plan for contacting your maternity team.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Your provider can tell you when they want you to come to the
            facility based on your pregnancy and local maternity guidance.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          If you have heavy bleeding, severe pain, reduced fetal movement,
          difficulty breathing or another emergency warning sign, seek urgent
          medical care rather than waiting for labour to progress.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'questions',
    icon: '❓',
    title: 'Questions for your health worker',
    summary: 'Useful questions to take to your next ANC contact.',
    content: (
      <>
        <div className="space-y-2">
          {[
            'Is my pregnancy progressing normally?',
            "How is my baby's growth?",
            'Is my blood pressure normal?',
            'Are there any tests or follow-ups I still need?',
            'What should I do if my baby moves less than usual?',
            'Where should I go when labour starts?',
            'When should I come to the facility?',
            'What should I pack for myself and my baby?',
            'What warning signs should I watch for?',
            'What should I know about breastfeeding before birth?',
          ].map((question) => (
            <div
              key={question}
              className="flex gap-3 rounded-xl bg-white border border-blue-100 px-4 py-3 text-sm text-ink-soft"
            >
              <span className="text-blue-600 font-semibold">✓</span>
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
          ? 'border-blue-300 shadow-sm'
          : 'border-purple-line'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left px-4 sm:px-5 py-4 flex items-center gap-3"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl">
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
          className={`text-blue-600 font-semibold transition-transform ${
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

export default function ThirdTrimesterPage() {
  const [openTopic, setOpenTopic] = useState('baby')

  return (
    <div className="pb-12">

      <div className="mb-5">
        <Link
          to="/journey"
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          ← Back to Journey
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] border border-blue-200 bg-[#f3f8ff]">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] items-stretch">
          <div className="relative z-10 p-6 sm:p-9 lg:p-12">
            <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
              Weeks 28–40+
            </span>

            <h1 className="font-display text-4xl sm:text-5xl text-blue-900 font-semibold mt-4">
              Third Trimester
            </h1>

            <p className="text-lg text-ink-soft mt-3">
              Growing, preparing & getting ready for birth
            </p>

            <p className="text-sm sm:text-base text-ink-soft mt-5 max-w-xl leading-7">
              Your baby continues growing and maturing while your body prepares
              for labour and birth. Regular antenatal care and knowing warning
              signs become especially important during these final weeks.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/dashboard"
                className="rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
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
              alt="Pregnancy care"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f3f8ff] via-[#f3f8ff]/20 to-transparent lg:from-[#f3f8ff] lg:via-transparent" />
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="mt-6 rounded-[24px] border border-blue-200 bg-[#f8fbff] p-5 sm:p-6">
        <h2 className="font-display text-xl text-blue-900 font-semibold">
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
              className="rounded-2xl bg-white border border-blue-100 px-3 py-4 text-center hover:border-blue-300 hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl block">{topic.icon}</span>

              <span className="block text-xs font-semibold text-blue-800 mt-2">
                {topic.title
                  .replace("Your baby's development", 'Baby development')
                  .replace('Changes you may notice', 'Body changes')
                  .replace("Your baby's movements", 'Baby movement')
                  .replace('Nutrition & supplements', 'Nutrition')
                  .replace('Blood pressure & pre-eclampsia', 'Blood pressure')
                  .replace('Antenatal care in the third trimester', 'ANC')}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="mt-8">
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-wide text-blue-600">
            Third trimester guide
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-blue-900 font-semibold mt-1">
            What you need to know
          </h2>

          <p className="text-sm text-ink-soft mt-2">
            Click on each topic to learn more. Take your time and come back
            whenever you need.
          </p>
        </div>

        <div className="space-y-3">
          {TOPICS.map((topic) => (
            <div key={topic.id} id={`topic-${topic.id}`}>
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
        <section className="rounded-[24px] bg-mint-soft border border-mint/20 p-5 sm:p-7">
          <h2 className="font-display text-xl text-blue-900 font-semibold">
            🌿 Preparing for the final weeks
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            {[
              'Attend your recommended antenatal contacts.',
              'Take your prescribed supplements.',
              'Eat a varied, nutritious diet.',
              'Drink fluids regularly.',
              'Rest and accept support when you need it.',
              'Know your baby\'s usual movement pattern.',
              'Prepare transport and your birth plan.',
              'Keep your maternity records accessible.',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-mint">✓</span>
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
              'Severe or persistent abdominal pain',
              'Severe headache or vision changes',
              'Sudden swelling of the face or hands',
              'Fluid leaking from the vagina',
              'Reduced or changed fetal movement',
              'Difficulty breathing or chest pain',
              'Fever or feeling seriously unwell',
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
      <section className="mt-6 rounded-[24px] bg-blue-50 border border-blue-100 p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl text-blue-900 font-semibold">
              ❓ Questions for your health worker?
            </h2>

            <p className="text-sm text-ink-soft mt-1">
              Write down your questions before your next antenatal contact.
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
            className="shrink-0 rounded-full border border-blue-300 text-blue-800 px-4 py-2 text-sm font-semibold hover:bg-white transition-colors"
          >
            View helpful questions →
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-6 rounded-[20px] bg-white border border-blue-100 p-5">
        <p className="text-sm font-semibold text-blue-900">
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
          to="/journey/second-trimester"
          className="rounded-full border border-purple-line text-purple-deep px-4 py-2 text-sm font-semibold hover:border-purple transition-colors"
        >
          ← Second Trimester
        </Link>

        <Link
          to="/journey/antenatal-care"
          className="rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Antenatal Care →
        </Link>
      </div>
    </div>
  )
}