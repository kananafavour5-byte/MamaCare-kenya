import { useState } from 'react'
import { GUIDE_CATEGORIES } from '../data/guideData.js'
import GuideCategoryCard from '../components/guide/GuideCategoryCard.jsx'
import MedicationSearch from '../components/medication/MedicationSearch.jsx'

import guideHero from '../assets/guide-hero.jpg'
import featuredPregnancy from '../assets/guide-featured-pregnancy.jpg'
import featuredFeeding from '../assets/guide-featured-feeding.jpg'
import featuredMotherCare from '../assets/guide-featured-mother-care.jpg'

export default function GuidePage() {
  const [openId, setOpenId] = useState(null)
  

  const openCategory = (title) => {
  const category = GUIDE_CATEGORIES.find(
    (item) => item.title === title
  )

  if (category) {
    setOpenId(category.id)

    setTimeout(() => {
      document
        .getElementById(`guide-topic-${category.id}`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
    }, 50)
  }
}

  return (
    <div>

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[28px] border border-purple-line bg-purple-mist/55">
        <div className="grid lg:grid-cols-[55%_45%] min-h-[380px]">

          {/* Left content */}
          <div className="relative z-10 flex items-center px-6 py-9 sm:px-9 sm:py-10 lg:px-11">
            <div className="max-w-xl">

              <p className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep mb-3">
                📚 Guide
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] text-purple-deep font-semibold">
                Everything,
                <br />
                organized by topic
              </h1>

              <p className="text-ink-soft mt-4 max-w-lg leading-relaxed">
                Written from WHO, UNICEF, and Kenya Ministry of Health public
                guidance — always a starting point, never a replacement for a
                health professional.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/85 border border-white px-4 py-2.5 text-sm font-semibold text-purple-deep shadow-sm">
                <span>✓</span>
                Trusted health information, made simple
              </div>

            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[250px] lg:min-h-[330px] overflow-hidden">

            <img
              src={guideHero}
              alt="Pregnant mother"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Smooth transition between text and image */}
            <div className="absolute inset-y-0 left-0 w-48 sm:w-60 lg:w-72 bg-gradient-to-r from-purple-mist/95 via-purple-mist/55 to-transparent" />

          </div>

        </div>
      </div>


      {/* BROWSE BY TOPIC */}
      <section className="mt-8">

        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold">
              Browse by topic
            </h2>

            <p className="text-sm text-ink-soft mt-1">
              Explore trusted information by stage and subject.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpenId(null)}
            className="shrink-0 text-sm font-semibold text-purple hover:text-purple-deep transition-colors"
          >
            See all topics →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {GUIDE_CATEGORIES.map((category, index) => (
            <div
  key={category.id}
  id={`guide-topic-${category.id}`}
  className={
    index === GUIDE_CATEGORIES.length - 1
      ? 'lg:col-start-2'
      : ''
  }
>
              <GuideCategoryCard
                category={category}
                isOpen={openId === category.id}
                onToggle={() =>
                  setOpenId(
                    openId === category.id ? null : category.id
                  )
                }
              />
            </div>
          ))}

        </div>
      </section>


      {/* FEATURED READS */}
      <section className="mt-8 rounded-[24px] border border-purple-line bg-purple-mist/25 p-5 sm:p-6">

        <div className="flex items-center justify-between gap-4 mb-5">

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-purple-deep/70">
              Worth reading
            </p>

            <h2 className="font-display text-2xl text-purple-deep font-semibold mt-1">
              Featured reads
            </h2>
          </div>

          <span className="text-sm font-semibold text-purple">
            Trusted resources →
          </span>

        </div>


        <div className="grid md:grid-cols-3 gap-4">

          {/* Pregnancy */}
          <article className="group rounded-[18px] overflow-hidden bg-white/75 border border-white shadow-sm hover:shadow-md transition-shadow">

            <div className="relative h-[115px] overflow-hidden">

              <img
                src={featuredPregnancy}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent via-white/10 to-white/65" />

            </div>

            <div className="p-4">

              <p className="font-display text-lg font-semibold text-purple-deep leading-tight">
                Eating well during pregnancy
              </p>

              <p className="text-xs text-ink-soft mt-2 leading-relaxed">
                Practical guidance for nutrition and supporting a healthy
                pregnancy.
              </p>

              <button
                type="button"
                onClick={() => openCategory('Pregnancy')}
                className="mt-3 text-xs font-semibold text-purple hover:text-purple-deep transition-colors"
              >
                Read more →
              </button>

            </div>

          </article>


          {/* Feeding */}
          <article className="group rounded-[18px] overflow-hidden bg-white/75 border border-white shadow-sm hover:shadow-md transition-shadow">

            <div className="relative h-[115px] overflow-hidden">

              <img
                src={featuredFeeding}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent via-white/10 to-white/65" />

            </div>

            <div className="p-4">

              <p className="font-display text-lg font-semibold text-purple-deep leading-tight">
                Breastfeeding basics
              </p>

              <p className="text-xs text-ink-soft mt-2 leading-relaxed">
                Helpful guidance for feeding, breastfeeding and common
                questions.
              </p>

              <button
                type="button"
                onClick={() => openCategory('Feeding')}
                className="mt-3 text-xs font-semibold text-purple hover:text-purple-deep transition-colors"
              >
                Read more →
              </button>

            </div>

          </article>


          {/* Mother Care */}
          <article className="group rounded-[18px] overflow-hidden bg-white/75 border border-white shadow-sm hover:shadow-md transition-shadow">

            <div className="relative h-[170px] overflow-hidden">

              <img
                src={featuredMotherCare}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent via-white/10 to-white/65" />

            </div>

            <div className="p-4">

              <p className="font-display text-lg font-semibold text-purple-deep leading-tight">
                Caring for yourself
              </p>

              <p className="text-xs text-ink-soft mt-2 leading-relaxed">
                Support for postpartum recovery, emotional wellbeing and
                self-care.
              </p>

              <button
                type="button"
                onClick={() => openCategory('Mother Care')}
                className="mt-3 text-xs font-semibold text-purple hover:text-purple-deep transition-colors"
              >
                Read more →
              </button>

            </div>

          </article>

        </div>
      </section>


      {/* MEDICATION INFORMATION */}
     <div className="mt-8 rounded-[24px] border border-purple-line bg-gradient-to-br from-purple-mist/60 via-pink-soft/30 to-peach-soft/25 p-5 sm:p-6">
  <MedicationSearch />
</div>

    </div>
  )
}