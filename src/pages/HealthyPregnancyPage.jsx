import { Link } from 'react-router-dom'
import SourceTag from '../components/shared/SourceTag.jsx'
import guidePregnancy from '../assets/guide-pregnancy.jpg'

const TOPICS = [
  {
    id: 'nutrition',
    icon: '🥗',
    title: 'Nutrition',
    summary: 'Eating well gives you and your baby important nutrients for pregnancy and growth.',
    content: (
      <>
        <p>
          A varied, balanced diet during pregnancy helps provide the energy,
          protein, vitamins and minerals needed for your health and your baby's
          development.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Eat a variety of foods from different food groups every day.</li>
          <li>Include vegetables, fruits, whole grains, beans and other legumes.</li>
          <li>Include protein foods such as eggs, fish, meat, poultry and beans.</li>
          <li>Choose safe and nutritious dairy or fortified alternatives.</li>
          <li>Eat smaller, frequent meals if nausea makes large meals difficult.</li>
          <li>Drink safe, clean water regularly throughout the day.</li>
          <li>Limit foods and drinks that are very high in added sugar or salt.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-lime-50 border border-lime-100 p-4">
          <p className="font-semibold text-olive-800">
            Why it matters
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Good nutrition supports your energy, immunity and wellbeing while
            providing nutrients your baby needs to grow.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'activity',
    icon: '🚶🏽‍♀️',
    title: 'Physical activity',
    summary: 'Safe movement can support your physical and emotional wellbeing during pregnancy.',
    content: (
      <>
        <p>
          For most healthy pregnancies, regular moderate physical activity is
          beneficial. Your healthcare provider can help you choose activities
          appropriate for your pregnancy.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Aim for regular moderate activity when medically appropriate.</li>
          <li>Walking is a simple way to stay active.</li>
          <li>Gentle stretching and pregnancy-appropriate exercises may help.</li>
          <li>Drink enough fluids and avoid becoming overheated.</li>
          <li>Listen to your body and rest when you need to.</li>
          <li>Avoid activities with a high risk of falling or abdominal injury.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-olive-50 border border-olive-100 p-4">
          <p className="font-semibold text-olive-800">
            Check first if you have concerns
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Some medical or pregnancy conditions require modified activity or
            additional advice from your healthcare professional.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'supplements',
    icon: '💊',
    title: 'Supplements',
    summary: 'Some vitamins and minerals are especially important during pregnancy.',
    content: (
      <>
        <p>
          Pregnancy increases the need for certain nutrients. Your healthcare
          provider can recommend the supplements and doses appropriate for you.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl bg-amber-50 p-4">
            <p className="font-semibold text-ink">Folic acid</p>
            <p className="text-sm text-ink-soft mt-1">
              Folic acid is important before conception and during early
              pregnancy because it helps reduce the risk of neural tube
              defects.
            </p>
          </div>

          <div className="rounded-2xl bg-lime-50 p-4">
            <p className="font-semibold text-ink">Iron</p>
            <p className="text-sm text-ink-soft mt-1">
              Iron is important for making haemoglobin and preventing or
              treating iron-deficiency anaemia when recommended.
            </p>
          </div>

          <div className="rounded-2xl bg-olive-50 p-4">
            <p className="font-semibold text-ink">Other nutrients</p>
            <p className="text-sm text-ink-soft mt-1">
              Depending on your diet, location and health needs, your provider
              may recommend other supplements such as calcium, vitamin D or
              iron-containing antenatal supplements.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-white border border-olive-100 p-4">
          <p className="font-semibold text-olive-800">
            Do not take extra supplements without advice.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Some vitamins and herbal products can be harmful in high doses or
            during pregnancy.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'harmful',
    icon: '🚫',
    title: 'Avoid harmful substances',
    summary: 'Protect yourself and your baby by avoiding substances and exposures that can cause harm.',
    content: (
      <>
        <p>
          Pregnancy is a time to avoid substances that can affect your health
          or your baby's development.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Avoid alcohol during pregnancy.</li>
          <li>Do not smoke or use tobacco products.</li>
          <li>Avoid recreational or illegal drugs.</li>
          <li>Avoid second-hand tobacco smoke where possible.</li>
          <li>Do not use medicines, herbal products or supplements without appropriate advice.</li>
          <li>Tell your healthcare provider about all medicines you take.</li>
          <li>Take reasonable precautions around pesticides and harmful chemicals.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-yellow-50 border border-yellow-100 p-4">
          <p className="font-semibold text-ink">
            Ask before taking something new.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Your healthcare provider or pharmacist can help you check whether a
            medicine or product is appropriate during pregnancy.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'emotional',
    icon: '💚',
    title: 'Emotional wellbeing',
    summary: 'Your mental and emotional health is an important part of pregnancy care.',
    content: (
      <>
        <p>
          Pregnancy can bring happiness, worry, stress and many other emotions.
          Looking after your emotional wellbeing is part of looking after
          yourself and your baby.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Talk to someone you trust about how you are feeling.</li>
          <li>Ask for help when responsibilities feel overwhelming.</li>
          <li>Make time for rest and activities that help you relax.</li>
          <li>Stay connected with supportive family and friends.</li>
          <li>Tell your healthcare provider if sadness, anxiety or fear becomes difficult to manage.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
          <p className="font-semibold text-olive-800">
            You deserve support.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Asking for emotional or mental-health support is a normal part of
            caring for yourself during pregnancy.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'infection',
    icon: '🛡️',
    title: 'Infection prevention',
    summary: 'Simple precautions can help protect you and your baby from infections.',
    content: (
      <>
        <p>
          Preventing infections is an important part of pregnancy care.
          Recommended precautions depend on your environment and local health
          guidance.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Wash your hands regularly with soap and clean water.</li>
          <li>Use safe drinking water and properly prepared food.</li>
          <li>Follow recommended vaccination advice from your provider.</li>
          <li>Avoid close contact with people who are seriously unwell when possible.</li>
          <li>Follow malaria prevention advice in malaria-risk areas.</li>
          <li>Attend recommended antenatal appointments and testing.</li>
          <li>Practice safer sex and discuss STI testing with your provider when appropriate.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-green-50 border border-green-100 p-4">
          <p className="font-semibold text-olive-800">
            Prevention matters.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Tell your healthcare provider promptly if you develop symptoms of
            an infection or have been exposed to an important infectious
            illness.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'rest',
    icon: '🌙',
    title: 'Rest and sleep',
    summary: 'Pregnancy can be tiring, so make rest part of your routine.',
    content: (
      <>
        <p>
          Tiredness is common during pregnancy. Your changing body and the
          physical demands of pregnancy can make adequate rest especially
          important.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Give yourself enough time to sleep.</li>
          <li>Rest when your body tells you that you need to.</li>
          <li>Create a calm bedtime routine where possible.</li>
          <li>Ask for practical help when pregnancy fatigue becomes difficult.</li>
          <li>Use comfortable pillows or pregnancy-supportive positions as your body changes.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-sage-50 border border-sage-100 p-4">
          <p className="font-semibold text-olive-800">
            Listen to your body.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Persistent or extreme tiredness should be discussed with your
            healthcare provider, especially if it occurs with other symptoms.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },

  {
    id: 'hygiene',
    icon: '💧',
    title: 'Personal hygiene',
    summary: 'Good hygiene helps keep you comfortable and reduces the spread of infections.',
    content: (
      <>
        <p>
          Everyday hygiene practices can help protect your health during
          pregnancy.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft list-disc list-inside">
          <li>Wash your hands regularly.</li>
          <li>Keep your body and clothes clean and comfortable.</li>
          <li>Brush your teeth twice a day with fluoride toothpaste.</li>
          <li>Attend dental care when needed.</li>
          <li>Keep food preparation areas clean.</li>
          <li>Drink safe, clean water.</li>
          <li>Follow local guidance on sanitation and infection prevention.</li>
        </ul>

        <div className="mt-5 rounded-2xl bg-sky-50 border border-sky-100 p-4">
          <p className="font-semibold text-olive-800">
            Hygiene is everyday prevention.
          </p>
          <p className="text-sm text-ink-soft mt-1">
            Small habits practiced consistently can help protect you and your
            family.
          </p>
        </div>
      </>
    ),
    source: 'WHO',
  },
]

const WARNING_SIGNS = [
  'Severe headache or blurred vision',
  'Vaginal bleeding',
  'Severe abdominal pain',
  'Fever or chills',
  'Severe vomiting or inability to keep fluids down',
  'Swelling of the face, hands or feet that is sudden or severe',
  'Fits or convulsions',
  'Reduced or no baby movements later in pregnancy',
  'Leakage of fluid from the vagina',
  'Shortness of breath or chest pain',
]

export default function HealthyPregnancyPage() {
  return (
    <div className="pb-12 max-w-6xl mx-auto">

      {/* Back button */}
      <Link
        to="/journey"
        className="inline-flex items-center gap-2 mb-5 text-sm font-semibold text-olive-800 hover:text-olive-950 transition-colors"
      >
        ← Back to Journey
      </Link>

      {/* HERO */}
      <section className="rounded-[28px] overflow-hidden border border-lime-100 bg-gradient-to-br from-lime-50 via-white to-olive-50">

        <div className="grid lg:grid-cols-2">

          <div className="px-6 py-10 sm:px-10 flex flex-col justify-center">

            <p className="inline-flex w-fit rounded-full bg-olive-700 text-white px-4 py-2 font-mono text-xs uppercase tracking-widest">
              🌿 Wellbeing & Lifestyle
            </p>

            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-olive-900 mt-5">
              Healthy Pregnancy
            </h1>

            <p className="text-xl text-olive-800 mt-3 font-medium">
              Daily choices for a healthier you and baby
            </p>

            <p className="text-base text-slate-700 mt-4 max-w-xl leading-relaxed">
              Simple, consistent habits can help you feel better, prevent
              problems and support your baby's growth.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/dashboard"
                className="rounded-full bg-olive-700 text-white px-5 py-2.5 text-sm font-semibold hover:bg-olive-800 transition-colors"
              >
                📊 Track my pregnancy
              </Link>

              <Link
                to="/get-help"
                className="rounded-full border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                🚨 Get Help
              </Link>
            </div>
          </div>

          <div className="min-h-[300px] lg:min-h-[430px]">
            <img
              src={guidePregnancy}
              alt="Pregnant woman enjoying a healthy pregnancy"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="mt-8">

        <h2 className="font-display text-2xl text-olive-900 font-semibold">
          Focus Areas
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-4">

          {TOPICS.map((topic) => (
            <a
              key={topic.id}
              href={`#${topic.id}`}
              className="rounded-2xl border border-lime-100 bg-white p-4 text-center hover:bg-lime-50 transition-colors"
            >
              <div className="text-3xl">
                {topic.icon}
              </div>

              <p className="text-xs font-semibold text-olive-900 mt-2 leading-tight">
                {topic.title}
              </p>
            </a>
          ))}

        </div>

        <div className="mt-4 rounded-2xl bg-lime-50 border border-lime-100 p-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-semibold text-olive-900">
              🌿 Healthy habits today, healthier tomorrow.
            </p>

            <p className="text-sm text-ink-soft mt-1">
              Small steps every day make a big difference.
            </p>
          </div>

          <SourceTag source="WHO | Kenya MOH" />
        </div>

      </section>

      {/* CHECKLIST */}
      <section className="mt-8 grid lg:grid-cols-3 gap-5">

        <div className="lg:col-span-2 rounded-[24px] border border-lime-100 bg-white p-6">

          <h2 className="font-display text-2xl text-olive-900 font-semibold">
            Healthy pregnancy at a glance
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">

            {[
              ['🥗', 'Eat well', 'Choose a variety of nutritious foods.'],
              ['🚶🏽‍♀️', 'Move safely', 'Stay active when appropriate.'],
              ['💊', 'Take prescribed supplements', 'Follow your provider’s advice.'],
              ['🚫', 'Avoid harmful substances', 'Avoid alcohol, tobacco and drugs.'],
              ['🌙', 'Rest well', 'Sleep and take breaks.'],
              ['🛡️', 'Prevent infections', 'Practice good hygiene and prevention.'],
              ['💧', 'Stay hydrated', 'Drink safe fluids regularly.'],
              ['💚', 'Care for yourself', 'Ask for support when needed.'],
            ].map(([icon, title, text]) => (

              <div
                key={title}
                className="rounded-2xl bg-lime-50 border border-lime-100 p-4"
              >
                <div className="text-2xl">
                  {icon}
                </div>

                <p className="font-semibold text-olive-900 mt-2">
                  {title}
                </p>

                <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                  {text}
                </p>
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-[24px] border border-olive-100 bg-olive-50 p-6">

          <h2 className="font-display text-xl text-olive-900 font-semibold">
            🌿 Healthy habits checklist
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-ink-soft">

            {[
              'Eat a variety of nutritious foods',
              'Take recommended supplements',
              'Stay active in safe ways',
              'Avoid alcohol, tobacco and drugs',
              'Get enough rest and sleep',
              'Manage stress and seek support',
              'Attend recommended antenatal care',
              'Practice good hygiene',
            ].map((item) => (

              <li
                key={item}
                className="flex items-start gap-2"
              >
                <span className="text-olive-700 font-bold">
                  ✓
                </span>

                <span>
                  {item}
                </span>
              </li>

            ))}

          </ul>

          <div className="mt-5 rounded-2xl bg-white/70 border border-olive-100 p-4">
            <p className="text-sm font-semibold text-olive-900">
              💬 Ask your healthcare provider
            </p>

            <p className="text-xs text-ink-soft mt-1">
              Ask what is right for you and your pregnancy.
            </p>
          </div>

        </div>

      </section>

      {/* DETAILED TOPICS */}
      <section className="mt-8">

        <h2 className="font-display text-2xl text-olive-900 font-semibold">
          Healthy habits explained
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

          {TOPICS.map((topic, index) => (

            <article
              key={topic.id}
              id={topic.id}
              className="rounded-[22px] border border-lime-100 bg-white shadow-sm overflow-hidden scroll-mt-24"
            >

              <div className="p-5">

                <div className="flex items-center gap-3">

                  <span className="h-10 w-10 rounded-full bg-olive-700 text-white flex items-center justify-center text-lg">
                    {topic.icon}
                  </span>

                  <h3 className="font-display text-base font-semibold text-olive-900">
                    {index + 1}. {topic.title}
                  </h3>

                </div>

                <div className="mt-4 text-sm text-ink-soft leading-relaxed">
                  {topic.content}
                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* WARNING SIGNS */}
      <section className="mt-8 grid lg:grid-cols-3 gap-5">

        <div className="lg:col-span-2 rounded-[24px] border border-red-100 bg-white p-6">

          <h2 className="font-display text-2xl text-red-800 font-semibold">
            ⚠️ Warning signs
          </h2>

          <p className="text-sm text-ink-soft mt-2">
            Seek medical care urgently if you experience concerning symptoms.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">

            {WARNING_SIGNS.map((sign) => (

              <div
                key={sign}
                className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 p-3"
              >
                <span className="text-red-600 font-bold">
                  !
                </span>

                <p className="text-sm text-red-900">
                  {sign}
                </p>

              </div>

            ))}

          </div>

          <Link
            to="/get-help"
            className="inline-flex mt-5 rounded-full bg-red-600 text-white px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors"
          >
            🚨 Get Help
          </Link>

        </div>

        <div className="rounded-[24px] border border-olive-100 bg-olive-50 p-6">

          <h2 className="font-display text-xl text-olive-900 font-semibold">
            🌿 Daily healthy habits
          </h2>

          <div className="mt-5 space-y-5">

            <div>
              <p className="font-semibold text-olive-900">
                🥗 Eat well
              </p>
              <p className="text-sm text-ink-soft mt-1">
                Choose balanced meals and healthy snacks.
              </p>
            </div>

            <div>
              <p className="font-semibold text-olive-900">
                🚶🏽‍♀️ Move more
              </p>
              <p className="text-sm text-ink-soft mt-1">
                Stay active in safe ways.
              </p>
            </div>

            <div>
              <p className="font-semibold text-olive-900">
                🌙 Rest well
              </p>
              <p className="text-sm text-ink-soft mt-1">
                Sleep enough and take breaks.
              </p>
            </div>

            <div>
              <p className="font-semibold text-olive-900">
                💚 Stay positive
              </p>
              <p className="text-sm text-ink-soft mt-1">
                Take care of your mind and ask for support.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER MESSAGE */}
      <section className="mt-8 rounded-[22px] border border-lime-100 bg-lime-50 p-5 flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-3">

          <span className="text-3xl">
            💚
          </span>

          <div>
            <p className="font-display text-lg font-semibold text-olive-900">
              You are not alone.
            </p>

            <p className="text-sm text-ink-soft">
              We are here to support you at every step.
            </p>
          </div>

        </div>

        <Link
          to="/dashboard"
          className="text-sm font-semibold text-olive-800 hover:text-olive-950"
        >
          📊 Track your pregnancy →
        </Link>

      </section>

    </div>
  )
}