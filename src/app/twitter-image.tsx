import { ImageResponse } from "next/og";

export const alt = "Justin Hernandez | Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0A0A0B",
          position: "relative",
        }}
      >
        {/* Brass glow behind content */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(200,149,106,0.15) 0%, rgba(200,149,106,0.04) 50%, transparent 70%)",
            filter: "blur(60px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#F0EDE8",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Justin Hernandez
          </span>

          {/* Brass accent line */}
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#C8956A",
              borderRadius: "2px",
              marginTop: "24px",
              marginBottom: "24px",
            }}
          />

          <span
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#B8B2A8",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Product design leader for complex, human-centered systems
          </span>
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent 0%, #C8956A 30%, #C278A0 70%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
