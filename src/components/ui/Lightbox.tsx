'use client'

import { useEffect, useRef } from 'react'
import type { GalleryItem } from '@/types/wedding'

interface LightboxProps {
  isOpen: boolean
  currentIndex: number
  items: GalleryItem[]
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ isOpen, currentIndex, items, onClose, onNext, onPrev }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  const item = items[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, onNext, onPrev])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen || !item) return null

  const imgSrc = item.localSrc ?? item.src

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].screenX }}
      onTouchEnd={(e) => {
        const diff = e.changedTouches[0].screenX - touchStartX.current
        if (Math.abs(diff) > 40) diff < 0 ? onNext() : onPrev()
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-3xl focus:outline-none z-10 leading-none"
        aria-label="Close lightbox"
      >
        &times;
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full focus:outline-none transition-colors"
        aria-label="Previous photo"
      >
        &#10094;
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full focus:outline-none transition-colors"
        aria-label="Next photo"
      >
        &#10095;
      </button>

      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={item.caption}
          className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
        />
        <p className="text-stone-300 font-serif italic text-base sm:text-lg mt-3 text-center">{item.caption}</p>
        <span className="text-stone-400 text-xs tracking-widest uppercase mt-1">
          {currentIndex + 1} / {items.length}
        </span>
      </div>
    </div>
  )
}
