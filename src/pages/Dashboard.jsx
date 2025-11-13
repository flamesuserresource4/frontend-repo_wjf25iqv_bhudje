import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DashboardContent from '../components/Dashboard'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ECF2FF] via-[#F2F0FF] to-[#EAF6FF] text-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <Navbar />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <DashboardContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
