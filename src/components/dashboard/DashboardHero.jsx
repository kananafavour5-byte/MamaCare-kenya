import pregnancyImage from '../../assets/dashboard-pregnancy.jpg'
import newMomImage from '../../assets/dashboard-newmom.jpg'

export default function DashboardHero({
  isPregnant,
  week,
  ageDays,
  formatBabyAge,
  band,
  progress,
}) {
  const image = isPregnant ? pregnancyImage : newMomImage

  return (
    <section
      className={`relative overflow-hidden rounded-[28px] border min-h-[450px] ${
        isPregnant
          ? 'border-purple-line bg-purple-mist/40'
          : 'border-pink/20 bg-peach-soft/40'
      }`}
    >
      {/* Image on the right */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[62%] object-cover object-[center_75%] "
      />

      {/* Smooth blend from the text area into the photograph */}
      <div
        className={`absolute inset-0 ${
          isPregnant
            ? 'bg-gradient-to-r from-purple-mist via-purple-mist/85 via-45% to-transparent'
            : 'bg-gradient-to-r from-peach-soft via-peach-soft/80 via-45% to-transparent'
        }`}
      />

      {/* Soft warmth over the image */}
      <div className="absolute right-0 top-0 h-full w-[55%] bg-peach-soft/10" />

      {/* Content */}
      <div className="relative z-10 min-h-[450px] flex items-center px-6 py-8 sm:px-8">
        <div className="w-full md:w-[55%]">

          <p
            className={`font-mono text-xs uppercase tracking-wide font-semibold ${
              isPregnant ? 'text-purple-deep' : 'text-peach'
            }`}
          >
            {isPregnant
              ? 'Your pregnancy journey'
              : "Your baby's journey"}
          </p>

          <h2 className="font-display text-4xl sm:text-5xl text-purple-deep font-semibold mt-5">
            {isPregnant
              ? `Week ${week}`
              : formatBabyAge(ageDays)}
          </h2>

          <p className="font-display text-xl sm:text-2xl text-ink font-semibold mt-2 max-w-md">
            {band.title}
          </p>

          <div className="mt-7 max-w-md">
            <div className="h-3 rounded-full bg-white/60 overflow-hidden shadow-sm">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink to-purple transition-all duration-500"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            <p className="font-display font-semibold text-purple-deep mt-2">
              {isPregnant
                ? `${week} of 40 weeks`
                : formatBabyAge(ageDays)}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}