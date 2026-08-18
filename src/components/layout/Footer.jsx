import footerImage from '../../assets/footer-image.jpg'

export default function Footer() {
  return (
    <footer
      className="mt-16 relative overflow-hidden border-t border-purple-line bg-cover bg-right"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-pink/20 shadow-sm text-2xl">
                🌸
              </div>

              <div>
                <p className="font-display text-2xl text-purple-deep font-semibold">
                  MamaCare Kenya
                </p>

                <p className="text-sm text-ink-soft mt-0.5">
                  Supporting mothers and babies
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-ink-soft">
              This app provides general information and is not a substitute for
              professional medical advice, diagnosis, or treatment. Always
              consult a qualified healthcare professional with questions about
              your health or your baby's health.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 pt-5 border-t border-purple-line/70">
          <p className="font-mono text-xs uppercase tracking-wide text-purple-deep/70 leading-relaxed">
            Content adapted from WHO, UNICEF, and Kenya Ministry of Health public guidance
          </p>
        </div>

      </div>
    </footer>
  )
}