import { useState } from 'react'
import { Upload, File, Folder, Trash2, Settings } from 'lucide-react'

function Sidebar({ current, setCurrent }) {
  const items = [
    { key: 'files', label: 'My Files', icon: File },
    { key: 'shared', label: 'Shared', icon: Folder },
    { key: 'trash', label: 'Trash', icon: Trash2 },
    { key: 'settings', label: 'Settings', icon: Settings },
  ]
  return (
    <aside className="hidden w-56 flex-shrink-0 rounded-2xl border border-white/10 bg-white/60 p-4 shadow backdrop-blur md:block dark:bg-slate-900/60">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Navigation</div>
      <nav className="space-y-1">
        {items.map((it)=> (
          <button key={it.key} onClick={()=>setCurrent(it.key)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${current===it.key ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' : 'text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/10'}`}>
            <it.icon className="h-4 w-4" />
            {it.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

function FileRow({ name, type, size, date }) {
  return (
    <div className="grid grid-cols-12 items-center rounded-xl border border-white/10 bg-white/60 p-3 text-sm shadow-sm backdrop-blur transition hover:shadow dark:bg-slate-900/60">
      <div className="col-span-6 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20"></div>
        <span className="font-medium text-slate-800 dark:text-slate-100">{name}</span>
      </div>
      <div className="col-span-2 text-slate-500">{type}</div>
      <div className="col-span-2 text-slate-500">{size}</div>
      <div className="col-span-2 text-slate-500">{date}</div>
    </div>
  )
}

export default function Dashboard() {
  const [current, setCurrent] = useState('files')

  const files = [
    { name: 'Project Brief.pdf', type: 'PDF', size: '1.2 MB', date: 'Oct 1, 2025' },
    { name: 'Team Photo.png', type: 'Image', size: '2.8 MB', date: 'Oct 3, 2025' },
    { name: 'Sprint Plan.xlsx', type: 'Sheet', size: '340 KB', date: 'Oct 6, 2025' },
    { name: 'Demo Video.mp4', type: 'Video', size: '120 MB', date: 'Oct 9, 2025' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">
          <Upload className="h-4 w-4" /> Upload files
        </button>
      </div>

      <div className="flex gap-6">
        <Sidebar current={current} setCurrent={setCurrent} />
        <div className="w-full space-y-3">
          {files.map((f) => (
            <FileRow key={f.name} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
