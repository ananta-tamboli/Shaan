'use client'

import { useState } from 'react'

export default function DownloadInvite() {
  const [loading, setLoading] = useState(false)

  async function handleDownload() {
    setLoading(true)
    try {
      // Dynamically import the heavy renderer so it never hits the SSR/static build
      const [{ pdf }, { InviteDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('@/lib/invitePdf'),
      ])

      const blob = await pdf(<InviteDocument />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Shamika-Ananta-Wedding-Invitation.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors py-1.5 px-3 rounded-lg hover:bg-amber-100/50 disabled:opacity-60"
      aria-label="Download printable wedding invitation PDF"
    >
      {loading ? (
        <>
          <svg className="w-4 h-4 animate-spin text-amber-600" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Generating PDF…
        </>
      ) : (
        <>
          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Download Invitation PDF
        </>
      )}
    </button>
  )
}
