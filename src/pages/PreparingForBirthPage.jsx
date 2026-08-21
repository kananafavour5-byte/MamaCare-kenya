import { useState } from 'react'
import { Link } from 'react-router-dom'
import guidePregnancy from '../assets/guide-pregnancy.jpg'
import SourceTag from '../components/shared/SourceTag.jsx'

const TOPICS = [
  {
    id: 'getting-ready',
    icon: '👜',
    title: 'Getting ready for birth',
    summary: 'Practical steps that can help you feel informed, confident and prepared.',
    content: (
      <>
        <p>
          Preparing for birth is about understanding your options, keeping up
          with antenatal care and making practical plans for you and your baby.
          You do not need to predict exactly how birth will happen. The goal is
          to understand your choices and know what to do if circumstances change.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Attend your recommended antenatal appointments.</li>
          <li>Learn about labor, birth and recovery.</li>
          <li>Ask your healthcare provider questions about your pregnancy.</li>
          <li>Discuss concerns, preferences and previous birth experiences.</li>
          <li>Learn when and where to seek help.</li>
          <li>Prepare practical arrangements before labor begins.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-[#f7e8f0] border border-[#ead0df] p-4">
          <p className="font-semibold text-[#7b2857]">Why it matters</p>
          <p className="text-sm text-ink-soft mt-1">
            Knowing what to expect can help you feel more confident and make
            informed decisions together with your healthcare team.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'where-to-give-birth',
    icon: '🏥',
    title: 'Choosing where to give birth',
    summary: 'Know where you plan to give birth and what services are available.',
    content: (
      <>
        <p>
          Talk with your healthcare provider about the safest place for you to
          give birth based on your pregnancy, health needs and available
          services.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-[#f8edf3] border border-[#ead7e2] p-4">
            <p className="font-semibold text-[#6f214e]">Choose a suitable facility</p>
            <p className="text-sm text-ink-soft mt-1">
              Find out whether skilled maternity care is available and whether
              the facility can provide the level of care you may need.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f4e5ed] border border-[#e5cbd9] p-4">
            <p className="font-semibold text-[#6f214e]">Know the practical details</p>
            <p className="text-sm text-ink-soft mt-1">
              Ask about opening hours, admission procedures, costs, visiting
              policies and what you should bring.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f0f4] border border-[#eadce4] p-4">
            <p className="font-semibold text-[#6f214e]">Visit if possible</p>
            <p className="text-sm text-ink-soft mt-1">
              If practical, become familiar with the facility, maternity unit
              and route before your due date.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'birth-plan',
    icon: '📋',
    title: 'Birth plan & preferences',
    summary: 'Think through the type of support and care you would prefer during birth.',
    content: (
      <>
        <p>
          A birth plan is a way to communicate your preferences with your
          healthcare team. It is not a guarantee that everything will happen
          exactly as planned because your health and your baby's wellbeing come
          first.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-[#f6e8ef] p-4">
            <p className="font-semibold text-[#742653]">You may discuss</p>
            <ul className="mt-2 text-sm text-ink-soft space-y-1 list-disc list-inside">
              <li>Who you would like to support you.</li>
              <li>Comfort and pain-relief preferences.</li>
              <li>Positions and movement during labor where appropriate.</li>
              <li>Communication preferences.</li>
              <li>Feeding preferences after birth.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#f9eef4] border border-[#ead8e3] p-4">
            <p className="font-semibold text-[#742653]">Stay flexible</p>
            <p className="text-sm text-ink-soft mt-1">
              Labor can be unpredictable. Be prepared for your healthcare team
              to recommend a different approach if it is safer for you or your
              baby.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white/80 border border-[#e6cfdd] p-4">
          <p className="font-semibold text-[#742653]">
            Discuss your plan with your provider.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            This gives you an opportunity to understand what is available at
            your chosen facility.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'support-system',
    icon: '👥',
    title: 'Birth companion & support',
    summary: 'Plan who can provide emotional and practical support during labor.',
    content: (
      <>
        <p>
          Having a trusted person with you can provide emotional reassurance
          and practical support during labor, where this is permitted and
          appropriate at your chosen facility.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Choose someone who understands and respects your wishes.</li>
          <li>Discuss your birth preferences with them beforehand.</li>
          <li>Make sure they know how to contact you and your facility.</li>
          <li>Ask what support the facility allows during labor.</li>
          <li>Consider a backup person if your first choice cannot attend.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-[#f5e5ed] p-4">
          <p className="font-semibold text-[#742653]">Why support matters</p>
          <p className="text-sm text-ink-soft mt-1">
            Continuous support can help a woman feel reassured, respected and
            less alone during labor and birth.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'what-to-pack',
    icon: '🧳',
    title: 'What to pack',
    summary: 'Prepare the essentials for yourself, your baby and your companion.',
    content: (
      <>
        <p>
          Packing ahead of time can reduce last-minute stress. Your facility
          may have its own recommended list, so check with them before packing.
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#f8edf3] p-4">
            <p className="font-semibold text-[#742653]">For you</p>
            <ul className="mt-2 text-sm text-ink-soft space-y-1 list-disc list-inside">
              <li>Comfortable clothing</li>
              <li>Personal hygiene items</li>
              <li>Sanitary maternity pads</li>
              <li>Comfortable underwear</li>
              <li>Phone and charger</li>
              <li>Important medical documents</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#f4e6ee] p-4">
            <p className="font-semibold text-[#742653]">For baby</p>
            <ul className="mt-2 text-sm text-ink-soft space-y-1 list-disc list-inside">
              <li>Clean baby clothes</li>
              <li>Newborn diapers</li>
              <li>Receiving blanket</li>
              <li>Hat if appropriate</li>
              <li>Clothing suitable for going home</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white/80 border border-[#e5d0dc] p-4">
          <p className="font-semibold text-[#742653]">
            Check your facility's list.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Hospitals and maternity facilities may provide some items and
            require others.
          </p>
        </div>
      </>
    ),
    source: 'Kenya MOH',
  },

  {
    id: 'transport',
    icon: '🚗',
    title: 'Transport & emergency planning',
    summary: 'Know how you will reach maternity care when labor starts or if you need urgent help.',
    content: (
      <>
        <p>
          Having a transport plan is especially important if you live far from
          your chosen facility or transport may be difficult to arrange at
          night.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Know the route to your maternity facility.</li>
          <li>Arrange reliable transport in advance.</li>
          <li>Keep a backup transport option.</li>
          <li>Save important emergency contacts.</li>
          <li>Keep your phone charged.</li>
          <li>Know where to go when you arrive at the facility.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-[#f7e5ed] border border-[#e6cbd9] p-4">
          <p className="font-semibold text-[#742653]">
            Do not wait for an emergency to make your plan.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            A prepared transport plan can help you reach appropriate care
            without unnecessary delay.
          </p>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'preparing-baby',
    icon: '👶',
    title: 'Preparing for baby',
    summary: 'Prepare a safe, practical environment for your newborn.',
    content: (
      <>
        <p>
          You do not need to buy everything before your baby arrives. Focus on
          basic necessities and a safe environment.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-[#f7eaf0] p-4">
            <p className="font-semibold text-[#742653]">Clothing</p>
            <p className="text-sm text-ink-soft mt-1">
              Prepare clean, comfortable clothing suitable for the local
              climate.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f5e4ed] p-4">
            <p className="font-semibold text-[#742653]">Safe sleep</p>
            <p className="text-sm text-ink-soft mt-1">
              Plan a safe sleeping space for your baby and learn recommended
              safe-sleep practices before birth.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f9eff4] p-4">
            <p className="font-semibold text-[#742653]">Newborn care</p>
            <p className="text-sm text-ink-soft mt-1">
              Learn about feeding, warmth, hygiene, cord care and when a
              newborn needs medical attention.
            </p>
          </div>
        </div>
      </>
    ),
    source: 'WHO / Kenya MOH',
  },

  {
    id: 'emotional-preparation',
    icon: '💗',
    title: 'Emotional preparation',
    summary: 'Prepare emotionally as well as practically for birth and parenthood.',
    content: (
      <>
        <p>
          It is normal to have mixed feelings about birth. You may feel
          excited, confident, worried or uncertain. Talking about your feelings
          can help you prepare.
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Talk openly with someone you trust.</li>
          <li>Ask your healthcare provider questions about birth.</li>
          <li>Practice relaxation or breathing techniques.</li>
          <li>Make time for rest and self-care.</li>
          <li>Ask for support if fear or worry becomes overwhelming.</li>
          <li>Remember that asking for help is a strength.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-[#f4e4ec] p-4">
          <p className="font-semibold text-[#742653]">
            You do not have to feel perfectly prepared.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Focus on learning what you can, making practical plans and knowing
            where to get help.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },
]

export default function PreparingForBirthPage() {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="pb-12">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-[#e4c5d6] bg-gradient-to-br from-[#f8edf3] via-white to-[#ead0df] shadow-sm">

        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

        <div className="relative grid lg:grid-cols-[1.35fr_1fr]">

          <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">

            <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a9c2] bg-[#8d3566]/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#7b2857]">
              💗 Preparing for birth
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#3f1730] mt-5">
              Preparing for Birth
            </h1>

            <p className="text-xl text-[#8d3566] mt-4 font-medium max-w-xl">
              Plan ahead for a safer, calmer birth experience.
            </p>

            <p className="text-base text-slate-600 mt-4 max-w-xl leading-relaxed">
              Being prepared can help you feel more confident, make informed
              choices and ensure that you and your baby can get the care and
              support you need.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <Link
                to="/dashboard"
                className="rounded-full bg-[#8d3566] text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-[#8d3566]/20 hover:bg-[#70284f] transition-colors"
              >
                📅 Track my pregnancy
              </Link>

              <Link
                to="/get-help"
                className="rounded-full border border-[#c98eac] bg-white/70 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-[#8d3566] hover:bg-white transition-colors"
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


      {/* WHY PREPARATION MATTERS */}
      <section className="mt-6 grid lg:grid-cols-[1fr_340px] gap-5">

        <div className="rounded-[24px] border border-[#e4cfdb] bg-white/70 backdrop-blur-xl p-6 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-[#6f214e]">
            Why preparation matters
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {[
              'Helps you make informed choices',
              'Can reduce fear and uncertainty',
              'Supports a safer birth experience',
              'Prepares you for unexpected situations',
              'Helps you know what you and your baby need',
              'Makes it easier to communicate with your care team',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#ead8e2] bg-[#fbf5f8]/80 backdrop-blur-sm p-4"
              >
                <p className="text-sm font-medium text-ink flex gap-2">
                  <span className="text-[#a13d70]">●</span>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[#e6cddd] bg-gradient-to-r from-[#f5e4ed] to-[#fbf5f8] p-4">
            <p className="font-semibold text-[#742653]">
              🌸 Plan, prepare and stay positive.
            </p>
            <p className="text-sm text-ink-soft mt-1">
              You do not need to know exactly how birth will unfold. Prepare
              for different possibilities and stay connected with your care
              team.
            </p>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#e4cfdb] bg-white/70 backdrop-blur-xl p-6 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-[#6f214e]">
            📋 Birth preparation checklist
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            {[
              'Antenatal visits up to date',
              'Know the signs of labor',
              'Choose a skilled birth attendant',
              'Know where you will give birth',
              'Prepare your birth preferences',
              'Pack your bag early',
              'Arrange transport',
              'Identify a birth companion',
              'Save emergency contacts',
              'Stay rested and informed',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#a13d70] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-2xl bg-[#f5e6ee] border border-[#e6cedc] p-4">
            <p className="text-sm font-semibold text-[#742653]">
              💬 Discuss your plan with your healthcare provider.
            </p>
          </div>
        </div>
      </section>


      {/* FOCUS AREAS */}
      <section className="mt-8">
        <h2 className="font-display text-2xl text-[#6f214e] font-semibold">
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
                  ? 'border-[#b96b93] bg-[#ead0df] shadow-md'
                  : 'border-[#ead8e2] bg-white/65 hover:bg-[#f7edf2]'
              }`}
            >
              <span className="text-2xl block">{topic.icon}</span>

              <span className="text-xs font-semibold text-[#6f214e] mt-2 block leading-tight">
                {topic.title}
              </span>
            </button>
          ))}
        </div>
      </section>


      {/* AT A GLANCE */}
      <section className="mt-8 rounded-[24px] border border-[#e5d2dd] bg-gradient-to-r from-[#fbf4f8] to-[#f3e2eb] backdrop-blur-xl p-6">

        <h2 className="font-display text-2xl font-semibold text-[#6f214e]">
          Preparing for birth at a glance
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">

          {[
            ['📅', 'Attend all antenatal appointments.'],
            ['〽️', 'Know the signs of labor and when to seek care.'],
            ['🏥', 'Know where you will give birth.'],
            ['👜', 'Pack your bag early for you and baby.'],
            ['🚗', 'Plan transport and have a backup.'],
            ['👥', 'Plan who will support you.'],
            ['💗', 'Stay calm, positive and informed.'],
            ['👶', 'Prepare a safe environment for baby.'],
          ].map(([icon, text]) => (
            <div
              key={text}
              className="rounded-2xl border border-[#e5d4df] bg-white/60 backdrop-blur-md p-4 flex gap-3 items-center"
            >
              <span className="text-xl">{icon}</span>
              <p className="text-sm text-ink-soft">{text}</p>
            </div>
          ))}

        </div>
      </section>


      {/* DETAILED CONTENT */}
      <section className="mt-8">

        <h2 className="font-display text-2xl text-[#6f214e] font-semibold">
          Preparing for birth: key steps
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">

          {TOPICS.map((topic, index) => {
            const isOpen = openId === topic.id

            return (
              <article
                key={topic.id}
                className={`rounded-[24px] border overflow-hidden backdrop-blur-xl transition-all ${
                  isOpen
                    ? 'border-[#c47b9e] bg-[#fbf2f6] shadow-md'
                    : 'border-[#e5d6df] bg-white/65 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenId(isOpen ? null : topic.id)
                  }
                  className="w-full text-left p-5"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">

                    <div className="h-10 w-10 shrink-0 rounded-full bg-[#ead0df] flex items-center justify-center text-[#7b2857] font-bold">
                      {index + 1}
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center gap-3">
                        <span className="text-2xl">
                          {topic.icon}
                        </span>

                        <h3 className="font-display text-lg font-semibold text-[#54203d]">
                          {topic.title}
                        </h3>
                      </div>

                      <p className="text-sm text-ink-soft mt-2">
                        {topic.summary}
                      </p>

                      <p className="text-xs font-semibold text-[#9a3d6d] mt-3">
                        {isOpen ? 'Close ↑' : 'Explore →'}
                      </p>

                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#e5d3de] bg-white/45 backdrop-blur-md p-5">

                    <div className="text-sm text-ink-soft leading-relaxed">
                      {topic.content}
                    </div>

                    <SourceTag source={topic.source} />

                  </div>
                )}
              </article>
            )
          })}

        </div>
      </section>


      {/* WARNING SIGNS */}
      <section className="mt-8 grid lg:grid-cols-2 gap-5">

        <div className="rounded-[24px] border border-[#e8ccd8] bg-[#fff7fa]/80 backdrop-blur-xl p-6">

          <h2 className="font-display text-xl font-semibold text-[#8c2855]">
            ⚠️ Signs labor may be starting
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>• Regular contractions that become stronger and closer together.</li>
            <li>• Lower back pain or pressure.</li>
            <li>• Increasing pelvic pressure.</li>
            <li>• A bloody show or blood-stained mucus.</li>
            <li>• Your waters breaking or leaking fluid.</li>
            <li>• Increasing urge to push or bear down.</li>
          </ul>

        </div>


        <div className="rounded-[24px] border border-[#edc6d2] bg-gradient-to-br from-[#fff4f7] to-[#f5e0e9] backdrop-blur-xl p-6">

          <h2 className="font-display text-xl font-semibold text-[#a3284f]">
            🚨 When to seek urgent help
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>• Vaginal bleeding.</li>
            <li>• Severe or persistent abdominal pain.</li>
            <li>• Severe headache or blurred vision.</li>
            <li>• Fever or chills.</li>
            <li>• Severe vomiting or inability to keep fluids down.</li>
            <li>• Leakage of fluid when you are concerned.</li>
            <li>• Reduced or no baby movements later in pregnancy.</li>
            <li>• Shortness of breath or chest pain.</li>
          </ul>

          <Link
            to="/get-help"
            className="inline-flex mt-5 rounded-full bg-[#8d3566] text-white px-6 py-3 text-sm font-semibold shadow-md hover:bg-[#70284f] transition-colors"
          >
            🚨 Get Help Now
          </Link>

        </div>

      </section>


      {/* BOTTOM SUPPORT */}
      <section className="mt-8 rounded-[24px] border border-[#d7a9c0] bg-gradient-to-r from-[#7f2d5a] via-[#9a3d6d] to-[#713052] text-white p-6 shadow-lg">

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
              className="rounded-full bg-white text-[#7f2d5a] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get Help
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}