import { Cloud, Shield, Share2, Sync, BarChart3, UploadCloud } from 'lucide-react'

const features = [
  {
    title: 'Secure Storage',
    desc: 'Enterprise-grade encryption with role-based access control.',
    icon: Shield,
  },
  {
    title: 'Real-Time Sync',
    desc: 'Instant updates across devices with conflict-free sync.',
    icon: Sync,
  },
  {
    title: 'Smart Sharing',
    desc: 'Granular permissions, link expiry, and activity logs.',
    icon: Share2,
  },
]

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/60 p-6 shadow-xl backdrop-blur transition hover:translate-y-[-2px] hover:shadow-2xl dark:bg-slate-900/60">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FeatureIcons() {
  const items = [
    { icon: UploadCloud, label: 'Upload' },
    { icon: Sync, label: 'Sync' },
    { icon: Share2, label: 'Share' },
    { icon: Cloud, label: 'Backup' },
    { icon: BarChart3, label: 'Analytics' },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Everything your team needs</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/60 px-4 py-2 text-slate-700 shadow backdrop-blur transition hover:shadow-lg dark:bg-slate-900/60 dark:text-slate-200">
            <it.icon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
