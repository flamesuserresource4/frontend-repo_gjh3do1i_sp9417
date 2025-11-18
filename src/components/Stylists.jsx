import { useEffect, useState } from 'react'

export default function Stylists() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/stylists`)
        const data = await res.json()
        setItems(data)
      } catch (e) {}
    }
    load()
  }, [])

  return (
    <section id="stylists" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Stylists</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p._id} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                {p.avatar ? (
                  <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-slate-500 text-sm">No image</div>
                )}
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <div className="text-amber-300">★ {p.rating?.toFixed(1)}</div>
                </div>
                <p className="text-slate-400 text-sm">{p.specialty}</p>
                <p className="text-slate-500 text-xs mt-1">{p.experience_years} yrs experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
