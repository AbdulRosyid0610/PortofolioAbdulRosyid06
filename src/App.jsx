import "./index.css";

import Cursor       from "./components/Cursor";
import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Projects     from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import useReveal    from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}