import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white/30 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20"
      aria-label="Toggle dark mode"
    >
      <span className="inline-block h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-inner"></span>
      <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-xl dark:bg-slate-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg ring-1 ring-white/40"></div>
          <span className="text-lg font-semibold tracking-tight text-slate-800 group-hover:opacity-90 dark:text-slate-100">NimbusDrive</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/features" className={({isActive})=>`text-sm font-medium transition ${isActive? 'text-blue-600 dark:text-blue-400':'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>Features</NavLink>
          <NavLink to="/pricing" className={({isActive})=>`text-sm font-medium transition ${isActive? 'text-blue-600 dark:text-blue-400':'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>Pricing</NavLink>
          <NavLink to="/dashboard" className={({isActive})=>`text-sm font-medium transition ${isActive? 'text-blue-600 dark:text-blue-400':'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}>Dashboard</NavLink>
          <ThemeToggle />
          <Link to="#" className="rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">Get Started</Link>
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
