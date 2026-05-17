const PROJECTS = [
  {
    previewClass: "preview-aqua-1",
    preview: (
      <>
        <div className="prev-bar">
          <div className="prev-dot" />
          <div className="prev-dot" />
          <div className="prev-dot" />
        </div>

        <div className="prev-line accent w-3q" />
        <div className="prev-line w-half" />

        <div className="prev-blocks">
          <div className="prev-block accent" />
          <div className="prev-block" />
        </div>

        <div className="prev-line w-full" />
        <div className="prev-line w-3q" />
      </>
    ),

    tags: ["Laravel", "Blade", "PHP", "DrawSQL", "JS"],
    title: (
      <>
        E-Commerce Restaurant
        <br />
        Management Dashboard
      </>
    ),

    desc: "Platform manajemen toko online dengan analitik real-time dan sistem inventori cerdas.",
    href: "http://127.0.0.1:8000/login",
    codeHref: "https://github.com/AbdulRosyid0610/restoran0606",
  },

  {
    previewClass: "preview-aqua-2",

    preview: (
      <>
        <div className="prev-bar">
          <div className="prev-dot" />
          <div className="prev-dot" />
          <div className="prev-dot" />
        </div>

        <div className="prev-line accent w-full" />
        <div className="prev-line w-3q" />

        <div className="prev-blocks">
          <div className="prev-block" />
          <div className="prev-block accent" />
          <div className="prev-block accent" />
          <div className="prev-block" />
        </div>

        <div className="prev-line w-half" />
      </>
    ),

    tags: ["React", "JSX", "CSS"],

    title: (
      <>
        E-Commerce PustakaNusa
        <br />
        Dashboard
      </>
    ),

    desc: "Sistem buku pembelajaran dengan fitur buku streaming dan kuis interaktif.",
    href: "https://buku-project.vercel.app/",
    codeHref: "https://github.com/AbdulRosyid0610/buku_aku",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-divider" />

      <div className="section-tag">
        <span className="section-tag-num">02</span> Selected Work
      </div>

      <h2 className="section-heading">
        My Project Collection <em>Which has</em>
        <br />
        been put into practice
      </h2>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className="project-card reveal" key={i}>
            <div className={`project-preview ${p.previewClass}`}>
              <div className="preview-inner">{p.preview}</div>
            </div>

            <div className="project-body">
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="project-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-title">{p.title}</div>

              <p className="project-desc">{p.desc}</p>

              {/* WRAPPER FLEX */}
              <div className="project-actions">

                {/* Tombol Lihat Proyek */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Lihat Proyek

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Tombol Kode */}
                <a
                  href={p.codeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-code-btn"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                  </svg>

                  Kode
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}