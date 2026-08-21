import { Link } from 'react-router-dom'
import SourceTag from '../components/shared/SourceTag.jsx'
import guidePregnancy from '../assets/guide-pregnancy.jpg'

const TOPICS = [
  {
    icon: '🩺',
    title: 'Routine checks',
    description: 'Done at antenatal visits to monitor your health.',
    checks: [
      'Blood pressure',
      'Weight & BMI',
      'Temperature',
      'Symptoms & medical history',
      "Baby's heartbeat from around 12 weeks",
      'Fundal height later in pregnancy',
    ],
    why:
      "Helps detect issues early and track your baby's growth and wellbeing.",
  },
  {
    icon: '🧪',
    title: 'Blood tests',
    description:
      'Blood samples check for infections, conditions and overall health.',
    checks: [
      'Haemoglobin (anaemia)',
      'Blood group & Rh factor',
      'HIV',
      'Syphilis',
      'Hepatitis B',
      'Blood sugar when indicated',
      'Other infections when needed, such as malaria',
    ],
    why:
      'Finds conditions that may affect you or your baby so treatment can start early.',
  },
  {
    icon: '🧫',
    title: 'Urine tests',
    description:
      'A urine sample provides information about your kidneys and health.',
    checks: [
      'Protein — possible pre-eclampsia risk',
      'Sugar — possible diabetes',
      'Infection — bacteria',
      'Ketones and other substances',
    ],
    why:
      'Helps identify problems such as infection, diabetes or kidney concerns early.',
  },
  {
    icon: '🖥️',
    title: 'Ultrasound scans',
    description:
      'Uses sound waves to create images of your baby and uterus.',
    checks: [
      'How many babies',
      "Baby's growth and development",
      "Baby's heartbeat",
      'Placenta location',
      'Amniotic fluid',
      'Due date — dating scan',
      'Certain structural abnormalities',
    ],
    why:
      "Helps confirm pregnancy, assess your baby's growth and identify possible concerns.",
  },
  {
    icon: '🔎',
    title: 'Screening vs diagnostic tests',
    description:
      'Screening estimates risk. Diagnostic testing provides more definite information.',
    checks: [
      'Screening blood tests',
      'Ultrasound screening',
      'Additional or repeat scans when recommended',
      'Diagnostic testing when clinically indicated',
      'Amniocentesis when recommended by your healthcare team',
    ],
    why:
      'Helps you understand your options and make informed decisions with your provider.',
  },
  {
    icon: '📋',
    title: 'Understanding your results',
    description:
      'Ask questions so you understand what your results mean.',
    checks: [
      'What was this test checking?',
      'What do my results mean?',
      'Do I need another test?',
      'When should I repeat the test?',
      'Do I need treatment or referral?',
    ],
    why:
      'Good communication helps you feel informed, confident and involved in your care.',
  },
  {
    icon: '🚨',
    title: 'When testing is urgent',
    description:
      "Don't wait for a routine appointment if you have concerning symptoms.",
    checks: [
      'Severe headache',
      'Vaginal bleeding',
      'Fever',
      'Severe abdominal pain',
      'Reduced baby movements',
      'Fits or seizures',
      'Shortness of breath',
    ],
    why:
      'Getting appropriate care quickly can help prevent serious complications.',
  },
]

const LEARN_ITEMS = [
  ['🩺', 'Routine checks'],
  ['🧪', 'Blood tests'],
  ['🧫', 'Urine tests'],
  ['🖥️', 'Ultrasound scans'],
  ['🔎', 'Screening vs diagnostic'],
  ['📋', 'Understanding results'],
  ['🚨', 'When testing is urgent'],
]

