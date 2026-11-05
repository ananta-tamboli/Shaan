import Image from 'next/image'
import { couple, milestones } from '@/content/couple'

export default function Story() {
  const { brideShort, groomShort, couplePhoto, couplePhotoAlt, coupleSince, storyQuote, storyParagraph1, storyParagraph2 } = couple

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="text-center mb-16">
        <span className="font-script text-3xl sm:text-4xl text-amber-600">The Journey of</span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 mt-1">Our Love Story</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-3" />
        <p className="font-serif italic text-stone-600 text-lg mt-4 max-w-xl mx-auto">
          {storyQuote}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Couple portrait */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/70 shadow-2xl bg-white aspect-[4/5]">
            <Image
              src={couplePhoto}
              alt={couplePhotoAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-script text-2xl text-amber-200">{brideShort} &amp; {groomShort}</p>
                <p className="text-xs uppercase tracking-wider font-light opacity-90">{coupleSince}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-800 leading-snug">
            From College Corridors to Sacred Pheras
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{storyParagraph1}</p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">{storyParagraph2}</p>

          {/* Milestones timeline */}
          <div className="border-l-2 border-amber-300 pl-4 space-y-4 pt-2">
            {milestones.map((m) => (
              <div key={m.title} className="relative">
                <span className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full ring-4 ring-white ${m.isHighlight ? 'bg-amber-600' : 'bg-amber-500'}`} />
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">{m.date}</div>
                <div className="font-semibold text-stone-800 text-sm">{m.title}</div>
                <div className="text-stone-500 text-xs mt-0.5">{m.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
