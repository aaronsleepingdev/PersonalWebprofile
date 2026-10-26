import { useEffect, useState } from 'react'
import type { Project, ProjectFilter } from '../data/site'

type ProjectsProps = {
  projects: Project[]
  allProjects: Project[]
  filters: readonly ProjectFilter[]
  activeFilter: ProjectFilter
  onFilterChange: (filter: ProjectFilter) => void
  onSelectProject: (project: Project) => void
}

function ProjectCard({ project, onSelectProject }: { project: Project; onSelectProject: (project: Project) => void }) {
  return (
    <article className="project-card">
      <div className={`project-cover ${project.coverClass}`} aria-hidden="true">
        <span>{project.category}</span>
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-tags">{project.technologies.join(' • ')}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-actions">
          {project.repositoryUrl ? (
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="text-link">
              Repository
            </a>
          ) : (
            <span className="text-link muted">Repository unavailable</span>
          )}

          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-link">
              Demo
            </a>
          ) : null}

          <button type="button" className="secondary-button small-button" onClick={() => onSelectProject(project)}>
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}

export function Projects({
  projects,
  allProjects,
  filters,
  activeFilter,
  onFilterChange,
  onSelectProject,
}: ProjectsProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 640px)').matches)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const projectsPerSlide = isMobile ? 1 : 2
  const slides = Array.from(
    { length: Math.ceil(projects.length / projectsPerSlide) },
    (_, index) => projects.slice(index * projectsPerSlide, (index + 1) * projectsPerSlide),
  )
  const carouselSlides = slides.length > 1 ? [slides[slides.length - 1], ...slides, slides[0]] : slides

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const updateViewport = () => {
      setIsMobile(mediaQuery.matches)
      setActiveSlide(0)
    }

    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  useEffect(() => {
    if (slides.length < 2 || isPaused || isAllProjectsOpen || prefersReducedMotion) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current === slides.length - 1 ? slides.length : current + 1))
    }, 6500)

    return () => window.clearInterval(timer)
  }, [activeSlide, isAllProjectsOpen, isPaused, prefersReducedMotion, slides.length])

  useEffect(() => {
    if (!isAllProjectsOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAllProjectsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isAllProjectsOpen])

  const goToSlide = (slide: number) => {
    if (slide < 0) {
      setActiveSlide(-1)
      return
    }

    setActiveSlide(slide >= slides.length ? slides.length : slide)
  }

  const handleFilterChange = (filter: ProjectFilter) => {
    onFilterChange(filter)
    setActiveSlide(0)
  }

  const handleTransitionEnd = () => {
    if (activeSlide === slides.length) {
      setActiveSlide(0)
    } else if (activeSlide === -1) {
      setActiveSlide(slides.length - 1)
    }
  }

  return (
    <section id="projects" className="content-section">
      <div className="container">
        <div className="section-heading align-left">
          <p className="eyebrow">Portfolio</p>
          <h2>Featured projects</h2>
          <p>Selected work that reflects my interest in games, mobile apps, and practical software experiences.</p>
        </div>

        <div className="filter-row" aria-label="Project categories">
          <label className="mobile-filter-select">
            <span className="visually-hidden">Filter projects by category</span>
            <select
              value={activeFilter}
              onChange={(event) => {
                const filter = filters.find((option) => option === event.target.value)
                if (filter) {
                  handleFilterChange(filter)
                }
              }}
              aria-label="Filter projects by category"
            >
              {filters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
            <span className="mobile-filter-chevron" aria-hidden="true">⌄</span>
          </label>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={filter === activeFilter ? 'filter-button active' : 'filter-button'}
              onClick={() => handleFilterChange(filter)}
              aria-pressed={filter === activeFilter}
            >
              {filter}
            </button>
          ))}
          <button
            type="button"
            className="filter-button see-all-projects-button"
            onClick={() => setIsAllProjectsOpen(true)}
            aria-haspopup="dialog"
          >
            See All Projects
          </button>
        </div>

        {activeFilter === 'All Projects' && slides.length > 0 ? (
            <div
              className="project-carousel"
              role="region"
              aria-roledescription="carousel"
              aria-label="Featured projects"
            >
              <div
                className="project-track"
                style={{ transform: `translateX(-${(activeSlide + 1) * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
                aria-live={isPaused || prefersReducedMotion ? 'polite' : 'off'}
              >
                  {carouselSlides.map((slideProjects, index) => {
                    const isClone = slides.length > 1 && (index === 0 || index === carouselSlides.length - 1)
                    const slideIndex = isClone ? (index === 0 ? slides.length - 1 : 0) : index - 1
                    const isActive = slideIndex === activeSlide % slides.length || (activeSlide === slides.length && slideIndex === 0)

                    return (
                    <div
                      key={`${slideProjects[0].id}-${index}`}
                      className="project-slide"
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Project slide ${slideIndex + 1} of ${slides.length}`}
                      aria-hidden={!isActive || isClone}
                      inert={!isActive || isClone}
                    >
                      {slideProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onSelectProject={onSelectProject} />
                      ))}
                    </div>
                    )
                  })}
                </div>

              {slides.length > 1 ? (
                <div className="carousel-controls" aria-label="Project carousel controls">
                  <button type="button" className="carousel-arrow" onClick={() => goToSlide(activeSlide - 1)} aria-label="Previous projects">
                    ←
                  </button>
                  <div className="carousel-dots">
                    {slides.map((slideProjects, index) => (
                      <button
                        key={slideProjects[0].id}
                        type="button"
                        className={(activeSlide + slides.length) % slides.length === index ? 'carousel-dot active' : 'carousel-dot'}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show project slide ${index + 1}`}
                        aria-current={(activeSlide + slides.length) % slides.length === index ? 'true' : undefined}
                      />
                    ))}
                  </div>
                  <button type="button" className="carousel-arrow" onClick={() => goToSlide(activeSlide + 1)} aria-label="Next projects">
                    →
                  </button>
                  <button
                    type="button"
                    className="carousel-pause"
                    onClick={() => {
                      setIsPaused((paused) => !paused)
                    }}
                    aria-label={isPaused ? 'Play project carousel' : 'Pause project carousel'}
                  >
                    {isPaused ? 'Play' : 'Pause'}
                  </button>
                </div>
              ) : null}
            </div>
          ) : activeFilter !== 'All Projects' && projects.length > 0 ? (
          <div className="filtered-projects" aria-live="polite">
            <p className="project-result-count">
              Showing {projects.length} {projects.length === 1 ? 'project' : 'projects'} in {activeFilter}
            </p>
            <div className="filtered-project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onSelectProject={onSelectProject} />
              ))}
            </div>
          </div>
        ) : (
          <p className="empty-projects">
            {activeFilter === 'All Projects' ? 'No projects to showcase yet.' : 'No projects in this category yet.'}
          </p>
        )}
      </div>

      {isAllProjectsOpen ? (
        <div
          className="all-projects-backdrop"
          onClick={() => setIsAllProjectsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-projects-title"
        >
          <section className="all-projects-panel" onClick={(event) => event.stopPropagation()}>
            <header className="all-projects-header">
              <div>
                <p className="eyebrow">Portfolio</p>
                <h2 id="all-projects-title">All projects</h2>
                <p>{allProjects.length} projects in one place</p>
              </div>
              <button
                type="button"
                className="close-button all-projects-close"
                onClick={() => setIsAllProjectsOpen(false)}
                aria-label="Close all projects"
              >
                ×
              </button>
            </header>
            {allProjects.length > 0 ? (
              <div className="all-projects-grid">
                {allProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={(selectedProject) => {
                      setIsAllProjectsOpen(false)
                      onSelectProject(selectedProject)
                    }}
                  />
                ))}
              </div>
            ) : (
              <p className="empty-projects">No projects to showcase yet.</p>
            )}
          </section>
        </div>
      ) : null}

    </section>
  )
}
