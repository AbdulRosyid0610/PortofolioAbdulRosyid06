const ArrowRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Frontend Developer &amp; UI Designer</div>
        <h1 className="hero-title">
          My personal  <em>Web</em><br />portfolio in
        </h1>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Work <ArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}