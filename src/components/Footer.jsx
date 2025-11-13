import { Link } from 'react-router-dom'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/50 py-10 backdrop-blur dark:bg-slate-900/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600"></div>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">NimbusDrive</span>
        </div>
        <div className="flex items-center gap-5 text-slate-600 dark:text-slate-300">
          <a href="#" aria-label="Twitter" className="hover:text-slate-900 dark:hover:text-white"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white"><Github className="h-5 w-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white"><Linkedin className="h-5 w-5" /></a>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <Link to="#" className="hover:text-slate-900 dark:hover:text-white">Terms</Link>
          <span>•</span>
          <Link to="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</Link>
          <span>•</span>
          <Link to="#" className="hover:text-slate-900 dark:hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
