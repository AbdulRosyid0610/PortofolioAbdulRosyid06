import { useState, useEffect } from "react";

const LINKS = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="logo">Abdul <em>Rosyid</em></div>
      <ul className="nav-links">
        {LINKS.map((s) => (
          <li key={s}>
            <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}