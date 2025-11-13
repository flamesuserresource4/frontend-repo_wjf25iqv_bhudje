export default function PlansComparison() {
  const rows = [
    { label: 'Storage', free: '5 GB', premium: '2 TB' },
    { label: 'Sharing', free: 'Basic', premium: 'Advanced + Link Expiry' },
    { label: 'Sync', free: 'Manual', premium: 'Real-time' },
    { label: 'Security', free: 'Standard', premium: 'Zero-knowledge + SSO' },
    { label: 'Support', free: 'Community', premium: 'Priority' },
  ]

  return (
    <section className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/60 p-6 shadow-xl backdrop-blur dark:bg-slate-900/60">
      <h3 className="mb-4 text-center text-xl font-semibold text-slate-900 dark:text-white">Free vs Premium</h3>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="font-medium text-slate-500">Feature</div>
        <div className="text-center font-medium text-slate-500">Free</div>
        <div className="text-center font-medium text-slate-500">Premium</div>
        {rows.map((r) => (
          <>
            <div key={r.label+ '-l'} className="border-t border-white/10 py-3 text-slate-700 dark:text-slate-200">{r.label}</div>
            <div key={r.label+ '-f'} className="border-t border-white/10 py-3 text-center">{r.free}</div>
            <div key={r.label+ '-p'} className="border-t border-white/10 py-3 text-center font-semibold">{r.premium}</div>
          </>
        ))}
      </div>
    </section>
  )
}
