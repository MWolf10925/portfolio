import { ImageResponse } from "next/og";

// Dynamic social share card — matte charcoal + the MW monogram + the claim.
export const runtime = "edge";
export const alt = "Matthew Wolf — Robotics and software developer who ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131210",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* monogram */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="106" viewBox="0 0 120 132" fill="none">
            <path
              d="M36 76 L30 16 L60 56 L90 16 L84 76"
              stroke="#F4F2EE"
              strokeWidth="13"
              strokeLinejoin="miter"
            />
            <path
              d="M36 56 L30 116 L60 76 L90 116 L84 56"
              stroke="#F4F2EE"
              strokeWidth="13"
              strokeLinejoin="miter"
            />
            <polygon points="32,60 51,69 51,81 32,72" fill="#F26A1B" />
            <polygon points="88,60 69,69 69,81 88,72" fill="#F26A1B" />
          </svg>
          <span style={{ color: "#A8A29A", fontSize: 30, letterSpacing: -0.5 }}>
            Matthew Wolf
          </span>
        </div>

        {/* claim */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#F6F4F0",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            I turn hard problems into
          </span>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            <span style={{ color: "#F6F4F0" }}>things that </span>
            <span style={{ color: "#F26A1B" }}>ship.</span>
          </span>
        </div>

        {/* footer line */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#8C857C", fontSize: 26 }}>
          <span>Worlds-qualified VEX robotics lead programmer</span>
          <span style={{ color: "#F26A1B" }}>/</span>
          <span>Union, KY</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
