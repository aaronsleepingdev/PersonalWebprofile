import { profile, socialLinks } from '../data/site'

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="status-pill">Available for projects</span>
          <h1>Hi, I&apos;m {profile.name}.</h1>
          <p className="lead">{profile.title}</p>
          <p className="hero-text">{profile.intro}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View My Projects
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="social-row" aria-label="Social profile links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="profile-panel">
            <div className="mini-card">
              <span>Focus</span>
              <strong>Software & Games</strong>
            </div>
            <div className="mini-card">
              <span>Learning</span>
              <strong>Modern Web + Mobile</strong>
            </div>
            <div className="mini-card highlight">
              <span>Current Goal</span>
              <strong>Build polished digital products</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
