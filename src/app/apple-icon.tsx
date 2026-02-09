import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          borderRadius: "36px",
        }}
      >
        <span
          style={{
            fontSize: "90px",
            fontWeight: 700,
            color: "#C8956A",
            letterSpacing: "-2px",
          }}
        >
          JH
        </span>
      </div>
    ),
    { ...size }
  );
}
