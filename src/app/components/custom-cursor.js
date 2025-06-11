"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true); // muncul pertama kali ketika user gerak
    };

    const checkHover = (e) => {
      const target = e.target;
      if (target.closest("button, a, input, textarea, select, .interactive")) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mouseout", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("mouseout", checkHover);
    };
  }, [hasMoved]);

  const shouldShow = hasMoved && !isHidden;

  return (
    <div
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-opacity duration-200 ${
        shouldShow ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="w-15 h-15 rounded-full bg-foreground/10 shadow-lg shadow-foreground backdrop-blur-xs -translate-x-5 -translate-y-5" />
    </div>
  );
}
