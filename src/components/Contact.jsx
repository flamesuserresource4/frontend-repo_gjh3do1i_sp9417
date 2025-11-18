import { useState } from 'react'

export default function Contact() {
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
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setMessage('Thanks! We will call you back soon.')
      else setMessage(data.detail || 'Something went wrong')
      e.currentTarget.reset()
    } catch (e) {
      setMessage('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in touch</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input name="name" required placeholder="Your Name" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
              <input name="email" required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
              <input name="phone" placeholder="Phone (optional)" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
              <textarea name="message" required rows={4} placeholder="How can we help?" className="px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500" />
              <button disabled={loading} className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {message && <div className="text-slate-300">{message}</div>}
            </form>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:p-8 text-slate-300">
            <h3 className="text-white text-xl font-semibold">Visit us</h3>
            <p className="mt-2">Blue Salon, Andheri West<br/>Mumbai, Maharashtra</p>
            <div className="mt-4 text-slate-400">Open daily: 10 AM – 8 PM</div>
            <div className="mt-6">
              <iframe title="map" className="w-full h-64 rounded-xl border border-white/10" src="https://www.google.com/maps?q=Andheri%20West%2C%20Mumbai&z=13&output=embed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
