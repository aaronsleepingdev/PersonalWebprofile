import { useEffect } from 'react'
import type { Project } from '../data/site'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose} aria-label="Close project details">
          ×
        </button>

        <div className={`project-cover large-cover ${project.coverClass}`} aria-hidden="true">
          <span>{project.category}</span>
        </div>

        <div className="modal-content">
          <div className="modal-header">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
            </div>
            <div className="modal-links">
              {project.repositoryUrl ? (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="text-link">
                  Repository
                </a>
              ) : null}
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-link">
                  Live demo
                </a>
              ) : null}
            </div>
          </div>

          <p className="modal-description">{project.overview}</p>

          <div className="detail-grid">
            <div>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>Objective</h4>
              <p>{project.objective}</p>
            </div>
            <div>
              <h4>Challenge</h4>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h4>Solution</h4>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="tech-stack">
            <h4>Technologies used</h4>
            <div className="badge-list">
              {project.technologies.map((technology) => (
                <span key={technology} className="skill-badge">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="feature-list">
            <h4>Key features</h4>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
