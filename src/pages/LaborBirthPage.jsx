import { useState } from 'react'
import { Link } from 'react-router-dom'
import guidePregnancy from '../assets/guide-pregnancy.jpg'
import SourceTag from '../components/shared/SourceTag.jsx'

const TOPICS = [
  {
    id: 'signs',
    icon: '⏱️',
    title: 'Signs of labor',
    summary: 'Learn the changes that may mean labor is beginning.',
    content: (
      <>
        <p>
          Labor does not always begin in exactly the same way for everyone.
          Knowing the common signs can help you recognize when you may need to
          contact your healthcare provider or go to your maternity facility.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-[#f9d0e2] border border-[#f0c9d9] p-4">
            <p className="font-semibold text-[#8f2f5d]">
              Regular contractions
            </p>
            <p className="text-sm text-ink-soft mt-1">
              Contractions may become stronger, longer and more regular as
              labor progresses.
            </p>
          </div>

          <div className="rounded-2xl bg-[#86abfc] border border-[#a5b8e0] p-4">
            <p className="font-semibold text-[#233b69]">
              Changes in the cervix
            </p>
            <p className="text-sm text-ink-soft mt-1">
              The cervix gradually softens, thins and opens during labor.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f9edf3] border border-[#edd3df] p-4">
            <p className="font-semibold text-[#8f2f5d]">
              Waters breaking
            </p>
            <p className="text-sm text-ink-soft mt-1">
              Your waters may break as a gush or as a continuous leak of
              fluid. Contact your maternity provider for advice.
            </p>
          </div>

          <div className="rounded-2xl bg-[#edf1f8] border border-[#d4ddea] p-4">
            <p className="font-semibold text-[#233b69]">
              Other changes
            </p>
            <p className="text-sm text-ink-soft mt-1">
              You may notice pelvic pressure, lower back discomfort or a
              blood-stained mucus discharge.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'stages',
    icon: '〽️',
    title: 'Stages of labor',
    summary: 'Understand what happens from early labor through birth.',
    content: (
      <>
        <p>
          Labor is commonly described in stages. The length and experience of
          each stage can vary considerably from one woman to another.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-[#eef2fa] p-4">
            <p className="font-semibold text-[#233b69]">
              First stage
            </p>
            <p className="text-sm text-ink-soft mt-1">
              The cervix gradually opens as contractions become established.
              This stage includes early labor and active labor.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8e8ef] p-4">
            <p className="font-semibold text-[#8f2f5d]">
              Second stage
            </p>
            <p className="text-sm text-ink-soft mt-1">
              The cervix is fully dilated and you push with contractions as
              your baby is born.
            </p>
          </div>

          <div className="rounded-2xl bg-[#edf1f8] p-4">
            <p className="font-semibold text-[#233b69]">
              Third stage
            </p>
            <p className="text-sm text-ink-soft mt-1">
              After your baby is born, the placenta is delivered.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#eef2fa] to-[#f9e9f0] border border-[#ddd9e5] p-4">
          <p className="font-semibold text-[#233b69]">
            Every labor is different.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Your healthcare team will monitor you and your baby and guide you
            through each stage.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'pain-relief',
    icon: '🌿',
    title: 'Pain relief options',
    summary: 'Understand different ways you may be supported during labor.',
    content: (
      <>
        <p>
          Pain during labor is normal, but women experience it differently.
          Talk with your healthcare team about the pain-relief options
          available at your facility.
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#f8e8ef] p-4">
            <p className="font-semibold text-[#8f2f5d]">
              Comfort measures
            </p>

            <ul className="mt-2 text-sm text-ink-soft space-y-1 list-disc list-inside">
              <li>Breathing and relaxation</li>
              <li>Movement and position changes</li>
              <li>Massage</li>
              <li>Emotional support</li>
              <li>Warm water where available</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#edf1f8] p-4">
            <p className="font-semibold text-[#233b69]">
              Medical pain relief
            </p>

            <p className="text-sm text-ink-soft mt-1">
              Depending on the facility and your individual circumstances,
              medical options may be available.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white/70 border border-[#ddd9e5] p-4">
          <p className="font-semibold text-[#233b69]">
            Ask before labor.
          </p>

          <p className="text-sm text-ink-soft mt-1">
            Knowing which options are available can help you make informed
            decisions when labor begins.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'when-hospital',
    icon: '🏥',
    title: 'When to go to the facility',
    summary: 'Know when to contact your maternity team or seek urgent care.',
    content: (
      <>
        <p>
          Your healthcare provider should give you specific instructions about
          when to come to your maternity facility. These instructions may
          depend on your pregnancy and individual circumstances.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Follow the instructions given by your maternity provider.</li>
          <li>Contact your provider when you think labor has started.</li>
          <li>Seek care if your waters break or you have concerning fluid.</li>
          <li>Seek urgent care for significant vaginal bleeding.</li>
          <li>
            Seek care if your baby's movements are reduced later in pregnancy.
          </li>
          <li>Do not delay if you feel something is seriously wrong.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-[#f8e8ef] border border-[#edc7d7] p-4">
          <p className="font-semibold text-[#9a2858]">
            When in doubt, contact your healthcare provider.
          </p>

          <p className="text-sm text-ink-soft mt-1">
            It is better to ask for advice than to ignore a concerning change.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'during-birth',
    icon: '👩‍🍼',
    title: 'During birth',
    summary: 'What you may experience as your baby is born.',
    content: (
      <>
        <p>
          During birth, your healthcare team will support you and monitor your
          wellbeing and your baby's wellbeing. Follow the guidance of your
          skilled birth attendant.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-[#edf1f8] p-4">
            <p className="font-semibold text-[#233b69]">
              Breathing and pushing
            </p>

            <p className="text-sm text-ink-soft mt-1">
              During the pushing stage, your healthcare team can guide you on
              when and how to push.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8e8ef] p-4">
            <p className="font-semibold text-[#8f2f5d]">
              Your baby is born
            </p>

            <p className="text-sm text-ink-soft mt-1">
              Once your baby is born, your care team will assess your baby and
              support appropriate immediate newborn care.
            </p>
          </div>

          <div className="rounded-2xl bg-[#edf1f8] p-4">
            <p className="font-semibold text-[#233b69]">
              Immediate support
            </p>

            <p className="text-sm text-ink-soft mt-1">
              When appropriate, early skin-to-skin contact and early
              breastfeeding support may be encouraged.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'after-birth',
    icon: '💗',
    title: 'After birth',
    summary: 'Important care for you and your baby immediately after delivery.',
    content: (
      <>
        <p>
          The period immediately after birth is important for both mother and
          baby. Your healthcare team will monitor you for complications and
          support your baby's transition to life outside the womb.
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#f8e8ef] p-4">
            <p className="font-semibold text-[#8f2f5d]">
              For you
            </p>

            <ul className="mt-2 text-sm text-ink-soft space-y-1 list-disc list-inside">
              <li>Monitoring after birth</li>
              <li>Support with feeding</li>
              <li>Monitoring bleeding and vital signs</li>
              <li>Pain and recovery support</li>
              <li>Emotional support</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#edf1f8] p-4">
            <p className="font-semibold text-[#233b69]">
              For baby
            </p>

            <ul className="mt-2 text-sm text-ink-soft space-y-1 list-disc list-inside">
              <li>Breathing and wellbeing assessment</li>
              <li>Keeping baby warm</li>
              <li>Skin-to-skin contact when appropriate</li>
              <li>Early breastfeeding support</li>
              <li>Newborn examination</li>
            </ul>
          </div>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'baby',
    icon: '👶',
    title: 'For your baby',
    summary: 'Understand the first important moments of newborn care.',
    content: (
      <>
        <p>
          Newborns need warmth, feeding, protection from infection and careful
          observation during the first hours and days of life.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Keep your baby warm.</li>
          <li>Begin breastfeeding as soon as appropriate.</li>
          <li>Practice skin-to-skin contact when recommended.</li>
          <li>Follow your provider's newborn-care advice.</li>
          <li>Attend recommended newborn follow-up appointments.</li>
          <li>
            Learn the warning signs that require urgent newborn care.
          </li>
        </ul>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#eef2fa] to-[#f8e8ef] p-4">
          <p className="font-semibold text-[#233b69]">
            Your baby's first hours matter.
          </p>

          <p className="text-sm text-ink-soft mt-1">
            Ask your healthcare provider about feeding, warmth, cord care,
            immunization and follow-up before you leave the facility.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'support',
    icon: '🫶',
    title: 'Emotional support',
    summary:
      'Birth can be intense. You deserve information, respect and support.',
    content: (
      <>
        <p>
          Giving birth can bring many emotions. Feeling nervous, excited,
          overwhelmed or tired can all happen. You deserve respectful,
          supportive maternity care.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Talk to someone you trust about how you are feeling.</li>
          <li>Ask questions when you do not understand something.</li>
          <li>Tell your healthcare team about pain or concerns.</li>
          <li>Use your birth companion for emotional support.</li>
          <li>Ask for help if you feel overwhelmed after birth.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-[#f8e8ef] border border-[#edc9d8] p-4">
          <p className="font-semibold text-[#8f2f5d]">
            You are stronger than you think.
          </p>

          <p className="text-sm text-ink-soft mt-1">
            You do not have to go through birth alone. Your healthcare team is
            there to support you.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },
]

export default function LaborBirthPage() {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="pb-12">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-[#ccd4e4] bg-gradient-to-br from-[#e9eef8] via-white to-[#f7e2eb] shadow-sm">

        <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px]" />

        <div className="relative grid lg:grid-cols-[1.35fr_1fr]">

          <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">

            <p className="inline-flex items-center gap-2 rounded-full border border-[#e4a5bc] bg-[#e84d82]/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#a42c59]">
              💗 Labor & Birth
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#162f5c] mt-5">
              Labor & Birth
            </h1>

            <p className="text-xl text-[#d13c70] mt-4 font-semibold">
              You are stronger than you think.
            </p>

            <p className="text-base text-slate-600 mt-4 max-w-xl leading-relaxed">
              Every birth is unique. We are here to support you with
              information, encouragement and the care you and your baby need.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">

              <Link
                to="/dashboard"
                className="rounded-full bg-[#233f72] text-white px-5 py-2.5 text-sm font-semibold shadow-md hover:bg-[#1a315a] transition-colors"
              >
                📅 Track my pregnancy
              </Link>

              <Link
                to="/get-help"
                className="rounded-full border border-[#e58ba9] bg-white/70 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[#b52e5f] hover:bg-white transition-colors"
              >
                🚨 Get Help
              </Link>

            </div>
          </div>

          <div className="min-h-[280px] lg:min-h-full">
            <img
              src={guidePregnancy}
              alt="Pregnant mother preparing for birth"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* WHY SUPPORT MATTERS + CHECKLIST */}
      <section className="mt-6 grid lg:grid-cols-[1fr_340px] gap-5">

        <div className="rounded-[24px] border border-[#d5dcea] bg-white/70 backdrop-blur-xl p-6 shadow-sm">

          <h2 className="font-display text-2xl font-semibold text-[#213b69]">
            Why support matters
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">

            {[
              'You are not alone',
              'Skilled care helps keep you safe',
              'Support can help you cope with pain',
              'Your birth preferences matter',
              'Quick action can save lives',
              "Your baby's wellbeing comes first",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e1d7df] bg-gradient-to-br from-[#f1f4fa] to-[#fcecf2] p-4"
              >
                <p className="text-sm font-medium text-ink flex gap-2">
                  <span className="text-[#df3f75]">●</span>
                  {item}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-5 rounded-2xl border border-[#e6c5d3] bg-gradient-to-r from-[#edf1f8] to-[#f9e3eb] p-4">

            <p className="font-semibold text-[#213b69]">
              🌸 Breathe. You are doing great.
            </p>

            <p className="text-sm text-ink-soft mt-1">
              Trust your body, listen to your care team and ask for help when
              you need it.
            </p>

          </div>

        </div>


        <div className="rounded-[24px] border border-[#e3d3dc] bg-white/70 backdrop-blur-xl p-6 shadow-sm">

          <h2 className="font-display text-xl font-semibold text-[#213b69]">
            📋 Labor & birth checklist
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-ink-soft">

            {[
              'Know the signs of labor',
              'Know where to give birth',
              'Have a transport plan',
              'Pack your bag early',
              'Bring your health documents',
              'Choose a birth companion',
              'Discuss birth preferences',
              'Know when to seek help',
              'Save emergency contacts',
              'Stay calm and breathe',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#e23d74] font-bold">✓</span>
                {item}
              </li>
            ))}

          </ul>

          <div className="mt-5 rounded-2xl bg-[#f8e5ed] border border-[#e8c3d3] p-4">

            <p className="text-sm font-semibold text-[#a52e5d]">
              💬 Talk to your healthcare provider about any concerns.
            </p>

          </div>

        </div>

      </section>


      {/* FOCUS AREAS */}
      <section className="mt-8">

        <h2 className="font-display text-2xl text-[#213b69] font-semibold">
          Focus Areas
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-4">

          {TOPICS.map((topic) => (

            <button
              key={topic.id}
              type="button"
              onClick={() =>
                setOpenId(openId === topic.id ? null : topic.id)
              }
              className={`rounded-2xl border p-4 text-center backdrop-blur-xl transition-all hover:-translate-y-1 ${
                openId === topic.id
                  ? 'border-[#e26c96] bg-gradient-to-br from-[#e9eef8] to-[#f7dce7] shadow-md'
                  : 'border-[#d9dfea] bg-white/65 hover:bg-[#f8eef3]'
              }`}
            >

              <span className="text-2xl block">
                {topic.icon}
              </span>

              <span className="text-xs font-semibold text-[#263d68] mt-2 block leading-tight">
                {topic.title}
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* LABOR AT A GLANCE */}
      <section className="mt-8 rounded-[24px] border border-[#d8ddea] bg-gradient-to-r from-[#edf1f8] to-[#f8e6ee] backdrop-blur-xl p-6">

        <h2 className="font-display text-2xl font-semibold text-[#213b69]">
          Labor & birth at a glance
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mt-5">

          {[
            ['⏱️', 'Signs of labor'],
            ['🏠', 'Early labor at home'],
            ['🏥', 'Active labor in hospital'],
            ['👶', 'Transition'],
            ['🫄', 'Pushing & birth'],
            ['💗', 'After birth recovery'],
            ['👶', 'Baby arrives'],
            ['🌿', 'Rest & recover'],
          ].map(([icon, text]) => (

            <div
              key={text}
              className="rounded-2xl border border-[#ddd8e2] bg-white/65 backdrop-blur-md p-4 text-center"
            >

              <span className="text-xl block">
                {icon}
              </span>

              <p className="text-xs font-semibold text-[#263d68] mt-2">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* DETAILED CONTENT */}
      <section className="mt-8">

        <h2 className="font-display text-2xl text-[#213b69] font-semibold">
          Understanding labor & birth
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">

          {TOPICS.map((topic, index) => (
            <article
              key={topic.id}
              className="rounded-[24px] border border-[#d9dfea] bg-white/65 backdrop-blur-xl shadow-sm overflow-hidden"
            >

              <div className="p-5">

                <div className="flex items-start gap-4">

                  <div
                    className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center font-bold ${
                      index % 2 === 0
                        ? 'bg-[#213f75] text-white'
                        : 'bg-[#e33f76] text-white'
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-3">

                      <span className="text-2xl">
                        {topic.icon}
                      </span>

                      <h3 className="font-display text-lg font-semibold text-[#253b63]">
                        {topic.title}
                      </h3>

                    </div>

                    <p className="text-sm text-ink-soft mt-2">
                      {topic.summary}
                    </p>

                  </div>

                </div>


                {/* CONTENT ALWAYS VISIBLE */}
                <div className="mt-5 pt-5 border-t border-[#e0d5de]">

                  <div className="text-sm text-ink-soft leading-relaxed">
                    {topic.content}
                  </div>

                  <SourceTag source={topic.source} />

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* URGENT HELP */}
      <section className="mt-8">

        <div className="rounded-[24px] border border-[#efbfd0] bg-gradient-to-br from-[#fff5f8] to-[#f8e1ea] backdrop-blur-xl p-6">

          <h2 className="font-display text-xl font-semibold text-[#a52859]">
            🚨 When to seek urgent help
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-5 text-sm text-ink-soft">

            <p>• Heavy vaginal bleeding</p>
            <p>• Severe abdominal pain</p>
            <p>• Severe headache</p>
            <p>• Blurred vision</p>
            <p>• Fever or chills</p>
            <p>• Waters breaking with concerning symptoms</p>
            <p>• Reduced or no baby movements later in pregnancy</p>
            <p>• Shortness of breath or chest pain</p>

          </div>

          <Link
            to="/get-help"
            className="inline-flex mt-6 rounded-full bg-[#df3973] text-white px-6 py-3 text-sm font-semibold shadow-md hover:bg-[#c72f63] transition-colors"
          >
            🚨 Get Help Now
          </Link>

        </div>

      </section>


      {/* BOTTOM SUPPORT */}
      <section className="mt-8 rounded-[24px] border border-[#9caecc] bg-gradient-to-r from-[#193562] via-[#263f70] to-[#e05a87] text-white p-6 shadow-lg">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <div>

            <p className="text-xl font-display font-semibold">
              💗 You are not alone.
            </p>

            <p className="text-sm text-white/80 mt-1">
              We are here to support you at every step.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              to="/journey"
              className="rounded-full bg-white/15 border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/25 transition-colors"
            >
              ← Back to Journey
            </Link>

            <Link
              to="/get-help"
              className="rounded-full bg-white text-[#263f70] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get Help
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}