import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) {}
    }
    load()
  }, [])

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t._id} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div className="text-amber-300">{'★'.repeat(Math.round(t.rating))}</div>
              <p className="text-slate-300 mt-2">{t.message}</p>
              <div className="text-slate-500 text-sm mt-3">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
