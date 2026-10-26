import { useEffect, useState } from 'react'

const resumePath = '/Ebon-Aaron-Atan-Resume.pdf'

export function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <section id="resume" className="content-section alt-section">
      <div className="container resume-content">
        <div className="section-heading">
          <p className="eyebrow">Resume</p>
          <h2>Curious mind. Practical builder.</h2>
          <p>
            IT student and aspiring full stack developer building useful web, mobile, and game
            experiences.
          </p>
        </div>

        <div className="resume-highlights" aria-label="Resume highlights">
          <article className="resume-highlight">
            <span className="resume-highlight-icon" aria-hidden="true">01</span>
            <div>
              <strong>Full stack foundations</strong>
              <p>Laravel APIs, Firebase data, and mobile app integration.</p>
            </div>
          </article>
          <article className="resume-highlight">
            <span className="resume-highlight-icon" aria-hidden="true">02</span>
            <div>
              <strong>Project leadership</strong>
              <p>Main programmer and project manager for a five-member capstone team.</p>
            </div>
          </article>
          <article className="resume-highlight">
            <span className="resume-highlight-icon" aria-hidden="true">03</span>
            <div>
              <strong>Learning by building</strong>
              <p>Developing Farmpreneur, a 2.5D game-based learning app.</p>
            </div>
          </article>
        </div>

        <div className="resume-credentials" aria-label="Education and credentials">
          <span>BS Information Technology · Expected 2027</span>
          <span>3 NC II certifications</span>
          <span>Unity · C# · Laravel · Firebase</span>
        </div>

        <button
          type="button"
          className="resume-card"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span className="resume-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M13 5.5h15l8 8V42H13a3 3 0 0 1-3-3V8.5a3 3 0 0 1 3-3Z" />
              <path d="M28 5.5v9h8M17 23h14M17 29h14M17 35h9" />
            </svg>
          </span>
          <span className="resume-card-copy">
            <span className="resume-card-eyebrow">PDF document · 1 page</span>
            <strong>Ebon Aaron P. Atan</strong>
            <span>Full Stack Developer</span>
            <span className="resume-card-skills">TypeScript · Video Editing · Unity · Laravel</span>
          </span>
          <span className="resume-card-open" aria-hidden="true">View resume <span>↗</span></span>
        </button>
      </div>

      {isOpen ? (
        <div
          className="resume-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false)
            }
          }}
        >
          <section
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            <div className="resume-modal-header">
              <div>
                <p className="eyebrow">Resume</p>
                <h3 id="resume-modal-title">Ebon Aaron P. Atan</h3>
              </div>
              <div className="resume-modal-actions">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button small-button resume-open-link"
                >
                  Open in new tab
                </a>
                <a
                  href={resumePath}
                  download="Ebon-Aaron-Atan-Resume.pdf"
                  className="primary-button small-button"
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  className="resume-close-button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close resume"
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              className="resume-modal-viewer"
              src={`${resumePath}#view=Fit`}
              title="Ebon Aaron P. Atan resume"
            />
          </section>
        </div>
      ) : null}
    </section>
  )
}
