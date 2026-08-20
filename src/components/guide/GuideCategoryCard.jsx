import { Link } from 'react-router-dom'

import guidePregnancy from '../../assets/guide-pregnancy.jpg'
import guideNewborn from '../../assets/guide-newborn.jpg'
import guideMotherCare from '../../assets/guide-mother-care.jpg'
import guideFeeding from '../../assets/guide-feeding.jpg'
import guideSleep from '../../assets/guide-sleep.jpg'
import guideHygiene from '../../assets/guide-hygiene.jpg'
import guideDevelopment from '../../assets/guide-development.jpg'

const CATEGORY_IMAGES = {
  Pregnancy: guidePregnancy,
  Newborn: guideNewborn,
  'Mother Care': guideMotherCare,
  Feeding: guideFeeding,
  Sleep: guideSleep,
  Hygiene: guideHygiene,
  Development: guideDevelopment,
}

const CATEGORY_DESCRIPTIONS = {
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

const COLOR_CLASSES = {
  purple: {
    panel: 'bg-purple-mist/90',
    border: 'border-purple/20',
    title: 'text-purple-deep',
    button: 'border-purple/25 text-purple-deep',
  },
  pink: {
    panel: 'bg-pink-soft/90',
    border: 'border-pink/25',
    title: 'text-purple-deep',
    button: 'border-pink/30 text-purple-deep',
  },
  peach: {
    panel: 'bg-peach-soft/90',
    border: 'border-peach/30',
    title: 'text-purple-deep',
    button: 'border-peach/35 text-purple-deep',
  },
  mint: {
    panel: 'bg-mint-soft/90',
    border: 'border-mint/25',
    title: 'text-purple-deep',
    button: 'border-mint/30 text-purple-deep',
  },
}

export default function GuideCategoryCard({ category }) {
  const image = CATEGORY_IMAGES[category.title]

  const description =
    CATEGORY_DESCRIPTIONS[category.title] ||
    'Helpful maternal and newborn health information.'

  const c =
    COLOR_CLASSES[category.color] ||
    COLOR_CLASSES.purple

  return (
    <Link
      to={`/guide/${category.id}`}
      className={`
        group
        block
        w-full
        text-left
        rounded-[20px]
        border
        ${c.border}
        overflow-hidden
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-purple/30
      `}
    >
      {/* Image */}
      <div className="relative h-[170px] overflow-hidden">
        <img
          src={image}
          alt={category.title}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Soft image-to-panel fade */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-white/10 to-white/75" />
      </div>

      {/* Pastel information panel */}
      <div className={`${c.panel} px-4 py-4`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`font-display text-lg font-semibold ${c.title}`}
            >
              {category.title}
            </h3>

            <p className="text-xs text-ink-soft mt-1 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Navigate to topic page */}
          <span
            className={`
              shrink-0
              rounded-full
              border
              ${c.button}
              bg-white/70
              px-3
              py-1.5
              text-[11px]
              font-semibold
              whitespace-nowrap
              transition-all
              duration-200
              group-hover:bg-white
            `}
          >
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}