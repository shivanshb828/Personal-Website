import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen pb-24 pt-24">
      <h1 className="text-2xl font-medium tracking-tight">Not found</h1>
      <p className="mt-6">
        There&apos;s nothing at this address. Head <Link href="/">home</Link>.
      </p>
    </div>
  )
}
