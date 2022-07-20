import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div className="loading-icon loading-compo" />
    </div>
  );
}