export default function TestsScansPage() {
  return (
    <div className="pb-12 max-w-5xl mx-auto">

      {/* Back to journey */}
      <Link
        to="/journey"
        className="inline-flex items-center gap-2 mb-5 text-sm font-semibold text-cyan-800 hover:text-cyan-950 transition-colors"
      >
        ← Back to Journey
      </Link>

      {/* HERO */}
      <section className="rounded-[28px] overflow-hidden border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 shadow-sm">

        <div className="grid lg:grid-cols-2">

          {/* Hero text */}
          <div className="p-6 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-700 text-white px-4 py-2 text-xs font-bold uppercase tracking-wide">
              🩺 Screenings & Monitoring
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-cyan-900 mt-5">
              Tests & Scans
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mt-3 max-w-xl">
              Checks that support you and your baby's wellbeing
            </h2>

            <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-xl">
              The right tests at the right time help your healthcare team
              monitor your health, track your baby's growth and detect any
              concerns early.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/dashboard"
                className="rounded-full bg-cyan-700 text-white px-5 py-2.5 text-sm font-semibold hover:bg-cyan-800 transition-colors"
              >
                📊 Track my pregnancy
              </Link>

              <Link
                to="/get-help"
                className="rounded-full border border-red-300 bg-white text-red-600 px-5 py-2.5 text-sm font-semibold hover:bg-red-50 transition-colors"
              >
                🚨 Get Help
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="min-h-[280px] lg:min-h-full">
            <img
              src={guidePregnancy}
              alt="Pregnancy care and monitoring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* WHY TESTS MATTER */}
        <div className="border-t border-cyan-100 p-6 sm:p-8 bg-white/70">
          <div className="rounded-2xl border border-cyan-100 bg-white p-5">

            <h2 className="font-display text-xl font-semibold text-cyan-900">
              💙 Why tests matter
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>✓ Improve chances of a safe pregnancy and birth</li>
              <li>✓ Help detect risks or complications early</li>
              <li>✓ Guide treatment and healthy decisions</li>
              <li>✓ Monitor your baby's growth and development</li>
              <li>✓ Give you peace of mind</li>
            </ul>

            <div className="mt-5 rounded-xl bg-cyan-50 border border-cyan-100 p-4">
              <p className="text-sm font-medium text-cyan-900">
                All tests should be recommended and explained by your
                healthcare professional.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="mt-8">

        <h2 className="font-display text-2xl sm:text-3xl text-cyan-900 font-semibold">
          What you'll learn
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">

          {LEARN_ITEMS.map(([icon, title]) => (
            <div
              key={title}
              className="rounded-2xl border border-cyan-100 bg-white p-4 text-center shadow-sm"
            >
              <div className="text-3xl">{icon}</div>

              <p className="text-sm font-semibold text-cyan-900 mt-2 leading-tight">
                {title}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="text-3xl">ⓘ</div>

          <div>
            <p className="font-semibold text-cyan-900">
              Early detection can lead to better outcomes.
            </p>

            <p className="text-sm text-slate-600 mt-1">
              Most pregnancy tests are routine parts of antenatal care.
              Your healthcare provider will recommend the assessments that
              are appropriate for you.
            </p>
          </div>
        </div>

      </section>

      {/* WHEN TO HAVE TESTS */}
      <section className="mt-8 rounded-3xl border border-cyan-100 bg-white p-6 sm:p-8 shadow-sm">

        <h2 className="font-display text-2xl text-cyan-900 font-semibold">
          When to have tests
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-5">

          <div className="rounded-2xl bg-cyan-50 p-5">
            <p className="font-semibold text-cyan-900">
              📅 First visit
            </p>

            <p className="text-sm text-slate-600 mt-2">
              Initial tests and assessments help establish a baseline for
              your pregnancy care.
            </p>
          </div>

          <div className="rounded-2xl bg-sky-50 p-5">
            <p className="font-semibold text-cyan-900">
              📅 Throughout pregnancy
            </p>

            <p className="text-sm text-slate-600 mt-2">
              Some checks may be repeated to monitor changes in your health
              and your baby's wellbeing.
            </p>
          </div>

          <div className="rounded-2xl bg-teal-50 p-5">
            <p className="font-semibold text-cyan-900">
              📅 When needed
            </p>

            <p className="text-sm text-slate-600 mt-2">
              Symptoms, medical history or risk factors may mean additional
              tests or assessments are recommended.
            </p>
          </div>

          <div className="rounded-2xl bg-cyan-50 p-5">
            <p className="font-semibold text-cyan-900">
              📅 Before birth
            </p>

            <p className="text-sm text-slate-600 mt-2">
              Your healthcare team may carry out assessments according to
              your individual needs as you approach birth.
            </p>
          </div>

        </div>

        <div className="mt-5 rounded-2xl bg-sky-50 border border-sky-100 p-4">
          <p className="text-sm font-semibold text-cyan-900">
            💙 Follow your healthcare provider's advice
          </p>

          <p className="text-sm text-slate-600 mt-1">
            Timing and repeat testing can vary depending on your pregnancy,
            health history and local care recommendations.
          </p>
        </div>

      </section>

      {/* ABOUT THE TESTS */}
      <section className="mt-8">

        <div className="flex items-center gap-4">
          <h2 className="font-display text-2xl sm:text-3xl text-cyan-900 font-semibold">
            About the tests
          </h2>

          <div className="h-px bg-cyan-100 flex-1" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">

          {TOPICS.map((topic) => (
            <article
              key={topic.title}
              className="rounded-3xl border border-cyan-100 bg-white shadow-sm overflow-hidden"
            >

              <div className="p-5">

                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-cyan-800 text-white flex items-center justify-center text-xl">
                    {topic.icon}
                  </div>

                  <h3 className="font-display text-lg font-semibold text-cyan-900">
                    {topic.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {topic.description}
                </p>

                <p className="text-sm font-semibold text-cyan-900 mt-5">
                  What to know:
                </p>

                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {topic.checks.map((check) => (
                    <li key={check} className="flex gap-2">
                      <span className="text-cyan-700">•</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl bg-cyan-50 border border-cyan-100 p-4">
                  <p className="text-sm font-semibold text-cyan-900">
                    Why it matters
                  </p>

                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {topic.why}
                  </p>
                </div>

              </div>
            </article>
          ))}

        </div>

      </section>

      {/* BEFORE ANY TEST */}
      <section className="mt-8 grid md:grid-cols-2 gap-5">

        <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">

          <h2 className="font-display text-xl font-semibold text-cyan-900">
            🛡️ Before any test
          </h2>

          <div className="mt-5 space-y-4">

            <div>
              <p className="font-semibold text-slate-800">
                Tell your provider about medicines
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Include medicines, supplements, allergies and important past
                illnesses.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                Ask whether you need to fast
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Some tests may require specific preparation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                Tell them about previous reactions
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Let your provider know if you have reacted to a test or
                procedure before.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                Understand and give consent
              </p>
              <p className="text-sm text-slate-600 mt-1">
                You can ask questions and discuss the purpose of a test before
                it is performed.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                Your privacy matters
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Ask how your information and results will be handled.
              </p>
            </div>

          </div>
        </div>

        {/* URGENT HELP */}
        <div className="rounded-3xl border border-red-200 bg-red-50 p-6">

          <h2 className="font-display text-xl font-semibold text-red-700">
            🚨 Need help now?
          </h2>

          <p className="text-sm text-slate-700 mt-3 leading-relaxed">
            If you feel unwell or are worried about symptoms or test results,
            contact a healthcare professional rather than waiting for your
            next routine appointment.
          </p>

          <div className="mt-5 space-y-2 text-sm text-slate-700">
            <p>• Severe headache</p>
            <p>• Vaginal bleeding</p>
            <p>• Fever</p>
            <p>• Severe abdominal pain</p>
            <p>• Reduced baby movements</p>
            <p>• Fits or seizures</p>
            <p>• Shortness of breath</p>
          </div>

          <Link
            to="/get-help"
            className="inline-flex mt-6 rounded-full bg-red-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors"
          >
            🚨 Get Help
          </Link>

        </div>

      </section>

      {/* SOURCE */}
      <div className="mt-6">
        <SourceTag source="WHO | Kenya MOH" />
      </div>

      {/* BOTTOM SUPPORT BANNER */}
      <section className="mt-6 rounded-3xl border border-cyan-100 bg-cyan-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div className="flex items-center gap-4">
          <div className="text-4xl">💙</div>

          <div>
            <p className="font-display text-lg font-semibold text-cyan-900">
              You are not alone.
            </p>

            <p className="text-sm text-slate-600">
              We are here to support you at every step.
            </p>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="text-sm font-semibold text-cyan-800 hover:text-cyan-950"
        >
          📊 Track your pregnancy →
        </Link>

      </section>

    </div>
  )
}