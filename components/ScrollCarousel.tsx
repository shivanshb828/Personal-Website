'use client'
import { useRef } from 'react'

export default function ScrollCarousel({ children, count, countLabel }: {
  children: React.ReactNode
  count: number
  countLabel: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    startX.current = e.pageX - (ref.current?.offsetLeft ?? 0)
    scrollLeft.current = ref.current?.scrollLeft ?? 0
    if (ref.current) ref.current.style.cursor = 'grabbing'
  }
  const onMouseUp = () => {
    dragging.current = false
    if (ref.current) ref.current.style.cursor = 'grab'
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return
    e.preventDefault()
    const x = e.pageX - (ref.current?.offsetLeft ?? 0)
    const walk = (x - startX.current) * 1.5
    if (ref.current) ref.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div>
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-6 cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {children}
      </div>
      <div className="flex items-center justify-between border-t border-[#e5e5e5] pt-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#999999]">
          Scroll to explore
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#999999]">
          {count} {countLabel}
        </span>
      </div>
    </div>
  )
}
