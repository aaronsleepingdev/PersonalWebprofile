import { useEffect, useMemo, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectModal } from './components/ProjectModal'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Skills } from './components/Skills'
import { navItems, projectFilters, projects, type Project, type ProjectFilter } from './data/site'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All Projects')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: [0.35, 0.55, 0.8], rootMargin: '-10% 0px -35% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="app-shell">
      <Navbar
        items={navItems}
        theme={theme}
        activeSection={activeSection}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects
          projects={filteredProjects}
          allProjects={projects}
          filters={projectFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onSelectProject={setSelectedProject}
        />
        <Resume />
        <Contact />
      </main>

      <Footer />

      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </div>
  )
}

export default App
