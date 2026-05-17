import React from "react";
// Import foto dari folder assets agar muncul di browser
import fotoAbdul from "../assets/Abdul.jpg"; 

const ArrowRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const SKILLS = [
  { label: "Frontend",    tech: "HTML · CSS · JavaScript · React", pct: 90 },
  { label: "Backend",      tech: "Node.js · Python · PHP · Java · Laravel · Express.js",   pct: 50 },
  { label: "UI/UX Design", tech: "Figma · Canva",                   pct: 90 },
  { label: "Database",     tech: "MySQL · PostgreSQL · MongoDB",     pct: 50 },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-divider" />
      <div className="section-tag">
        <span className="section-tag-num">01</span> About Me
      </div>
      <h2 className="section-heading">
        Professional <em>Developer</em><br />&amp; Designer
      </h2>

      <div className="about-layout">
        {/* Left — Profile */}
        <div className="about-left reveal">
          <div className="profile-frame">
            {/* Sekarang menggunakan variabel fotoAbdul yang sudah di-import */}
            <img src={fotoAbdul} alt="Abdul Rosyid" className="profile-img" />
          </div>
          <div className="profile-name">Abdul Rosyid</div>
          <div className="profile-role">Frontend Developer</div>
        </div>

        {/* Right — Bio + Skills */}
        <div className="about-right">
          <p className="about-bio reveal">
            Saya adalah <strong> Siswa Wikrama Bogor Frontend Developer</strong> yang memiliki minat besar dalam
            pengembangan tampilan website yang modern, responsif, dan user-friendly.
            Saya senang mengubah desain menjadi tampilan interaktif yang menarik serta
            memberikan pengalaman terbaik bagi pengguna.
            <br /><br />
            Saya memiliki kemampuan dalam menggunakan <strong>HTML, CSS, JavaScript</strong>,
            serta framework modern seperti <strong>React,Laravel</strong>. Selain itu, saya adalah
            pribadi yang selalu ingin belajar hal baru dan berkembang dalam dunia teknologi.
          </p>

          <a href="#contact" className="btn btn-primary reveal" style={{ marginBottom: 36 }}>
            Hire Me <ArrowRight />
          </a>

          <div className="skills-grid">
            {SKILLS.map((sk) => (
              <div className="skill-card reveal" key={sk.label}>
                <div className="skill-label">{sk.label}</div>
                <div className="skill-tech">{sk.tech}</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${sk.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}