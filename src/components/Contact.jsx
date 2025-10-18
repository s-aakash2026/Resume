import { useState } from 'react'
 function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // STEP 1: Replace this with your access key from web3forms.com
          access_key: 'c56941e0-f02d-41ab-9f44-95083cf5b968',

          // STEP 2: The email will be sent to the email you registered with Web3Forms
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Contact from ${form.name} - Portfolio`
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's Work Together</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span>📧</span>
              <span>saakash2026@gmail.com</span>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>India</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})}
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="success">
              ✅ Message sent! Check your Gmail inbox.
            </div>
          )}

          {status === 'error' && (
            <div className="success" style={{
              background: 'rgba(255,0,0,0.2)', 
              borderColor: 'red', 
              color: 'red'
            }}>
              ❌ Failed to send. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
export default Contact