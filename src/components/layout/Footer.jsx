

export default function Footer() {
  return (
    <footer 
  className="mt-16 relative overflow-hidden border-t border-purple-deep bg-purple-deep"
>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-pink/20 shadow-sm text-2xl">
                🌸
              </div>

              <div>
                <p className="font-display text-2xl text-white font-semibold">
                  MamaCare Kenya
                </p>

                <p className="text-sm text-white/70 mt-0.5">
                  Supporting mothers and babies
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
              This app provides general information and is not a substitute for
              professional medical advice, diagnosis, or treatment. Always
              consult a qualified healthcare professional with questions about
              your health or your baby's health.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <p className="font-mono text-xs uppercase tracking-wide text-white/60 leading-relaxed">
            Content adapted from WHO, UNICEF, and Kenya Ministry of Health public guidance
          </p>
        </div>

      </div>
    </footer>
  )
}