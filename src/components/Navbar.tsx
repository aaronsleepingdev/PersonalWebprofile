import { useEffect, useState } from 'react'
import type { NavItem } from '../data/site'

type NavbarProps = {
  items: NavItem[]
  theme: 'dark' | 'light'
  activeSection: string
  onToggleTheme: () => void
}

export function Navbar({ items, theme, activeSection, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className={`container nav-shell${isMenuOpen ? ' menu-open' : ''}`}>
        <a className="brand" href="#home" aria-label="Go to the home section">
          <span className="brand-mark">EA</span>
          <span>Ebon Aaron Atan</span>
        </a>

        <nav id="main-navigation" className="main-nav" aria-label="Main navigation">
          {items.map((item) => {
            const sectionId = item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === sectionId ? 'active' : ''}
                aria-current={activeSection === sectionId ? 'location' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
