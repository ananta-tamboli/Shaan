'use client'

import type { DressCodeSwatch } from '@/types/wedding'

interface DressCodePaletteProps {
  swatches: DressCodeSwatch[]
}

export default function DressCodePalette({ swatches }: DressCodePaletteProps) {
  const recommended = swatches.filter((s) => !s.avoid)
  const avoided = swatches.filter((s) => s.avoid)

  return (
    <div className="mt-3 space-y-2">
      {/* Recommended colours */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">Wear</p>
        <div className="flex flex-wrap gap-2">
          {recommended.map((swatch) => (
            <div key={swatch.hex} className="flex flex-col items-center gap-1 group">
              <div
                className="w-7 h-7 rounded-full ring-2 ring-white shadow-md transition-transform group-hover:scale-110 cursor-default"
                style={{ backgroundColor: swatch.hex }}
                title={swatch.label}
                aria-label={swatch.label}
              />
              <span className="text-[9px] text-stone-500 font-medium leading-tight text-center max-w-[36px] hidden group-hover:block absolute mt-8 bg-white/90 border border-stone-100 rounded px-1 py-0.5 shadow-sm z-10 whitespace-nowrap pointer-events-none">
                {swatch.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Avoid colours */}
      {avoided.length > 0 && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-rose-400 mb-1.5">Avoid</p>
          <div className="flex flex-wrap gap-2">
            {avoided.map((swatch) => (
              <div key={swatch.hex} className="flex flex-col items-center gap-1 group relative">
                <div className="relative">
                  <div
                    className="w-7 h-7 rounded-full ring-2 ring-rose-300 shadow-md opacity-75 cursor-default"
                    style={{ backgroundColor: swatch.hex }}
                    title={`Avoid: ${swatch.label}`}
                    aria-label={`Avoid ${swatch.label}`}
                  />
                  {/* X overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 28 28"
                    aria-hidden="true"
                  >
                    <line x1="6" y1="6" x2="22" y2="22" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="22" y1="6" x2="6" y2="22" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tooltip hint */}
      <p className="text-[9px] text-stone-400 italic">Hover swatches to see colour names</p>
    </div>
  )
}
