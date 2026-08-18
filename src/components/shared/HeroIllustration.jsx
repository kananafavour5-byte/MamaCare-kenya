import heroMother from '../../assets/hero-mother.jpg'

export default function HeroIllustration({ className = '' }) {
  return (
    <div className={`${className} relative`}>
      <div className="absolute inset-4 rounded-full bg-purple-mist" />

      <img
        src={heroMother}
        alt="Mother during pregnancy"
className="relative w-full aspect-square object-cover rounded-[45%] shadow-xl"
      />
    </div>
  )
}