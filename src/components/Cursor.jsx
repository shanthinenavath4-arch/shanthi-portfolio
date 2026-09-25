import React, { useEffect, useState } from "react";
import "./Cursor.css";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleHover = (event) => {
      const interactive = event.target.closest(
        "a, button, input, textarea, select"
      );

      setHover(Boolean(interactive));
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      className={`magnetic-cursor ${
        hover ? "magnetic-hover" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="magnetic-aura" />
      <div className="magnetic-ring" />
      <div className="magnetic-core" />
    </div>
  );
}

export default Cursor;