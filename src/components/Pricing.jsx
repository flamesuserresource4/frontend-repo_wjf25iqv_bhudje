export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: ['5 GB storage', 'Basic sharing', 'Email support'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$12/mo',
      features: ['2 TB storage', 'Advanced permissions', 'Priority support'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact',
      features: ['Unlimited storage', 'SSO & SAML', 'Dedicated manager'],
      highlight: false,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Simple, transparent pricing</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`group relative overflow-hidden rounded-2xl border p-6 shadow-xl backdrop-blur transition hover:translate-y-[-2px] hover:shadow-2xl ${t.highlight ? 'border-blue-400/40 bg-white/70 dark:bg-slate-900/60' : 'border-white/10 bg-white/60 dark:bg-slate-900/60'}`}>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20"></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition group-hover:opacity-100"></div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.name}</h3>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">{t.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {t.features.map((f) => (
                <li key={f} className="">• {f}</li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-xl px-4 py-2 text-sm font-semibold shadow transition ${t.highlight ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white hover:opacity-95' : 'border border-slate-300/50 bg-white/30 text-slate-800 hover:bg-white/60 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'}`}>Choose {t.name}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
