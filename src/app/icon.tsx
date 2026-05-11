import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#E50914",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 800,
          fontFamily: "Helvetica, Arial, sans-serif",
          borderRadius: 6,
          letterSpacing: -0.5,
        }}
      >
        PDF
      </div>
    ),
    { ...size },
  );
}
