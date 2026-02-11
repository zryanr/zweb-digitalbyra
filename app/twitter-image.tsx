import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgb(9, 24, 36) 0%, rgb(18, 53, 70) 100%)",
          color: "white",
          padding: "48px 64px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: 30, fontWeight: 700 }}>ZWEB Digitalbyrå</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            <div>Profesjonelle nettsider</div>
            <div>for norske bedrifter</div>
          </div>
          <div style={{ fontSize: 24, color: "rgb(178, 255, 226)" }}>
            Fra 999 kr/mnd
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
