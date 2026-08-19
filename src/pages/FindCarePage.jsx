import { Link } from 'react-router-dom'
import FacilitySearch from '../components/facility/FacilitySearch.jsx'
import findCareHero from '../assets/find-care-hero.jpg'

export default function FindCarePage() {
  return (
    <div>
      <section className="relative overflow-hidden rounded-[28px] border border-mint/30 bg-gradient-to-br from-mint-soft/70 via-white to-blue-50">
        <div className="grid lg:grid-cols-[55%_45%] min-h-[360px]">

          {/* Left content */}
          <div className="relative z-10 flex items-center px-6 py-9 sm:px-9 sm:py-10 lg:px-11">
            <div className="max-w-xl">

              <p className="font-mono text-xs uppercase tracking-[0.16em] text-mint-deep mb-3">
                Find Care
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] text-ink font-semibold">
                Nearby maternal &
                <br />
                newborn care
              </h1>

              <p className="text-ink-soft mt-4 max-w-lg leading-relaxed">
                Search for maternal and newborn health facilities across Kenya,
                filter by county or service, and see which accept
                <span className="font-semibold text-mint-deep"> Linda Mama</span>.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/85 border border-white px-4 py-2.5 text-sm font-semibold text-mint-deep shadow-sm">
                <span className="h-2 w-2 rounded-full bg-mint" />
                Find trusted care closer to you
              </div>

            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[250px] lg:min-h-[360px] overflow-hidden">

            <img
              src={findCareHero}
              alt="Pregnant mother near a healthcare facility"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Smooth transition from content into image */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-white/95 via-mint-soft/55 to-transparent" />

            {/* Gentle bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/25 to-transparent" />

          </div>

        </div>
      </section>

            <div className="mt-6">
        <FacilitySearch />
      </div>

      {/* Need help CTA */}
      <section className="mt-8 rounded-[24px] border border-mint/25 bg-gradient-to-r from-mint-soft/60 via-white to-blue-50/60 overflow-hidden">
        <div className="px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mint-deep/80">
              Need more support?
            </p>

            <h2 className="font-display text-xl sm:text-2xl text-ink font-semibold mt-1">
              Can't find what you need?
            </h2>

            <p className="text-sm text-ink-soft mt-2 max-w-xl leading-relaxed">
              Have a health concern or need help deciding where to go?
              Get guidance on what to do next.
            </p>
          </div>

          <Link
  to="/get-help"
            className="shrink-0 inline-flex items-center justify-center rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mint-deep transition-colors"
          >
            Get Help Now →
          </Link>

        </div>
      </section>

    </div>
  )
}