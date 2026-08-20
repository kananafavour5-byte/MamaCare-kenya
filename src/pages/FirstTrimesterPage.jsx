import { useState } from 'react'
import { Link } from 'react-router-dom'
import guidePregnancy from '../assets/guide-pregnancy.jpg'
import SourceTag from '../components/shared/SourceTag.jsx'


const TOPICS = [
  {
    id: 'baby',
    icon: '👶',
    title: "Your baby's development",
    summary: 'How your baby grows and develops during the first 13 weeks.',
    content: (
      <>
        <p>
          The first trimester is a period of rapid development. Major body
          structures and organs begin developing while your baby changes from
          an embryo into a fetus.
        </p>

        <div className="mt-4 space-y-3">
          <div>
            <p className="font-semibold text-ink">Weeks 1–4</p>
            <p className="text-sm text-ink-soft mt-1">
              The pregnancy begins with fertilization and implantation. Early
              structures that will support your pregnancy begin developing.
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Weeks 5–8</p>
            <p className="text-sm text-ink-soft mt-1">
              The brain, spinal cord, heart and other major structures begin
              developing. Small limb and facial structures also begin to form.
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Weeks 9–13+6</p>
            <p className="text-sm text-ink-soft mt-1">
              Development continues rapidly. Fingers, toes, facial features
              and internal organs continue maturing.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-purple-mist p-4">
          <p className="text-sm font-semibold text-purple-deep">
            Development continues throughout pregnancy.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Pregnancy milestones are general patterns. Every pregnancy and
            every baby develops at their own pace.
          </p>
        </div>
      </>
    ),
    source: 'WHO / ACOG',
  },

  {
    id: 'changes',
    icon: '🤰',
    title: 'Changes you may notice',
    summary: 'Common physical and emotional changes during early pregnancy.',
    content: (
      <>
        <p>
          Your body begins adapting to pregnancy very early. Some women notice
          many changes while others notice very few.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Feeling tired or needing more rest</li>
          <li>Nausea or vomiting</li>
          <li>Tender or enlarged breasts</li>
          <li>Increased urination</li>
          <li>Bloating or heartburn</li>
          <li>Changes in appetite or food preferences</li>
          <li>Greater sensitivity to smells</li>
          <li>Emotional changes or mixed feelings</li>
        </ul>

        <div className="mt-4 rounded-2xl bg-pink-soft p-4">
          <p className="text-sm font-semibold text-purple-deep">
            Every pregnancy is different.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Having fewer symptoms does not automatically mean that something
            is wrong.
          </p>
        </div>
      </>
    ),
    source: 'ACOG',
  },

  {
    id: 'nausea',
    icon: '🤢',
    title: 'Nausea & vomiting',
    summary: "What's common, what may help, and when to seek care.",
    content: (
      <>
        <p>
          Nausea and vomiting are common during early pregnancy and can happen
          at any time of day. For many women, symptoms improve around the end
          of the first trimester or early in the second.
        </p>

        <h4 className="font-display text-base text-ink mt-5">
          Things that may help
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Try smaller meals more frequently.</li>
          <li>Notice and avoid foods or smells that trigger nausea.</li>
          <li>Drink fluids regularly.</li>
          <li>Rest when you can.</li>
          <li>Talk to a healthcare professional if symptoms are difficult to manage.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-alert-soft border border-alert/20 p-4">
          <p className="font-semibold text-alert-deep">
            Seek medical advice if:
          </p>

          <ul className="mt-2 space-y-1 text-sm text-alert-deep list-disc list-inside">
            <li>You cannot keep food or fluids down.</li>
            <li>You are losing weight.</li>
            <li>You are becoming dehydrated.</li>
            <li>You feel weak, dizzy or faint.</li>
          </ul>
        </div>
      </>
    ),
    source: 'ACOG',
  },

  {
    id: 'anc',
    icon: '🏥',
    title: 'Your first antenatal care visit',
    summary: 'When to go, what may happen, and what to bring.',
    content: (
      <>
        <h4 className="font-display text-base text-ink">
          When should I go?
        </h4>

        <p className="text-sm text-ink-soft mt-2">
          Arrange your first antenatal care contact as early as possible.
          WHO recommends the first contact during the first 12 weeks of
          pregnancy.
        </p>

        <h4 className="font-display text-base text-ink mt-5">
          What may happen?
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Pregnancy and medical history may be reviewed.</li>
          <li>Blood pressure, weight and other basic measurements may be checked.</li>
          <li>Blood and urine investigations may be offered.</li>
          <li>HIV, syphilis and hepatitis B screening may be offered.</li>
          <li>Blood group and Rh status may be checked.</li>
          <li>An ultrasound may be offered according to the care plan and availability.</li>
          <li>Your nutrition, supplements and other health needs can be discussed.</li>
        </ul>

        <h4 className="font-display text-base text-ink mt-5">
          What to bring
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          {[
            'First day of your last menstrual period, if known',
            'List of medicines and supplements',
            'Previous pregnancy information',
            'Known medical conditions',
            'Allergies',
            'Vaccination information',
            'Questions or concerns',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-purple">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'nutrition',
    icon: '🍎',
    title: 'Folic acid, iron & other nutrients',
    summary: 'Important nutrients and supplements during early pregnancy.',
    content: (
      <>
        <p>
          Pregnancy increases your nutritional needs. A varied diet and
          recommended supplements help support your health and your baby's
          development.
        </p>

        <div className="mt-4 rounded-2xl bg-mint-soft border border-mint/20 p-4">
          <p className="font-semibold text-ink">Folic acid</p>
          <p className="text-sm text-ink-soft mt-1">
            WHO recommends 400 micrograms of folic acid daily from before
            conception through the first 12 weeks to help prevent neural tube
            defects.
          </p>
        </div>

        <div className="mt-3 rounded-2xl bg-purple-mist p-4">
          <p className="font-semibold text-ink">Iron</p>
          <p className="text-sm text-ink-soft mt-1">
            Iron supplementation is part of antenatal care and helps prevent
            maternal anaemia. Take the supplement recommended by your
            healthcare provider.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          If you have questions about the type or dose of a supplement, ask
          your health worker rather than changing the dose yourself.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'food',
    icon: '🥗',
    title: 'Eating well & staying hydrated',
    summary: 'Simple nutrition habits for you and your developing baby.',
    content: (
      <>
        <p>
          Aim for variety rather than a special pregnancy diet. Choose
          nutritious foods from different food groups and drink fluids
          regularly.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {[
            'Vegetables and fruits',
            'Beans, peas and lentils',
            'Eggs, meat, fish or other protein foods',
            'Whole grains and staple foods',
            'Milk and other dairy where appropriate',
            'Nuts and seeds',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border border-purple-line px-4 py-3 text-sm text-ink-soft"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-soft mt-4">
          If nausea or vomiting makes eating difficult, speak with a
          healthcare professional for advice.
        </p>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'substances',
    icon: '🚫',
    title: 'Medicines, alcohol, smoking & other substances',
    summary: 'What to avoid and what to discuss with your healthcare provider.',
    content: (
      <>
        <p>
          Alcohol, tobacco/nicotine and recreational drugs can harm pregnancy.
          Avoid them during pregnancy.
        </p>

        <div className="mt-4 rounded-2xl bg-alert-soft border border-alert/20 p-4">
          <p className="font-semibold text-alert-deep">
            Do not stop prescribed medicine on your own.
          </p>
          <p className="text-sm text-alert-deep mt-1">
            Some medicines are important for your health. Tell your healthcare
            provider about every medicine, supplement or traditional remedy
            you use so they can advise you safely.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          ACOG recommends limiting caffeine to less than 200 mg per day during
          pregnancy.
        </p>
      </>
    ),
    source: 'ACOG / WHO',
  },

  {
    id: 'malaria',
    icon: '🦟',
    title: 'Protect yourself from malaria',
    summary: 'Important malaria prevention information for pregnancy in Kenya.',
    content: (
      <>
        <p>
          Malaria can be more serious during pregnancy. If you live in or
          travel to an area where malaria occurs, discuss prevention with your
          healthcare provider.
        </p>

        <div className="mt-4 rounded-2xl bg-mint-soft border border-mint/20 p-4">
          <p className="font-semibold text-ink">
            Sleep under an insecticide-treated net.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            WHO recommends insecticide-treated nets for pregnant women in
            malaria-endemic areas.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          Malaria preventive medicine during pregnancy is given according to
          national guidance, malaria transmission patterns and pregnancy
          timing. Your healthcare provider can tell you what is appropriate
          for you.
        </p>

        <div className="mt-4 rounded-2xl bg-purple-mist p-4">
          <p className="font-semibold text-purple-deep">
            Fever during pregnancy should not be ignored.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Seek medical care promptly if you develop fever or feel seriously
            unwell.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'wellbeing',
    icon: '🧘',
    title: 'Physical activity, rest & emotional wellbeing',
    summary: 'Look after your body and mind during this major transition.',
    content: (
      <>
        <p>
          Pregnancy can bring excitement, tiredness, worry and many other
          emotions. Looking after your physical and emotional wellbeing is
          part of healthy pregnancy care.
        </p>

        <h4 className="font-display text-base text-ink mt-5">
          Everyday wellbeing
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Rest when you need to.</li>
          <li>Stay physically active when it is appropriate for your pregnancy.</li>
          <li>Eat regularly and drink fluids.</li>
          <li>Talk to someone you trust when you need support.</li>
          <li>Tell your healthcare provider if you feel persistently anxious, low or overwhelmed.</li>
        </ul>

        <div className="mt-4 rounded-2xl bg-pink-soft p-4">
          <p className="font-semibold text-purple-deep">
            You don't have to handle everything alone.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Asking for emotional or practical support is part of taking care
            of yourself.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'warning',
    icon: '🚨',
    title: 'Warning signs',
    summary: 'Symptoms that should never be ignored.',
    content: (
      <>
        <p className="font-semibold text-alert-deep">
          Seek urgent medical care if you have:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-alert-deep">
          {[
            'Heavy or concerning vaginal bleeding',
            'Severe abdominal or pelvic pain',
            'One-sided pelvic pain',
            'Shoulder pain together with abdominal or pelvic pain',
            'Dizziness, weakness or fainting',
            'Severe vomiting and inability to keep fluids down',
            'Fever or feeling seriously unwell',
            'Convulsions or loss of consciousness',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl bg-white border border-alert/20 p-4">
          <p className="font-semibold text-alert-deep">
            Don't wait for your next appointment.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Some of these symptoms can indicate a serious pregnancy
            complication and need prompt assessment.
          </p>
        </div>
      </>
    ),
    source: 'Kenya Ministry of Health / ACOG',
  },

  {
    id: 'questions',
    icon: '❓',
    title: 'Questions to ask your health worker',
    summary: 'Take these questions with you to your first visit.',
    content: (
      <>
        <p className="text-sm text-ink-soft">
          You can save or screenshot this list before your appointment.
        </p>

        <div className="mt-4 space-y-2">
          {[
            'How many weeks pregnant am I?',
            'What is my estimated due date?',
            'Which tests do I need?',
            'Do I need an ultrasound?',
            'What supplements should I take?',
            'Are my medicines safe during pregnancy?',
            'Do I need malaria prevention?',
            'Are my vaccinations up to date?',
            'Are there foods or activities I should avoid?',
            'When should I return for my next ANC contact?',
            'What warning signs should make me seek care?',
          ].map((question) => (
            <div
              key={question}
              className="flex gap-3 rounded-xl bg-white border border-purple-line px-4 py-3 text-sm text-ink-soft"
            >
              <span className="text-purple font-semibold">✓</span>
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
          ? 'border-purple/30 shadow-sm'
          : 'border-purple-line'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left px-4 sm:px-5 py-4 flex items-center gap-3"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-mist text-xl">
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
          className={`text-purple font-semibold transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
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

export default function FirstTrimesterPage() {
  const [openTopic, setOpenTopic] = useState('baby')

  return (
    <div className="pb-12">
      {/* Back navigation */}
      <div className="mb-5">
        <Link
          to="/journey"
          className="text-sm font-semibold text-purple-deep hover:text-purple transition-colors"
        >
          ← Back to Journey
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] border border-purple-line bg-purple-mist/60">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] items-stretch">
          <div className="relative z-10 p-6 sm:p-9 lg:p-12">
            <span className="inline-flex rounded-full bg-pink-soft text-pink px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
              Weeks 0–13+6
            </span>

            <h1 className="font-display text-4xl sm:text-5xl text-purple-deep font-semibold mt-4">
              First Trimester
            </h1>

            <p className="text-lg text-ink-soft mt-3">
              The beginning of your pregnancy journey.
            </p>

            <p className="text-sm sm:text-base text-ink-soft mt-5 max-w-xl leading-7">
              During the first trimester, your baby's major organs and body
              systems begin to develop while your body starts adapting to
              pregnancy.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/dashboard"
                className="rounded-full bg-purple text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-purple-deep transition-colors"
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

            <div className="absolute inset-0 bg-gradient-to-r from-purple-mist via-purple-mist/30 to-transparent lg:from-purple-mist lg:via-transparent" />
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="mt-6 rounded-[24px] border border-purple-line bg-white p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl text-purple-deep font-semibold">
              In this section
            </h2>
            <p className="text-sm text-ink-soft mt-1">
              Jump to the information you need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
          {TOPICS.slice(0, 6).map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => {
                setOpenTopic(topic.id)
                document
                  .getElementById(`topic-${topic.id}`)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="rounded-2xl bg-purple-mist/60 border border-purple-line px-3 py-4 text-center hover:border-purple/30 hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl block">{topic.icon}</span>
              <span className="block text-xs font-semibold text-purple-deep mt-2">
                {topic.title.replace("Your baby's development", 'Baby development')}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="mt-8">
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-wide text-purple">
            First trimester guide
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold mt-1">
            What you need to know
          </h2>

          <p className="text-sm text-ink-soft mt-2">
            Open any topic to learn more. You can take your time and come back
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

      {/* Help panel */}
      <section className="mt-8 rounded-[24px] bg-pink-soft border border-pink/20 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <h2 className="font-display text-xl text-purple-deep font-semibold">
            Having a concern or seeing a warning sign?
          </h2>

          <p className="text-sm text-ink-soft mt-1">
            Don't wait. Get medical help if something feels seriously wrong.
          </p>
        </div>

        <Link
          to="/get-help"
          className="shrink-0 rounded-full bg-alert text-white px-5 py-2.5 text-sm font-semibold hover:bg-alert-deep transition-colors"
        >
          🚨 Get Help Now
        </Link>
      </section>

      {/* Quick facts */}
      <section className="mt-6 rounded-[24px] bg-purple-mist/60 border border-purple-line p-5 sm:p-7">
        <h2 className="font-display text-xl text-purple-deep font-semibold">
          Quick facts — First Trimester
        </h2>

        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          <div className="rounded-2xl bg-white p-4 border border-white">
            <p className="font-semibold text-ink">Start ANC early</p>
            <p className="text-sm text-ink-soft mt-1">
              WHO recommends the first antenatal contact during the first 12
              weeks.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-white">
            <p className="font-semibold text-ink">
              Major development happens early
            </p>
            <p className="text-sm text-ink-soft mt-1">
              Your baby's major organs and body structures begin developing
              during these early weeks.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-white">
            <p className="font-semibold text-ink">Folic acid matters</p>
            <p className="text-sm text-ink-soft mt-1">
              WHO recommends 400 micrograms of folic acid daily through the
              first 12 weeks.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-white">
            <p className="font-semibold text-ink">Everyone is different</p>
            <p className="text-sm text-ink-soft mt-1">
              Pregnancy symptoms and experiences vary from person to person.
            </p>
          </div>
        </div>
      </section>

      {/* Medical disclaimer */}
      <section className="mt-6 rounded-[20px] bg-white border border-purple-line p-5">
        <p className="text-sm font-semibold text-purple-deep">
          Important
        </p>

        <p className="text-sm text-ink-soft mt-1 leading-relaxed">
          MamaCare provides general educational information. It does not
          replace advice, diagnosis or treatment from a qualified healthcare
          professional. If you have concerns about your pregnancy, speak with
          your midwife, nurse, clinical officer or doctor.
        </p>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 mt-7">
        <Link
          to="/journey"
          className="rounded-full border border-purple-line text-purple-deep px-4 py-2 text-sm font-semibold hover:border-purple transition-colors"
        >
          ← Back to Journey
        </Link>

        <Link
          to="/journey"
          className="rounded-full bg-purple text-white px-4 py-2 text-sm font-semibold hover:bg-purple-deep transition-colors"
        >
          Journey overview →
        </Link>
      </div>
    </div>
  )
}