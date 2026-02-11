import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgb(9, 24, 36) 0%, rgb(18, 53, 70) 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          ZWEB Digitalbyrå
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            <div>Nettsider som skaffer</div>
            <div>kunder for norske bedrifter</div>
          </div>
          <div style={{ fontSize: 30, color: "rgb(178, 255, 226)" }}>
            Design • SEO • Drift fra dag én
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
