import { useState } from 'react'
import { Menu, Scissors, Phone, CalendarDays } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const NavLink = ({ id, children }) => (
    <button onClick={() => scrollTo(id)} className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:-translate-y-0.5 transition">
      {children}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-500">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-white tracking-wide">Blue Salon</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink id="services">Services</NavLink>
            <NavLink id="stylists">Stylists</NavLink>
            <NavLink id="testimonials">Reviews</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/20 transition">
              <Phone className="w-4 h-4" /> Call
            </a>
            <button onClick={() => scrollTo('booking')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              <CalendarDays className="w-4 h-4" /> Book Now
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-200" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <NavLink id="services">Services</NavLink>
            <NavLink id="stylists">Stylists</NavLink>
            <NavLink id="testimonials">Reviews</NavLink>
            <NavLink id="contact">Contact</NavLink>
            <button onClick={() => scrollTo('booking')} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white">
              <CalendarDays className="w-4 h-4" /> Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
