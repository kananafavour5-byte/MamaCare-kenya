import { Link } from 'react-router-dom'
import { EMERGENCY_NUMBERS } from '../data/getHelpData.js'
import MotherWarningSigns from '../components/help/MotherWarningSigns.jsx'
import NewbornWarningSigns from '../components/help/NewbornWarningSigns.jsx'
import getHelpHero from '../assets/get-help-hero.jpg'

export default function GetHelpPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[28px] border border-alert/20 bg-gradient-to-br from-peach-soft/70 via-white to-pink-soft/50">
        <div className="grid lg:grid-cols-[55%_45%] min-h-[360px]">

          {/* Left content */}
          <div className="relative z-10 flex items-center px-6 py-9 sm:px-9 sm:py-10 lg:px-11">
            <div className="max-w-xl">

              <p className="font-mono text-xs uppercase tracking-[0.16em] text-alert-deep mb-3">
                Get Help
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] text-ink font-semibold">
                Know when it's time
                <br />
                to seek care
              </h1>

              <div className="mt-3 h-1 w-12 rounded-full bg-alert" />

              <p className="text-ink-soft mt-4 max-w-lg leading-relaxed">
                Clear warning signs for you and your baby. This page doesn't
                diagnose anything, and it isn't a substitute for medical care.
                If something feels wrong, trust that instinct and reach out.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/80 border border-alert/15 px-4 py-2.5 text-sm font-semibold text-alert-deep shadow-sm">
                <span>♥</span>
                Your health. Your baby's health. We're here to support you.
              </div>

            </div>
          </div>

          {/* Right image */}
          <div className="relative min-h-[250px] lg:min-h-[360px] overflow-hidden">

            <img
              src={getHelpHero}
              alt="Mother holding her baby"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Smooth image transition */}
            <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-52 bg-gradient-to-r from-white/95 via-peach-soft/55 to-transparent" />

            {/* Gentle bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/20 to-transparent" />

          </div>

        </div>
      </section>


      {/* Emergency numbers */}
      <div className="rounded-[24px] bg-alert text-white p-5 sm:p-6 mt-6">
        <p className="font-display text-xl font-semibold">
          Emergency numbers (Kenya)
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {EMERGENCY_NUMBERS.map((n) => (
            <div
              key={n.label}
              className="rounded-[18px] bg-white/10 border border-white/15 p-4"
            >
              <p className="font-mono text-2xl font-semibold">
                {n.value}
              </p>

              <p className="text-sm text-white/85 mt-1">
                {n.label} — {n.note}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-white/75 mt-4 leading-relaxed">
          Outside major towns, ambulance response can be slower or
          unavailable — getting to the nearest facility by any safe,
          available transport is often the faster option.
        </p>
      </div>


      {/* Mother warning signs */}
      <section className="mt-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-alert-deep/80">
            Warning signs
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold mt-1">
            For you
          </h2>

          <p className="text-sm text-ink-soft mt-1">
            Signs that mean you should seek professional care.
          </p>
        </div>

        <div className="mt-4">
          <MotherWarningSigns />
        </div>
      </section>


      {/* Newborn warning signs */}
      <section className="mt-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-alert-deep/80">
            Warning signs
          </p>

          <h2 className="font-display text-2xl sm:text-3xl text-ink font-semibold mt-1">
            For your baby
          </h2>

          <p className="text-sm text-ink-soft mt-1">
            Signs that mean your newborn should be checked promptly.
          </p>
        </div>

        <div className="mt-4">
          <NewbornWarningSigns />
        </div>
      </section>


      {/* Find care CTA */}
      <div className="rounded-[24px] bg-purple-mist border border-purple/20 p-5 sm:p-6 mt-8 flex items-center justify-between flex-wrap gap-4">

        <div>
          <p className="font-display text-lg font-semibold text-ink">
            Not sure, but something feels off?
          </p>

          <p className="text-sm text-ink-soft mt-1">
            Trust that. You don't need to be certain to go get it checked.
          </p>
        </div>

        <Link
          to="/find-care"
          className="rounded-full bg-purple text-white text-sm font-semibold px-5 py-2.5 hover:bg-purple-deep transition-colors shrink-0"
        >
          Find a facility →
        </Link>

      </div>
    </div>
  )
}