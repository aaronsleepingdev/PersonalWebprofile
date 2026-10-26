import { skillGroups } from '../data/site'

export function Skills() {
  return (
    <section id="skills" className="content-section alt-section">
      <div className="container">
        <div className="section-heading align-left">
          <p className="eyebrow">Skills</p>
          <h2>Tools, technologies, and areas I actively work with</h2>
          <p>These are the skills I genuinely use across development, design, and problem solving.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="badge-list">
                {group.items.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
