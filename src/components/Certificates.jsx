import { useState } from "react";

// IMPORT GAMBAR
import cert1 from "../assets/Image1.png";
import cert2 from "../assets/Image2.png";
import cert3 from "../assets/Image3.png";
import cert4 from "../assets/Image4.png";
import cert5 from "../assets/Image5.png";
import cert6 from "../assets/Image6.jpeg";

// ── Ganti data di bawah sesuai sertifikat kamu ──────────────
const CERTIFICATES = [
  {
    img: cert1,
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    year: "15/11/2024",
  },
  {
    img: cert2,
    title: "Java Fundamentals Cource For Beginners",
    issuer: "Udemy",
    year: "2024",
  },
  {
    img: cert3,
    title: "Memulai Pemrograman Dengan Java",
    issuer: "Dicoding Indonesia",
    year: "2023",
  },
  {
    img: cert4,
    title: "ILO Covid Project | Sertifikat E-Learning K3",
    issuer: "freeCodeCamp",
    year: "2023",
  },
  {
    img: cert5,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2023",
  },
  {
    img: cert6,
    title: "Belajar dasar Ai",
    issuer: "Coursera",
    year: "2022",
  },
];
// ────────────────────────────────────────────────────────────

// Berapa slide yang tampil sekaligus (di layar besar)
const VISIBLE = 3;

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null); // index foto yang di-zoom

  const maxIndex = CERTIFICATES.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <>
      <section id="certificates" className="section cert-section">
        <div className="section-divider" />
        <div className="section-tag">
          <span className="section-tag-num">03</span> Certificates
        </div>
        <h2 className="section-heading">
          Proof of <em>Learning</em><br />& Growth
        </h2>

        {/* ── Slider wrapper ── */}
        <div className="cert-slider-wrap">

          {/* Prev button */}
          <button
            className="cert-arrow cert-arrow-left"
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Track */}
          <div className="cert-slider-overflow">
            <div
              className="cert-track"
              style={{ transform: `translateX(calc(-${current} * (var(--card-w) + 20px)))` }}
            >
              {CERTIFICATES.map((cert, i) => (
                <div
                  className="cert-card"
                  key={i}
                  onClick={() => setLightbox(i)}
                  title="Klik untuk perbesar"
                >
                  <div className="cert-img-wrap">
                    <img src={cert.img} alt={cert.title} className="cert-img" />
                    <div className="cert-overlay">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="cert-body">
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            className="cert-arrow cert-arrow-right"
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="cert-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`cert-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <button className="cert-lb-close" onClick={() => setLightbox(null)} aria-label="Tutup">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev in lightbox */}
          <button
            className="cert-lb-nav cert-lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => Math.max(l - 1, 0)); }}
            disabled={lightbox === 0}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="cert-lb-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={CERTIFICATES[lightbox].img}
              alt={CERTIFICATES[lightbox].title}
              className="cert-lb-img"
            />
            <div className="cert-lb-info">
              <div className="cert-lb-title">{CERTIFICATES[lightbox].title}</div>
              <div className="cert-lb-sub">
                {CERTIFICATES[lightbox].issuer} · {CERTIFICATES[lightbox].year}
              </div>
            </div>
          </div>

          {/* Next in lightbox */}
          <button
            className="cert-lb-nav cert-lb-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((l) => Math.min(l + 1, CERTIFICATES.length - 1)); }}
            disabled={lightbox === CERTIFICATES.length - 1}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}