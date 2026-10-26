import { useState } from 'react'
import { profile } from '../data/site'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [feedback, setFeedback] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setFeedback('Please complete all fields before sending your message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(trimmedEmail)) {
      setFeedback('Please enter a valid email address.')
      return
    }

    const body = `Name: ${trimmedName}%0D%0AEmail: ${trimmedEmail}%0D%0A%0D%0A${trimmedMessage}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(trimmedSubject)}&body=${body}`
    setFeedback('Your email app should open with a pre-filled message. Thanks for reaching out!')
    setFormData(initialState)
  }

  return (
    <section id="contact" className="content-section alt-section">
      <div className="container contact-layout">
        <div>
          <div className="section-heading align-left">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something together.</h2>
            <p>
              I&apos;m always interested in learning, collaborating, and exploring new development opportunities. Feel free to
              reach out if you&apos;d like to discuss a project or connect.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Email: {profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your idea..." />
          </label>

          <button type="submit" className="primary-button submit-button">
            Send Message
          </button>

          {feedback ? (
            <p className="form-feedback" aria-live="polite">
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
