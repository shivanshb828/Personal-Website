import BackLink from './BackLink'

export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen pb-24 pt-16">
      <BackLink />
      <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
      <div className="mt-8">{children}</div>
    </div>
  )
}
