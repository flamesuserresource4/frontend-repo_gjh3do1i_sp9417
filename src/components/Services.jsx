import { useEffect, useState } from 'react'

export default function Services() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/services`)
        const data = await res.json()
        setItems(data)
      } catch (e) {}
    }
    load()
  }, [])

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Popular Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s._id} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-4 hover:border-fuchsia-500/30 transition">
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
                {s.image ? (
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-slate-500 text-sm">No image</div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <div className="text-fuchsia-300 font-medium">₹{s.price}</div>
                </div>
                {s.description && <p className="text-slate-400 text-sm mt-1">{s.description}</p>}
                <div className="text-slate-500 text-xs mt-2">~ {s.duration_minutes} mins</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
