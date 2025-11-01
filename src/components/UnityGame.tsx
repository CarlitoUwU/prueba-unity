import React from "react";

const UnityGame: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        border: "none",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <iframe
        src="/unity/index.html"
        title="Unity Game"
        allow="autoplay; fullscreen"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      ></iframe>
    </div>
  );
};

export default UnityGame;
