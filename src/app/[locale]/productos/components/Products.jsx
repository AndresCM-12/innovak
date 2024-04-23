"use client";
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ProductsClient({ categorias }) {
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
        <h1>NUESTROS PRODUCTOS MÉXICO</h1>
        <p>
          Los productos de Innovak trabajan para el campo de una forma natural
          en que la planta los asimila, es por ello que son parte de la
          tecnología ECCA Carboxy, la cual se enfoca a varios segmentos para
          resolver problemas puntuales de la agricultura tecnifica.
        </p>
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
