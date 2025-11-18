import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stylists from './components/Stylists'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stylists />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 text-center text-slate-400">
        © {new Date().getFullYear()} Blue Salon. All rights reserved.
      </footer>
    </div>
  )
}

export default App
