// Original illustration — an open book with a small heart, evoking
// "guide / knowledge" for the Guide page header, matching the app's
// illustration style elsewhere.
export default function GuideIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" className={className} role="presentation" aria-hidden="true">
      <ellipse cx="100" cy="140" rx="80" ry="10" fill="var(--color-purple-mist)" />
      <path d="M30 40c0-8 6-14 14-14h50v90H44c-8 0-14-6-14-14z" fill="var(--color-mint-soft)" stroke="var(--color-mint)" strokeWidth="3" />
      <path d="M170 40c0-8-6-14-14-14H106v90h50c8 0 14-6 14-14z" fill="var(--color-pink-soft)" stroke="var(--color-pink)" strokeWidth="3" />
      <line x1="100" y1="30" x2="100" y2="116" stroke="var(--color-purple-line)" strokeWidth="2" />
      <circle cx="100" cy="20" r="12" fill="var(--color-pink)" />
      <path d="M94 20c0-4 3-7 6-7s6 3 6 7c0 4-6 9-6 9s-6-5-6-9z" fill="white" />
    </svg>
  )
}
