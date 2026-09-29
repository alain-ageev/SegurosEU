import { ImageResponse } from "next/og";

export const alt = "E DIAS Corretora de Seguros — Recife";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(145deg, #052E44 0%, #041f2f 55%, #052E44 100%)",
          padding: 72,
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 72,
            width: 72,
            height: 72,
            background: "#B6A571",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#052E44",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          ED
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: 4 }}>
          E DIAS
        </div>
        <div style={{ marginTop: 12, fontSize: 22, letterSpacing: 6, color: "#B6A571" }}>
          CORRETORA DE SEGUROS
        </div>
        <div style={{ marginTop: 20, fontSize: 26, color: "#d7e0e8" }}>
          Segurança, confiança e credibilidade em Recife
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 18,
            background: "#B6A571",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
