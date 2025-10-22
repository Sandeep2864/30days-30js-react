// src/projects/day01/Day01.jsx
import { useEffect } from "react";
import "./style.css";

export default function Day01() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="day01-container">
      <h2>Day 01: Counter</h2>
      <button id="increment">+</button>
      <span id="count">0</span>
      <button id="decrement">-</button>
    </div>
  );
}
