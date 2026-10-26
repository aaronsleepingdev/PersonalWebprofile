export function About() {
  return (
    <section id="about" className="content-section alt-section">
      <div className="container">
        <div className="section-heading about-heading">
          <p className="eyebrow">A little about me</p>
          <h2>
            Curious by nature.
            <span> Building with purpose.</span>
          </h2>
          <p>
            I turn ideas into useful, intuitive experiences through code, creative problem-solving,
            and a steady habit of learning by doing.
          </p>
        </div>

        <div className="about-layout">
          <article className="about-profile-card">
            <div className="about-profile-topline">
              <span className="about-status-dot" />
              <span>IT student · aspiring developer</span>
            </div>
            <div className="about-monogram" aria-hidden="true">
              EA
              <span className="about-monogram-orbit" />
            </div>
            <p className="about-profile-statement">
              I like building things that are useful, intuitive, and a little fun to use.
            </p>
            <div className="about-current-focus">
              <span>Currently exploring</span>
              <strong>Games · Mobile apps · Web</strong>
            </div>
          </article>

          <div className="about-focus-list">
            <article className="about-focus-card">
              <span className="about-focus-number">01</span>
              <div>
                <h3>Interactive worlds</h3>
                <p>Designing game mechanics and progression systems with Unity and C#.</p>
              </div>
              <span className="about-focus-tag">GAME DEV</span>
            </article>
            <article className="about-focus-card">
              <span className="about-focus-number">02</span>
              <div>
                <h3>Useful applications</h3>
                <p>Building mobile experiences that help people solve real problems.</p>
              </div>
              <span className="about-focus-tag">MOBILE</span>
            </article>
            <article className="about-focus-card">
              <span className="about-focus-number">03</span>
              <div>
                <h3>Learning by building</h3>
                <p>Exploring modern web tools and turning new ideas into working projects.</p>
              </div>
              <span className="about-focus-tag">WEB & MORE</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
