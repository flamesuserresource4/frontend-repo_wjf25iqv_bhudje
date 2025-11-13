import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            Upload & Access Your Files Anywhere
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-300"
          >
            Secure cloud storage with real-time sync and smart sharing, designed for teams that move fast.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link to="/pricing" className="rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95">
              Get Started Free
            </Link>
            <Link to="/dashboard" className="rounded-full border border-slate-300/50 bg-white/50 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
              Login
            </Link>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-white/60 p-4 shadow-2xl backdrop-blur dark:bg-slate-900/60"
          >
            <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 dark:from-slate-800 dark:to-slate-800">
              <div className="grid h-full grid-cols-12 gap-3">
                <div className="col-span-3 rounded-xl border border-white/20 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="mb-2 h-3 w-24 rounded bg-slate-200 dark:bg-white/10"></div>
                  <div className="space-y-2">
                    <div className="h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                    <div className="h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                    <div className="h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                    <div className="h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
                  </div>
                </div>
                <div className="col-span-9 rounded-xl border border-white/20 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-3 w-40 rounded bg-slate-200 dark:bg-white/10"></div>
                    <div className="h-8 w-28 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-24 rounded-xl border border-white/20 bg-white/80 p-3 shadow-sm dark:border-white/10 dark:bg-white/5"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="pointer-events-none absolute -top-6 left-6 h-20 w-20 rounded-2xl bg-white/50 shadow-xl backdrop-blur dark:bg-white/10"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-8 right-10 h-16 w-16 rounded-2xl bg-white/50 shadow-xl backdrop-blur dark:bg-white/10"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
