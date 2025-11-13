import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { FeatureCards, FeatureIcons } from './components/FeatureCards'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ECF2FF] via-[#F2F0FF] to-[#EAF6FF] text-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <FeatureIcons />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/60 p-1 backdrop-blur dark:bg-slate-900/60">
            <Pricing />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
