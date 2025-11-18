import { useState } from 'react'

export default function Booking() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setMessage('Appointment request sent! We will confirm shortly.')
      else setMessage(data.detail || 'Something went wrong')
      e.currentTarget.reset()
    } catch (e) {
      setMessage('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your Name" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
            <input name="phone" required placeholder="Phone / WhatsApp" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
            <input name="service_id" placeholder="Preferred Service (optional)" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
            <input name="stylist_id" placeholder="Preferred Stylist (optional)" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
            <input type="date" name="date" required className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white" />
            <input type="time" name="time" required className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white" />
            <textarea name="notes" placeholder="Notes" className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
            <div className="md:col-span-2 flex items-center gap-3">
              <button disabled={loading} className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white disabled:opacity-60">
                {loading ? 'Sending...' : 'Submit Request'}
              </button>
              {message && <div className="text-slate-300">{message}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
