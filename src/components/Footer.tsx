import { profile, socialLinks } from '../data/site'

export function Footer() {
  const year = 2026

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <p className="brand small-brand">{profile.name}</p>
          <p>© {year} {profile.name}. All rights reserved.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </footer>
  )
}
