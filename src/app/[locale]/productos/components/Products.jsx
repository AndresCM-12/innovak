"use client";
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ProductsClient({ categorias, info }) {
  const [lang, setLang] = useState("mxn");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  return (
    <section>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${futura.style.fontFamily};
        }
      `}</style>
      {/* Dynamic Header */}
      <article
        className={styles.header}
        style={{
          backgroundColor: "#00318D",
          zIndex: 0,
        }}
      >
        <h1>{info.titulo}</h1>
        <p>{info.subTitulo}</p>
      </article>
      {/* Dynamic Header */}

      {/* Select Option */}
      <div className={styles.selectOptionWrapper}>
        {categorias.map((page, i) => (
          <a href={page.link} key={i + "div"}>
            <div
              className={styles.productOption}
              style={{
                backgroundImage: `url(${page.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#0d0e49",
              }}
            >
              <h6>{page.title}</h6>
              <p>{page.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
      {/* Select Option */}
    </section>
  );
}
