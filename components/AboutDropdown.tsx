'use client'

import { useState } from 'react'

export default function AboutDropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-12 border-t border-dashed border-rule pt-8">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="about-panel"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex cursor-pointer items-center gap-2 hover:opacity-70"
      >
        <span>About me</span>
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M2 4.5 L6 8.5 L10 4.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id="about-panel"
        hidden={!open}
        className="mt-6 rounded-sm border border-dashed border-rule bg-surface p-5"
      >
        {children}
      </div>
    </div>
  )
}
