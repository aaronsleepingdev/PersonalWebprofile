import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="content-section">
      <div className="container narrow-container">
        <SectionHeading
          eyebrow="About me"
          title="Building useful software and memorable experiences"
          description="I am an IT student with a strong interest in software development, game development, and applications that solve practical problems."
        />

        <div className="about-copy">
          <p>
            I&apos;m an IT student with a strong interest in software development, game development,
            and building applications that solve practical problems. I enjoy learning new
            technologies, experimenting with ideas, and turning concepts into working projects.
          </p>
          <p>
            My development interests include Unity game development, mobile applications, Firebase
            integration, and modern web technologies. I value clean code, continuous improvement,
            and creating software that is both functional and easy to use.
          </p>
        </div>

        <div className="info-grid">
          <article className="info-card">
            <span>Current Focus</span>
            <strong>Full-stack problem solving</strong>
          </article>
          <article className="info-card">
            <span>Technical Interests</span>
            <strong>Unity, Flutter, Firebase, Web apps</strong>
          </article>
          <article className="info-card">
            <span>Development Philosophy</span>
            <strong>Clean code, practical design, constant learning</strong>
          </article>
        </div>
      </div>
    </section>
  )
}
