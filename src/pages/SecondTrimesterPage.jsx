import { useState } from 'react'
import { Link } from 'react-router-dom'
import guidePregnancy from '../assets/guide-pregnancy.jpg'
import SourceTag from '../components/shared/SourceTag.jsx'

const TOPICS = [
  {
    id: 'baby',
    icon: '👶',
    title: "Your baby's development",
    summary: 'How your baby grows, moves and develops during weeks 14–27+6.',
    content: (
      <>
        <p>
          The second trimester is a period of rapid growth and continued
          development. Your baby's organs continue to mature, bones strengthen,
          and movement becomes increasingly noticeable.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-peach-soft p-4">
            <p className="font-semibold text-ink">Weeks 14–16</p>
            <p className="text-sm text-ink-soft mt-1">
              Your baby continues growing and developing coordinated movements.
              You may not feel those movements yet.
            </p>
          </div>

          <div className="rounded-2xl bg-pink-soft p-4">
            <p className="font-semibold text-ink">Weeks 17–20</p>
            <p className="text-sm text-ink-soft mt-1">
              Some mothers begin noticing the baby's movements during this
              period. Your baby continues developing hearing and other senses.
            </p>
          </div>

          <div className="rounded-2xl bg-mint-soft p-4">
            <p className="font-semibold text-ink">Weeks 21–24</p>
            <p className="text-sm text-ink-soft mt-1">
              Growth continues and your baby's movements may become easier to
              notice.
            </p>
          </div>

          <div className="rounded-2xl bg-purple-mist p-4">
            <p className="font-semibold text-ink">Weeks 25–27+6</p>
            <p className="text-sm text-ink-soft mt-1">
              The brain, lungs and other organs continue maturing as your baby
              gains weight and becomes more active.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white border border-purple-line p-4">
          <p className="font-semibold text-purple-deep">
            Every baby develops at their own pace.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Pregnancy milestones describe general patterns rather than exact
            deadlines.
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
    summary: 'Common physical and emotional changes during this trimester.',
    content: (
      <>
        <p>
          Many women find the second trimester more comfortable than the first,
          although pregnancy continues to bring physical and emotional changes.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Your abdomen becomes more noticeable as the uterus grows.</li>
          <li>Nausea and fatigue may improve.</li>
          <li>Your appetite may increase.</li>
          <li>You may begin feeling your baby's movements.</li>
          <li>Your breasts continue changing.</li>
          <li>Stretch marks or itchy, stretching skin may appear.</li>
          <li>Mild backache or round-ligament discomfort may occur.</li>
          <li>Some swelling of the feet or ankles may occur.</li>
          <li>Skin pigmentation can change during pregnancy.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-peach-soft p-4">
          <p className="font-semibold text-purple-deep">
            Mention persistent or severe symptoms at your ANC visit.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Pregnancy discomforts are common, but severe, sudden or worsening
            symptoms deserve assessment.
          </p>
        </div>
      </>
    ),
    source: 'ACOG',
  },

  {
    id: 'movement',
    icon: '👣',
    title: 'Feeling your baby move',
    summary: 'When movement may begin and why patterns matter.',
    content: (
      <>
        <p>
          Many women begin feeling fetal movement during the second trimester.
          The timing varies, particularly between first and subsequent
          pregnancies.
        </p>

        <h4 className="font-display text-base text-ink mt-5">
          What might it feel like?
        </h4>

        <p className="text-sm text-ink-soft mt-2">
          Early movements may feel like gentle fluttering, bubbles, tapping or
          small kicks. As pregnancy progresses, movements generally become
          stronger and easier to recognize.
        </p>

        <div className="mt-5 rounded-2xl bg-pink-soft p-4">
          <p className="font-semibold text-purple-deep">
            Don't compare your baby's movements with another pregnancy.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Movement patterns vary. Later in pregnancy, your healthcare
            provider can advise you about monitoring your baby's movements.
          </p>
        </div>
      </>
    ),
    source: 'ACOG / WHO',
  },

  {
    id: 'nutrition',
    icon: '🥗',
    title: 'Nutrition, weight gain & hydration',
    summary: "Supporting your health and your baby's growth.",
    content: (
      <>
        <p>
          Your nutritional needs continue throughout pregnancy. Aim for a
          varied diet and regular fluids rather than focusing on eating for two.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mt-5">
          {[
            'Vegetables and fruits',
            'Beans, peas and lentils',
            'Eggs, meat and other protein foods',
            'Whole grains and staple foods',
            'Milk and other dairy foods where appropriate',
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

        <p className="text-sm text-ink-soft mt-5">
          Healthy pregnancy weight gain varies according to your pre-pregnancy
          body size and individual circumstances. Your healthcare provider can
          help monitor your growth and nutrition.
        </p>

        <div className="mt-4 rounded-2xl bg-mint-soft p-4">
          <p className="font-semibold text-ink">
            Keep drinking fluids regularly.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Water is generally the best everyday choice. Your needs can
            increase with heat, activity or vomiting.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'supplements',
    icon: '💊',
    title: 'Iron, folic acid & other supplements',
    summary: 'Important supplements and why your ANC team may recommend them.',
    content: (
      <>
        <p>
          Iron and folic acid supplementation remains important throughout
          pregnancy. WHO recommends daily iron and folic acid as part of
          antenatal care.
        </p>

        <div className="mt-5 rounded-2xl bg-mint-soft border border-mint/20 p-4">
          <p className="font-semibold text-ink">Iron and folic acid</p>
          <p className="text-sm text-ink-soft mt-1">
            WHO recommends daily supplementation containing 30–60 mg of
            elemental iron and 400 micrograms of folic acid during pregnancy.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          Your healthcare provider may recommend other supplements depending
          on your diet, blood results, pregnancy needs and local guidelines.
        </p>

        <div className="mt-4 rounded-2xl bg-peach-soft p-4">
          <p className="font-semibold text-purple-deep">
            Take supplements as recommended.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Do not increase, stop or substitute pregnancy supplements without
            discussing it with your healthcare provider.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'anc',
    icon: '🏥',
    title: 'Antenatal care in the second trimester',
    summary: 'What your appointments may focus on during these weeks.',
    content: (
      <>
        <p>
          Continue attending your scheduled antenatal contacts even when you
          feel well. ANC gives your healthcare team opportunities to monitor
          you and your baby and identify problems early.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-purple-mist p-4">
            <p className="font-semibold text-ink">Around 20 weeks</p>
            <p className="text-sm text-ink-soft mt-1">
              Your provider may assess your health, blood pressure, pregnancy
              progress and fetal development. Ultrasound may be used when
              indicated or available.
            </p>
          </div>

          <div className="rounded-2xl bg-peach-soft p-4">
            <p className="font-semibold text-ink">Around 24–28 weeks</p>
            <p className="text-sm text-ink-soft mt-1">
              Blood tests and screening for conditions such as gestational
              diabetes may be recommended according to your care plan.
            </p>
          </div>

          <div className="rounded-2xl bg-mint-soft p-4">
            <p className="font-semibold text-ink">Throughout the trimester</p>
            <p className="text-sm text-ink-soft mt-1">
              Blood pressure, weight and other pregnancy assessments continue.
              After 20 weeks, screening for pre-eclampsia becomes especially
              important.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'vaccines',
    icon: '💉',
    title: 'Vaccinations in pregnancy',
    summary: 'Protecting you and your baby through recommended immunization.',
    content: (
      <>
        <p>
          Vaccination during pregnancy can protect the mother and, for some
          vaccines, provide protection to the baby after birth.
        </p>

        <p className="text-sm text-ink-soft mt-4">
          Your vaccination needs depend on your previous vaccination history,
          local recommendations, season, health conditions and where you live.
        </p>

        <div className="mt-5 rounded-2xl bg-mint-soft p-4">
          <p className="font-semibold text-ink">
            Ask about tetanus protection.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            WHO recommends tetanus vaccination during pregnancy according to
            previous vaccination exposure.
          </p>
        </div>

        <div className="mt-4 rounded-2xl bg-pink-soft p-4">
          <p className="font-semibold text-purple-deep">
            Bring your vaccination record to ANC.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Your healthcare provider can determine which vaccines are
            appropriate for you.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'discomforts',
    icon: '🌙',
    title: 'Common discomforts & how to cope',
    summary: 'Back pain, heartburn, leg cramps and other common concerns.',
    content: (
      <>
        <p>
          Some discomforts become more noticeable as your uterus grows and your
          body changes.
        </p>

        <div className="mt-5 space-y-3">
          <div>
            <p className="font-semibold text-ink">Backache</p>
            <p className="text-sm text-ink-soft mt-1">
              Good posture, appropriate physical activity, rest and avoiding
              heavy lifting may help.
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Heartburn</p>
            <p className="text-sm text-ink-soft mt-1">
              Smaller meals, avoiding personal triggers and staying upright
              after eating may help.
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Leg cramps</p>
            <p className="text-sm text-ink-soft mt-1">
              Gentle stretching and movement may provide relief. Tell your
              healthcare provider about persistent or severe symptoms.
            </p>
          </div>

          <div>
            <p className="font-semibold text-ink">Swelling</p>
            <p className="text-sm text-ink-soft mt-1">
              Mild swelling can occur during pregnancy. Sudden or significant
              swelling, especially with other warning symptoms, needs medical
              assessment.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO / ACOG',
  },

  {
    id: 'sexual-health',
    icon: '❤️',
    title: 'Sexual health in pregnancy',
    summary: 'Comfort, communication and when to ask your provider.',
    content: (
      <>
        <p>
          For many uncomplicated pregnancies, sexual activity can continue if
          it is comfortable and your healthcare provider has not advised
          otherwise.
        </p>

        <div className="mt-5 rounded-2xl bg-pink-soft p-4">
          <p className="font-semibold text-purple-deep">
            Talk openly about comfort.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Pregnancy can change comfort, desire and body image. Communication
            with your partner is important.
          </p>
        </div>

        <p className="text-sm text-ink-soft mt-4">
          Ask your healthcare provider for individual advice if you have
          bleeding, pain, leaking fluid, placenta-related concerns or have
          been told to avoid sexual activity.
        </p>
      </>
    ),
    source: 'ACOG',
  },

  {
    id: 'warning',
    icon: '🚨',
    title: 'Warning signs',
    summary: 'Symptoms that need prompt or urgent medical attention.',
    content: (
      <>
        <p className="font-semibold text-alert-deep">
          Seek urgent medical care if you have:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-alert-deep">
          {[
            'Heavy vaginal bleeding',
            'Severe or persistent abdominal or pelvic pain',
            'Severe headache or changes in vision',
            'Sudden swelling of the face, hands or feet',
            'Fever or feeling seriously unwell',
            'Severe vomiting or inability to keep fluids down',
            'Convulsions, fainting or loss of consciousness',
            'Fluid leaking from the vagina',
            'Difficulty breathing or chest pain',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-2xl bg-white border border-alert/20 p-4">
          <p className="font-semibold text-alert-deep">
            Don't wait for your next ANC appointment.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Some warning signs can indicate serious pregnancy complications
            and require prompt assessment.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya Ministry of Health',
  },

  {
    id: 'questions',
    icon: '❓',
    title: 'Questions for your health worker',
    summary: 'Useful questions to take to your next antenatal contact.',
    content: (
      <>
        <p className="text-sm text-ink-soft">
          Keep this list on your phone or write your own questions before your
          appointment.
        </p>

        <div className="mt-5 space-y-2">
          {[
            'Is my pregnancy progressing normally?',
            'What should my baby\'s growth look like at this stage?',
            'When should I expect to feel movement?',
            'Do I need an ultrasound or other tests?',
            'Should I be screened for gestational diabetes?',
            'How are my blood pressure and haemoglobin?',
            'Do I need malaria prevention at this stage?',
            'Are my supplements still appropriate?',
            'Which vaccines should I receive?',
            'What symptoms should make me seek urgent care?',
            'When is my next ANC contact?',
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
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-peach-soft text-xl">
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

export default function SecondTrimesterPage() {
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
      <section className="relative overflow-hidden rounded-[28px] border border-peach/30 bg-[#fff8f3]">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] items-stretch">
          <div className="relative z-10 p-6 sm:p-9 lg:p-12">
            <span className="inline-flex rounded-full bg-peach-soft text-orange-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide">
              Weeks 14–27+6
            </span>

            <h1 className="font-display text-4xl sm:text-5xl text-purple-deep font-semibold mt-4">
              Second Trimester
            </h1>

            <p className="text-lg text-ink-soft mt-3">
              Growth, movement & changes
            </p>

            <p className="text-sm sm:text-base text-ink-soft mt-5 max-w-xl leading-7">
              This is often called the “golden period” of pregnancy. Your baby
              grows quickly, your energy may improve, and you may begin feeling
              your baby move.
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

            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f3] via-[#fff8f3]/20 to-transparent lg:from-[#fff8f3] lg:via-transparent" />
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="mt-6 rounded-[24px] border border-peach/25 bg-[#fffaf7] p-5 sm:p-6">
        <h2 className="font-display text-xl text-purple-deep font-semibold">
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
              className="rounded-2xl bg-white border border-peach/25 px-3 py-4 text-center hover:border-purple/30 hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl block">
                {topic.icon}
              </span>

              <span className="block text-xs font-semibold text-purple-deep mt-2">
                {topic.title
                  .replace("Your baby's development", 'Baby development')
                  .replace('Changes you may notice', 'Body changes')
                  .replace('Feeling your baby move', 'Baby movement')
                  .replace('Nutrition, weight gain & hydration', 'Nutrition')
                  .replace('Iron, folic acid & other supplements', 'Supplements')
                  .replace('Antenatal care in the second trimester', 'ANC')}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="mt-8">
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-wide text-purple">
            Second trimester guide
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold mt-1">
            What's happening in your second trimester?
          </h2>

          <p className="text-sm text-ink-soft mt-2">
            Click on each topic to learn more. Take your time, and come back
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

      {/* Side-style support panels */}
      <div className="grid lg:grid-cols-2 gap-5 mt-8">
        <section className="rounded-[24px] bg-mint-soft border border-mint/20 p-5 sm:p-7">
          <h2 className="font-display text-xl text-purple-deep font-semibold">
            🌿 Tips for a healthy second trimester
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            {[
              'Attend your recommended antenatal contacts.',
              'Eat a varied, nutritious diet.',
              'Take your prescribed iron and folic acid supplements.',
              'Drink fluids regularly.',
              'Stay physically active as advised for your pregnancy.',
              'Use an insecticide-treated mosquito net where malaria is a risk.',
              'Ask about malaria prevention during ANC.',
              'Get enough rest and seek support when you need it.',
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
            Seek urgent medical care if you experience serious symptoms such
            as heavy bleeding, severe pain, severe headache or vision changes,
            sudden swelling, fever, leaking fluid, difficulty breathing or
            other symptoms that concern you.
          </p>

          <Link
            to="/get-help"
            className="inline-flex mt-5 rounded-full bg-alert text-white px-5 py-2.5 text-sm font-semibold hover:bg-alert-deep transition-colors"
          >
            🚨 Get Help Now
          </Link>
        </section>
      </div>

      {/* Questions */}
      <section className="mt-6 rounded-[24px] bg-purple-mist/60 border border-purple-line p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl text-purple-deep font-semibold">
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
            className="shrink-0 rounded-full border border-purple/30 text-purple-deep px-4 py-2 text-sm font-semibold hover:bg-white transition-colors"
          >
            View helpful questions →
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-6 rounded-[20px] bg-white border border-peach/30 p-5">
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
          to="/journey/first-trimester"
          className="rounded-full border border-purple-line text-purple-deep px-4 py-2 text-sm font-semibold hover:border-purple transition-colors"
        >
          ← First Trimester
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