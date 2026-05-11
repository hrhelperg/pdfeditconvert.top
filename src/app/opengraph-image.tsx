// ImageResponse uses Satori, which only understands inline styles.
import { ImageResponse } from "next/og";

export const alt = "PDF Editor — Edit, Convert, Sign and Scan PDFs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "Inter, system-ui, -apple-system, Helvetica, Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 18,
              background: "#E50914",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            PDF
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#0B1220",
              display: "flex",
              gap: 14,
            }}
          >
            <span style={{ color: "#E50914" }}>PDF</span>
            <span>Editor</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 56,
            fontWeight: 800,
            color: "#0B1220",
            lineHeight: 1.1,
            maxWidth: 1000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>All-in-One PDF Solution</span>
          <span>for Work, Study &amp; Life.</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#4B5563" }}>
          pdfeditconvert.top
        </div>
      </div>
    ),
    { ...size },
  );
}
