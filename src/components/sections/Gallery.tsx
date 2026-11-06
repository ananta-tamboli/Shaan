'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'
import { galleryItems } from '@/content/gallery'
import { useLang } from '@/context/LanguageContext'

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLang()

  function openLightbox(index: number) {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  function closeLightbox() {
    setIsOpen(false)
  }

  function nextPhoto() {
    setCurrentIndex((i) => (i + 1) % galleryItems.length)
  }

  function prevPhoto() {
    setCurrentIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-script text-3xl sm:text-4xl text-amber-600">{t.galleryScript}</span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 mt-1">{t.galleryH2}</h2>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-3" />
        <p className="font-serif italic text-stone-600 text-lg mt-3">
          {t.gallerySubtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {galleryItems.map((item, index) => {
          const imgSrc = item.localSrc ?? item.src
          return (
            <button
              key={index}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-md border border-amber-200/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              onClick={() => openLightbox(index)}
              aria-label={`View photo: ${item.caption}`}
            >
              <Image
                src={imgSrc}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-xl" aria-hidden="true">🔍</span>
                  <p className="font-serif text-sm mt-1">{item.caption}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <Lightbox
        isOpen={isOpen}
        currentIndex={currentIndex}
        items={galleryItems}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </section>
  )
}
