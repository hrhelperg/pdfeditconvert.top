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
          background: "#E50914",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        <div style={{ fontSize: 56, lineHeight: 1 }}>PDF</div>
        <div style={{ fontSize: 22, marginTop: 6, letterSpacing: 2 }}>
          EDITOR
        </div>
      </div>
    ),
    { ...size },
  );
}
