"use client";
import React from "react";
import localFont from "next/font/local";

const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Technologyclient({ texts }) {
  return (
    <section>
      <style jsx global>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${futura.style.fontFamily};
          }
        `}
      </style>
      <div
        style={{
          width: "100%",
          height: "1000px",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#00318D",
          color: "white",
        }}
      >
        Technology works
      </div>
      {/* Dynamic Header */}
    </section>
  );
}
