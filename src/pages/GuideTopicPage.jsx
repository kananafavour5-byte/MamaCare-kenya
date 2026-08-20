import { Link, useParams } from 'react-router-dom'
import { GUIDE_CATEGORIES } from '../data/guideData.js'

import guidePregnancy from '../assets/guide-pregnancy.jpg'
import guideNewborn from '../assets/guide-newborn.jpg'
import guideMotherCare from '../assets/guide-mother-care.jpg'
import guideFeeding from '../assets/guide-feeding.jpg'
import guideSleep from '../assets/guide-sleep.jpg'
import guideHygiene from '../assets/guide-hygiene.jpg'
import guideDevelopment from '../assets/guide-development.jpg'

import SourceTag from '../components/shared/SourceTag.jsx'

const CATEGORY_IMAGES = {
  pregnancy: guidePregnancy,
  newborn: guideNewborn,
  mother: guideMotherCare,
  feeding: guideFeeding,
  sleep: guideSleep,
  hygiene: guideHygiene,
  development: guideDevelopment,
}

const COLOR_CLASSES = {
  purple: {
    background: 'bg-purple-mist/55',
    border: 'border-purple-line',
    accent: 'text-purple-deep',
    badge: 'bg-white/85 text-purple-deep border-purple/15',
  },
  pink: {
    background: 'bg-pink-soft/45',
    border: 'border-pink/20',
    accent: 'text-purple-deep',
    badge: 'bg-white/85 text-purple-deep border-pink/20',
  },
  peach: {
    background: 'bg-peach-soft/45',
    border: 'border-peach/25',
    accent: 'text-purple-deep',
    badge: 'bg-white/85 text-purple-deep border-peach/20',
  },
  mint: {
    background: 'bg-mint-soft/45',
    border: 'border-mint/20',
    accent: 'text-purple-deep',
    badge: 'bg-white/85 text-purple-deep border-mint/20',
  },
}

export default function GuideTopicPage() {
  const { categoryId } = useParams()

  const category = GUIDE_CATEGORIES.find(
    (item) => item.id === categoryId
  )

  // Handle an invalid URL gracefully
  if (!category) {
    return (
      <div className="py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-4xl mb-4">🌸</div>

          <h1 className="font-display text-2xl font-semibold text-purple-deep">
            Topic not found
          </h1>

          <p className="text-sm text-ink-soft mt-2">
            We couldn't find the guide topic you're looking for.
          </p>

          <Link
            to="/guide"
            className="
              inline-flex
              items-center
              justify-center
              mt-6
              rounded-full
              bg-purple
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              hover:bg-purple-deep
              transition-colors
            "
          >
            ← Back to Guide
          </Link>
        </div>
      </div>
    )
  }

  const image = CATEGORY_IMAGES[category.id]

  const c =
    COLOR_CLASSES[category.color] ||
    COLOR_CLASSES.purple

  return (
    <div className="pb-8">

      {/* BACK TO GUIDE */}
      <Link
        to="/guide"
        className="
          inline-flex
          items-center
          gap-1.5
          text-sm
          font-semibold
          text-purple
          hover:text-purple-deep
          transition-colors
          mb-4
        "
      >
        ← Back to Guide
      </Link>

      {/* TOPIC HERO */}
      <section
        className={`
          relative
          overflow-hidden
          rounded-[28px]
          border
          ${c.border}
          ${c.background}
        `}
      >
        <div className="grid md:grid-cols-[55%_45%] min-h-[300px]">

          {/* Text */}
          <div className="relative z-10 flex items-center px-6 py-8 sm:px-9 sm:py-10 lg:px-11">
            <div className="max-w-xl">

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">
                  {category.icon}
                </span>

                <span className="font-mono text-xs uppercase tracking-[0.16em] text-purple-deep/70">
                  Guide topic
                </span>
              </div>

              <h1
                className={`
                  font-display
                  text-3xl
                  sm:text-4xl
                  lg:text-[42px]
                  leading-[1.08]
                  ${c.accent}
                  font-semibold
                `}
              >
                {category.title}
              </h1>

              <p className="text-ink-soft mt-4 max-w-lg leading-relaxed">
                {getDescription(category.title)}
              </p>

              <div
                className={`
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  ${c.badge}
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  shadow-sm
                `}
              >
                <span>📖</span>
                {category.articles.length} articles in this topic
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[230px] md:min-h-[300px] overflow-hidden">
            <img
              src={image}
              alt={category.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-center
              "
            />

            <div
              className={`
                absolute
                inset-y-0
                left-0
                w-32
                sm:w-48
                md:w-56
                bg-gradient-to-r
                ${category.color === 'pink'
                  ? 'from-pink-soft/90'
                  : category.color === 'peach'
                    ? 'from-peach-soft/90'
                    : category.color === 'mint'
                      ? 'from-mint-soft/90'
                      : 'from-purple-mist/90'
                }
                via-transparent
                to-transparent
              `}
            />
          </div>

        </div>
      </section>

      {/* ARTICLES */}
      <section className="mt-8">

        <div className="mb-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-purple-deep/70">
            {category.articles.length} articles
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold mt-1">
            Articles in this topic
          </h2>

          <p className="text-sm text-ink-soft mt-1">
            Helpful information to support you through your journey.
          </p>
        </div>

        <div className="space-y-3">

          {category.articles.map((article, index) => (
            <article
              key={article.title}
              className="
                rounded-[18px]
                border
                border-purple-line
                bg-white/80
                shadow-sm
                px-4
                py-5
                sm:px-5
                transition-shadow
                hover:shadow-md
              "
            >

              <div className="flex gap-4">

                {/* Number */}
                <div className="
                  shrink-0
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  rounded-full
                  bg-purple-mist
                  text-purple-deep
                  font-display
                  font-semibold
                  text-sm
                ">
                  {index + 1}
                </div>

                {/* Article content */}
                <div className="min-w-0 flex-1">

                  <h3 className="
                    font-display
                    text-base
                    sm:text-lg
                    font-semibold
                    text-purple-deep
                  ">
                    {article.title}
                  </h3>

                  <p className="
                    text-sm
                    text-ink-soft
                    mt-2
                    leading-relaxed
                  ">
                    {article.body}
                  </p>

                  <div className="mt-3">
                    <SourceTag source={article.source} />
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* BOTTOM INFORMATION */}
      <section className="
        mt-6
        rounded-[20px]
        border
        border-purple/15
        bg-purple-mist/30
        px-5
        py-4
        sm:px-6
      ">
        <div className="flex gap-3 items-start">
          <span className="text-xl">💡</span>

          <p className="text-sm text-ink-soft leading-relaxed">
            This information is intended as a helpful starting point.
            For personal medical advice or concerns about your health or
            your baby, speak with a qualified healthcare professional.
          </p>
        </div>
      </section>

    </div>
  )
}

function getDescription(title) {
  const descriptions = {
    Pregnancy:
      'Antenatal care, pregnancy changes, nutrition and preparing for birth.',
    Newborn:
      'Early newborn care, feeding, growth, safety and common concerns.',
    'Mother Care':
      'Recovery, emotional wellbeing, self-care and postpartum support.',
    Feeding:
      'Practical guidance for breastfeeding, feeding patterns and nutrition.',
    Sleep:
      'Understanding infant sleep patterns and creating safe sleep habits.',
    Hygiene:
      'Everyday hygiene, cord care, bathing and keeping baby comfortable.',
    Development:
      'Early milestones, interaction, movement and developmental changes.',
  }

  return (
    descriptions[title] ||
    'Helpful maternal and newborn health information.'
  )
}