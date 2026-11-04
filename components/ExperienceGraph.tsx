'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { ExperienceNode } from '@/lib/site'

type Point = { x: number; y: number }
const PAD = 8 // keep nodes this far inside the frame
const DRAG_THRESHOLD = 4 // px of movement before a press counts as a drag

export default function ExperienceGraph({
  nodes,
  edges,
}: {
  nodes: ExperienceNode[]
  edges: [string, string][]
}) {
  const frameRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const panelRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  // Positions are stored as fractions so they survive resizes.
  const [pos, setPos] = useState<Record<string, Point>>(() =>
    Object.fromEntries(nodes.map((n) => [n.id, { x: n.x, y: n.y }])),
  )
  const [active, setActive] = useState<string | null>(null)
  const drag = useRef<{ id: string; startX: number; startY: number; moved: boolean } | null>(null)

  useLayoutEffect(() => {
    const el = frameRef.current
    if (!el) return
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight })
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Convert a node's fractional position to clamped pixel coordinates.
  const toPx = useCallback(
    (id: string): Point => {
      const p = pos[id]
      const el = nodeRefs.current[id]
      const hw = (el?.offsetWidth ?? 0) / 2
      const hh = (el?.offsetHeight ?? 0) / 2
      const clamp = (v: number, lo: number, hi: number) => (lo > hi ? (lo + hi) / 2 : Math.min(Math.max(v, lo), hi))
      return {
        x: clamp(p.x * size.w, hw + PAD, size.w - hw - PAD),
        y: clamp(p.y * size.h, hh + PAD, size.h - hh - PAD),
      }
    },
    [pos, size],
  )

  const onPointerDown = (id: string) => (e: React.PointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { id, startX: e.clientX, startY: e.clientY, moved: false }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const d = drag.current
    const frame = frameRef.current
    if (!d || !frame) return
    if (!d.moved && Math.hypot(e.clientX - d.startX, e.clientY - d.startY) < DRAG_THRESHOLD) return
    d.moved = true
    const rect = frame.getBoundingClientRect()
    setPos((prev) => ({
      ...prev,
      [d.id]: {
        x: Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1),
        y: Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1),
      },
    }))
  }

  const onPointerUp = () => {
    const d = drag.current
    drag.current = null
    if (d && !d.moved) setActive((cur) => (cur === d.id ? null : d.id))
  }

  // Keyboard users toggle with Enter/Space (click fires without pointer events).
  const onKeyToggle = (id: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActive((cur) => (cur === id ? null : id))
    }
  }

  useEffect(() => {
    if (!active) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    panelRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' })
  }, [active])

  const activeNode = nodes.find((n) => n.id === active)
  const ready = size.w > 0

  return (
    <div id="experience-graph" className="w-full space-y-4">
      <div
        ref={frameRef}
        className="relative w-full select-none rounded-sm border border-dashed border-rule bg-surface"
        style={{ minHeight: 420, height: 'min(52vh, 480px)' }}
      >
        {ready && (
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            {edges.map(([a, b]) => {
              const p = toPx(a)
              const q = toPx(b)
              return <line key={a + b} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="var(--edge)" strokeWidth="1" />
            })}
          </svg>
        )}
        {nodes.map((n) => {
          const p = ready ? toPx(n.id) : { x: n.x * 100, y: n.y * 100 }
          const isActive = active === n.id
          return (
            <div
              key={n.id}
              className="absolute z-10"
              style={
                ready
                  ? { left: p.x, top: p.y, transform: 'translate(-50%, -50%)' }
                  : { left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }
              }
            >
              <button
                ref={(el) => {
                  nodeRefs.current[n.id] = el
                }}
                type="button"
                aria-expanded={isActive}
                aria-controls="experience-panel"
                onPointerDown={onPointerDown(n.id)}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={() => (drag.current = null)}
                onKeyDown={onKeyToggle(n.id)}
                className={`flex max-w-[11rem] cursor-grab touch-none items-center justify-center border border-ink bg-paper px-3 py-2.5 text-center text-[12px] font-medium leading-snug transition-shadow hover:shadow-sm active:cursor-grabbing ${
                  isActive ? 'outline outline-1 outline-offset-2 outline-ink' : ''
                }`}
              >
                {n.label}
              </button>
            </div>
          )
        })}
        <p className="pointer-events-none absolute bottom-2 right-3 text-[11px] text-ink-muted">
          click a node · drag to rearrange
        </p>
      </div>

      {activeNode && (
        <div
          ref={panelRef}
          id="experience-panel"
          className="scroll-mt-8 rounded-sm border border-dashed border-rule bg-surface p-4 text-[13px]"
        >
          <div className="flex items-center justify-between">
            <p className="font-medium">{activeNode.label}</p>
            <button type="button" onClick={() => setActive(null)} className="cursor-pointer text-[12px] text-ink-muted hover:underline">
              Close
            </button>
          </div>
          <ul>
            {activeNode.roles.map((r) => (
              <li key={r.org} className="border-b border-dashed border-rule-soft py-5 last:border-0 last:pb-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="text-[15px] font-medium">
                    {r.orgHref ? (
                      <a href={r.orgHref} target="_blank" rel="noopener noreferrer" className="!no-underline hover:!underline">
                        {r.org}
                      </a>
                    ) : (
                      r.org
                    )}
                  </p>
                  {r.dates && <p className="text-[12px] text-ink-muted">{r.dates}</p>}
                </div>
                <p className="mt-1.5 text-ink-muted">{r.title}</p>
                {r.description && <p className="mt-3 leading-relaxed">{r.description}</p>}
                {r.links && (
                  <p className="mt-3 flex gap-4">
                    {r.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
