'use client'

import { useRouter } from 'next/navigation'

export default function BackLink() {
  const router = useRouter()
  const goBack = () => {
    const cameFromSite = document.referrer && new URL(document.referrer).origin === window.location.origin
    if (cameFromSite && window.history.length > 1) router.back()
    else router.push('/')
  }
  return (
    <p className="mb-10 text-[13px]">
      <button type="button" onClick={goBack} className="cursor-pointer hover:underline">
        ← back
      </button>
    </p>
  )
}
