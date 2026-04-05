import { useRef, useEffect } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + "px";
        ringRef.current.style.top  = e.clientY + "px";
      }
    };

    const over = (e) => {
      if (e.target.closest("a, button")) {
        cursorRef.current?.classList.add("hover");
        ringRef.current?.classList.add("hover");
      }
    };

    const out = () => {
      cursorRef.current?.classList.remove("hover");
      ringRef.current?.classList.remove("hover");
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover",  over);
    document.addEventListener("mouseout",   out);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover",  over);
      document.removeEventListener("mouseout",   out);
    };
  }, []);

  return (
    <>
      <div className="cursor"      ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef}   />
    </>
  );
}