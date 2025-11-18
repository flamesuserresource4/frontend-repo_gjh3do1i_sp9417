import { motion } from 'framer-motion'

export default function Hero() {
  const onBook = () => {
    const el = document.getElementById('booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(217,70,239,0.25),transparent_60%),radial-gradient(60%_50%_at_30%_20%,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Upgrade Your Look. Elevate Your Vibe.
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-5 text-lg md:text-xl text-slate-300 max-w-xl">
            Premium salon services for hair, skin and makeup. Trend-led, personalized, and delivered by top stylists.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex items-center gap-3">
            <button onClick={onBook} className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">Book an Appointment</button>
            <a href="#services" className="px-6 py-3 rounded-xl border border-white/10 text-slate-200 hover:text-white hover:border-white/20 transition">Explore Services</a>
          </motion.div>
          <div className="mt-6 text-slate-400 text-sm">Open daily • 10 AM – 8 PM • Andheri West, Mumbai</div>
        </div>
        <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{delay:0.15,duration:0.6}} className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-800/40 backdrop-blur">
            <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWxvbnxlbnwwfDB8fHwxNzYzNTAzNjA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Salon" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-slate-200 shadow-xl">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-xs text-slate-400">Rated by 1200+ clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
