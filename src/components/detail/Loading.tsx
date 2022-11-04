import React, { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      const scrollbar = window.innerWidth - body.clientWidth;
      body.setAttribute(
        "style",
        `--scrollbar: ${scrollbar}px; overflow: hidden;`
      );
    }
  }, []);
  return (
    <div
      style={{
        display: "relative",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div className="loading-icon loading-compo" />
    </div>
  );
}
