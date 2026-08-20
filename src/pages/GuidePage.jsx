import { Link } from 'react-router-dom'
import { GUIDE_CATEGORIES } from '../data/guideData.js'
import GuideCategoryCard from '../components/guide/GuideCategoryCard.jsx'
import MedicationSearch from '../components/medication/MedicationSearch.jsx'

import guideHero from '../assets/guide-hero.jpg'
import featuredPregnancy from '../assets/guide-featured-pregnancy.jpg'
import featuredFeeding from '../assets/guide-featured-feeding.jpg'
import featuredMotherCare from '../assets/guide-featured-mother-care.jpg'
import guideHelpDoctor from '../assets/guide-help-doctor.jpg'

export default function GuidePage() {
  


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

          <Link
  to="/guide"
  className="
    shrink-0
    text-sm
    font-semibold
    text-purple
    hover:text-purple-deep
    transition-colors
  "
>
  See all topics →
</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

         {GUIDE_CATEGORIES.map((category, index) => (
  <div
    key={category.id}
    className={
      index === GUIDE_CATEGORIES.length - 1
        ? 'lg:col-start-2'
        : ''
    }
  >
    <GuideCategoryCard category={category} />
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

             <Link
  to="/guide/pregnancy"
  className="mt-3 inline-flex text-xs font-semibold text-purple hover:text-purple-deep transition-colors"
>
  View topic →
</Link>

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

              <Link
  to="/guide/feeding"
  className="mt-3 inline-flex text-xs font-semibold text-purple hover:text-purple-deep transition-colors"
>
  View topic →
</Link>

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

              <Link
  to="/guide/mother"
  className="mt-3 inline-flex text-xs font-semibold text-purple hover:text-purple-deep transition-colors"
>
  View topic →
</Link>

            </div>

          </article>

        </div>
      </section>


      {/* MEDICATION INFORMATION */}
     <div className="mt-8 rounded-[24px] border border-purple-line bg-gradient-to-br from-purple-mist/60 via-pink-soft/30 to-peach-soft/25 p-5 sm:p-6">
  <MedicationSearch />
</div>

{/* NEED HELP NOW */}
<section className="mt-6 overflow-hidden rounded-[24px] border border-pink/25 bg-gradient-to-r from-pink-soft/60 via-purple-mist/45 to-peach-soft/50 shadow-sm">
  <div className="grid md:grid-cols-[42%_58%] items-stretch">

    {/* Doctor image */}
    <div className="relative min-h-[190px] md:min-h-[240px] overflow-hidden">
      <img
        src={guideHelpDoctor}
        alt="Healthcare professional speaking with a mother"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Soft image transition */}
      <div className="absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-pink-soft/70 via-pink-soft/25 to-transparent" />
    </div>

    {/* Content */}
    <div className="flex items-center px-6 py-7 sm:px-8 md:px-10">
      <div className="max-w-xl">

        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-pink-deep mb-2">
          Support is available
        </p>

        <h2 className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold">
          Need help now?
        </h2>

        <p className="text-sm sm:text-base text-ink-soft mt-2 leading-relaxed">
          Have a health concern or need help finding care? Connect with
          a healthcare professional or find a nearby facility for support.
        </p>

        <Link
  to="/get-help"
  className="inline-flex items-center justify-center mt-5 rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-deep transition-colors"
>
  Get Help Now →
</Link>

      </div>
    </div>

  </div>
</section>

    </div>
  )
}