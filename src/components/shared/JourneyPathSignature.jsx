import pregnancyImage from '../../assets/dashboard-pregnancy-bg.jpg'
import newMomImage from '../../assets/dashboard-newmom-bg.jpg'

export default function JourneyPathSignature({
  progress = 0,
  label,
  stage = 'pregnant',
}) {
  const clamped = Math.min(Math.max(progress, 0), 1)
  const isPregnant = stage === 'pregnant'
  const image = isPregnant ? pregnancyImage : newMomImage

  const width = 900
  const height = 220
  const amplitude = 42
  const cycles = 1.6
  const steps = 140

  const points = []

  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = t * width
    const y =
      height / 2 +
      Math.sin(t * Math.PI * cycles) * amplitude

    points.push([x, y])
  }

  const pathD = points
    .map(
      ([x, y], i) =>
        `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    )
    .join(' ')

  const markerIndex = Math.round(clamped * steps)
  const [markerX, markerY] = points[markerIndex]

  const stages = isPregnant
    ? [
        { x: 0.08, title: '1ST TRIMESTER', range: '0 – 13 weeks', icon: '🌱' },
        { x: 0.42, title: '2ND TRIMESTER', range: '14 – 27 weeks', icon: '🌱' },
        { x: 0.74, title: '3RD TRIMESTER', range: '28 – 40 weeks', icon: '✿' },
      ]
    : [
        { x: 0.08, title: 'NEWBORN', range: '0 – 2 weeks', icon: '🌱' },
        { x: 0.34, title: 'GROWING', range: '2 – 8 weeks', icon: '🌱' },
        { x: 0.58, title: 'DISCOVERING', range: '2 – 6 months', icon: '♥' },
        { x: 0.82, title: 'LEARNING', range: '6 – 12 months', icon: '★' },
      ]

  const getPoint = (ratio) => {
    const index = Math.round(ratio * steps)
    return points[index]
  }

  return (
    <section className="relative overflow-hidden rounded-[28px] min-h-[420px] border border-purple-line">

      {/* Full background image */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_75%]"
      />

      {/* Smooth full-card blend */}
      <div
        className={`absolute inset-0 ${
          isPregnant
            ? 'bg-gradient-to-r from-purple-mist via-purple-mist/95 via-45% via-purple-mist/65 via-65% to-purple-mist/10'
            : 'bg-gradient-to-r from-peach-soft via-peach-soft/95 via-45% via-peach-soft/60 via-65% to-peach-soft/10'
        }`}
      />

      {/* Soft overall haze */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10 px-6 py-7 sm:px-8 sm:py-8">

        {/* Heading */}
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-purple-deep/70">
          {isPregnant
            ? 'Your pregnancy journey'
            : "Your baby's journey"}
        </p>

        <h2 className="font-display text-2xl sm:text-3xl text-purple-deep font-semibold mt-1">
          {isPregnant
            ? 'Your pregnancy progress'
            : "Your baby's journey"}
        </h2>

        <p className="text-ink-soft mt-1">
          {isPregnant
            ? "You're getting closer to meeting your baby. 💗"
            : 'Every day brings something new. 💗'}
        </p>

        {/* Stage markers */}
        <div className="relative mt-7 max-w-[760px]">

          {stages.map((stageItem) => {
            const [x, y] = getPoint(stageItem.x)

            return (
              <div
                key={stageItem.title}
                className="absolute"
                style={{
                  left: `${stageItem.x * 100}%`,
                  top: `${y - 72}px`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="text-center whitespace-nowrap">
                  <p className="font-display text-xs font-semibold text-purple-deep">
                    {stageItem.title}
                  </p>

                  <p className="font-mono text-[10px] text-purple-deep/70 mt-0.5">
                    {stageItem.range}
                  </p>

                  <div className="mx-auto mt-2 h-9 w-9 rounded-full bg-white shadow-md flex items-center justify-center text-pink border border-white">
                    <span>{stageItem.icon}</span>
                  </div>

                  <div className="mx-auto h-6 w-px border-l border-dashed border-purple/50" />
                </div>
              </div>
            )
          })}

          {/* SVG journey */}
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-[250px] sm:h-[270px]"
            role="img"
            aria-label={label}
          >
            <defs>
              <linearGradient
                id={`journeyGradient-${stage}`}
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="var(--color-pink)"
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-purple)"
                />
              </linearGradient>
            </defs>

            {/* Remaining path */}
            <path
              d={pathD}
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Completed path */}
            <path
              d={pathD}
              fill="none"
              stroke={`url(#journeyGradient-${stage})`}
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={`${clamped * width * 1.55} ${width * 2}`}
            />

            {/* Stage dots */}
            {stages.map((stageItem) => {
              const [x, y] = getPoint(stageItem.x)

              return (
                <circle
                  key={stageItem.title}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="white"
                  stroke="var(--color-purple)"
                  strokeWidth="2"
                />
              )
            })}

            {/* Current position */}
            <circle
              cx={markerX}
              cy={markerY}
              r="21"
              fill="white"
              stroke="var(--color-purple)"
              strokeWidth="5"
            />

            <circle
              cx={markerX}
              cy={markerY}
              r="8"
              fill="var(--color-pink)"
            />
          </svg>

          {/* Current position callout */}
          <div
            className="absolute z-20"
            style={{
              left: `${clamped * 100}%`,
              top: `${markerY - 28}px`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="rounded-2xl bg-white px-5 py-3 shadow-md text-center whitespace-nowrap">
              <p className="font-display font-bold text-purple-deep">
                {label}
              </p>

              <p className="text-xs font-semibold text-pink mt-0.5">
                You are here!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom status */}
        <div className="flex justify-center -mt-1">
          <div className="inline-flex items-center gap-4 rounded-full bg-white/90 backdrop-blur-sm border border-white px-5 py-2.5 shadow-md">

            <span className="font-semibold text-purple-deep">
              {isPregnant
                ? `${Math.max(0, 40 - Math.round(clamped * 40))} weeks to go`
                : label}
            </span>

            <span className="h-5 w-px bg-purple-line" />

            <span className="font-semibold text-purple-deep">
              {isPregnant
                ? '💗 Almost there!'
                : '💗 You’re doing amazing!'}
            </span>

          </div>
        </div>

      </div>
    </section>
  )
}