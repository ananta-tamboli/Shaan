'use client'

import { useState } from 'react'
import { couple } from '@/content/couple'
import { useLang } from '@/context/LanguageContext'

interface FormState {
  name: string
  phone: string
  email: string
  attendeeCount: string
  selectedEvents: string[]
  wishes: string
}

function composeMessage(form: FormState, brideShort: string, groomShort: string): string {
  const lines = [
    `🎊 RSVP Confirmation — ${brideShort} & ${groomShort}'s Wedding`,
    ``,
    `👤 Name: ${form.name}`,
    `📞 Phone: ${form.phone}`,
    form.email ? `📧 Email: ${form.email}` : null,
    `👥 Attending: ${form.attendeeCount} person(s)`,
    `🎉 Events: ${form.selectedEvents.join(', ')}`,
    form.wishes ? `🌿 Dietary / Wishes: ${form.wishes}` : null,
    ``,
    `With love & joy! 💍`,
  ]
  return lines.filter(Boolean).join('\n')
}

export default function Rsvp() {
  const { t } = useLang()

  const ALL_EVENTS = [t.rsvpEvent1, t.rsvpEvent2, t.rsvpEvent3]

  const INITIAL_STATE: FormState = {
    name: '',
    phone: '',
    email: '',
    attendeeCount: '2',
    selectedEvents: [...ALL_EVENTS],
    wishes: '',
  }

  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'events', string>>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  function validate(): boolean {
    const newErrors: typeof errors = {}
    if (!form.name.trim()) newErrors.name = t.rsvpName + ' *'
    if (!form.phone.trim()) newErrors.phone = t.rsvpPhone + ' *'
    if (form.selectedEvents.length === 0) newErrors.events = '⚠️ ' + t.rsvpEvents
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    const message = composeMessage(form, couple.brideShort, couple.groomShort)
    window.open(`https://wa.me/${couple.whatsappPhone}?text=${encodeURIComponent(message)}`, '_blank')

    try {
      const confetti = (await import('canvas-confetti')).default
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#c99834', '#083b2b', '#ffffff', '#e5bd68', '#ffd700'],
        disableForReducedMotion: true,
      })
    } catch { /* confetti is non-critical */ }

    setShowSuccess(true)
  }

  function handleReset() {
    setForm(INITIAL_STATE)
    setErrors({})
    setShowSuccess(false)
  }

  function toggleEvent(eventName: string) {
    setForm((f) => ({
      ...f,
      selectedEvents: f.selectedEvents.includes(eventName)
        ? f.selectedEvents.filter((e) => e !== eventName)
        : [...f.selectedEvents, eventName],
    }))
    if (errors.events) setErrors((e) => ({ ...e, events: undefined }))
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-stone-800 text-sm outline-none transition-all'
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5'

  return (
    <section
      id="rsvp"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 0)', backgroundSize: '28px 28px' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-script text-3xl sm:text-4xl text-amber-600">{t.rsvpScript}</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 mt-1">{t.rsvpH2}</h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-3" />
          <p className="font-serif italic text-stone-600 text-lg mt-3">{t.rsvpSubtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 gold-box-shadow border border-amber-200/90 relative">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            {/* Full Name */}
            <div>
              <label htmlFor="guestName" className={labelClass}>
                {t.rsvpName} <span className="text-rose-500">*</span>
              </label>
              <input
                id="guestName"
                type="text"
                required
                placeholder={t.rsvpNamePlaceholder}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
                aria-describedby={errors.name ? 'nameError' : undefined}
              />
              {errors.name && <p id="nameError" className="text-rose-600 text-xs mt-1 font-semibold">{errors.name}</p>}
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="guestPhone" className={labelClass}>
                  {t.rsvpPhone} <span className="text-rose-500">*</span>
                </label>
                <input
                  id="guestPhone"
                  type="tel"
                  required
                  placeholder={t.rsvpPhonePlaceholder}
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputClass}
                  aria-describedby={errors.phone ? 'phoneError' : undefined}
                />
                {errors.phone && <p id="phoneError" className="text-rose-600 text-xs mt-1 font-semibold">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="guestEmail" className={labelClass}>{t.rsvpEmail}</label>
                <input
                  id="guestEmail"
                  type="email"
                  placeholder={t.rsvpEmailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Attendee count */}
            <div>
              <label htmlFor="attendeeCount" className={labelClass}>
                {t.rsvpAttendees} <span className="text-rose-500">*</span>
              </label>
              <select
                id="attendeeCount"
                value={form.attendeeCount}
                onChange={(e) => setForm((f) => ({ ...f, attendeeCount: e.target.value }))}
                className={inputClass + ' bg-white'}
              >
                <option value="1">{t.rsvpAttendee1}</option>
                <option value="2">{t.rsvpAttendee2}</option>
                <option value="3">{t.rsvpAttendee3}</option>
                <option value="4">{t.rsvpAttendee4}</option>
                <option value="5+">{t.rsvpAttendee5}</option>
              </select>
            </div>

            {/* Events */}
            <div>
              <p className={labelClass}>
                {t.rsvpEvents} <span className="text-rose-500">*</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ALL_EVENTS.map((eventName) => (
                  <label
                    key={eventName}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-amber-400 bg-stone-50/50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={form.selectedEvents.includes(eventName)}
                      onChange={() => toggleEvent(eventName)}
                      className="w-4 h-4 text-amber-600 rounded focus:ring-amber-400"
                    />
                    <span className="text-xs font-medium text-stone-800">{eventName}</span>
                  </label>
                ))}
              </div>
              {errors.events && (
                <p className="text-rose-600 text-xs mt-1.5 font-semibold" role="alert">{errors.events}</p>
              )}
            </div>

            {/* Dietary / Wishes */}
            <div>
              <label htmlFor="guestWishes" className={labelClass}>{t.rsvpWishes}</label>
              <textarea
                id="guestWishes"
                rows={3}
                placeholder={t.rsvpWishesPlaceholder}
                value={form.wishes}
                onChange={(e) => setForm((f) => ({ ...f, wishes: e.target.value }))}
                className={inputClass}
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl theme-btn-primary font-semibold text-xs tracking-widest uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>{t.rsvpSubmit}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl theme-btn-primary font-semibold text-xs tracking-widest uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>{t.rsvpWhatsapp}</span>
              </button>
            </div>
          </form>

          {/* Success overlay */}
          {showSuccess && (
            <div className="absolute inset-0 bg-white/95 rounded-3xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm z-20">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 border"
                style={{ backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-primary)', borderColor: 'var(--color-accent)' }}
              >
                ✓
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-900">{t.rsvpSuccessTitle}</h3>
              <p className="font-serif italic text-stone-600 text-lg mt-2 max-w-md">
                {t.rsvpSuccessMsg}
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-stone-700 tracking-wider uppercase transition-colors"
                >
                  {t.rsvpSuccessReset}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
