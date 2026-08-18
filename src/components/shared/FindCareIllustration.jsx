// Original illustration — a map pin with a small cross, evoking "find
// care nearby" for the Find Care page header.
export default function FindCareIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 200 160" className={className} role="presentation" aria-hidden="true">
      <ellipse cx="100" cy="140" rx="70" ry="9" fill="var(--color-purple-mist)" />
      <path
        d="M100 20c-28 0-50 22-50 50 0 38 50 74 50 74s50-36 50-74c0-28-22-50-50-50z"
        fill="var(--color-purple)"
      />
      <circle cx="100" cy="70" r="30" fill="white" />
      <rect x="92" y="55" width="16" height="30" rx="4" fill="var(--color-alert)" />
      <rect x="85" y="62" width="30" height="16" rx="4" fill="var(--color-alert)" />
      <circle cx="150" cy="40" r="8" fill="var(--color-pink-soft)" />
      <circle cx="45" cy="50" r="6" fill="var(--color-mint-soft)" />
    </svg>
  )
}
