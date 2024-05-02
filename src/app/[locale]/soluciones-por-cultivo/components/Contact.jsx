"use client";
import React, { useEffect, useState } from "react";
import styles from "./solucionesCultivo.module.css";
import Image from "next/image";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ info }) {
  var items = info.soluciones;

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
      {/* Header */}
      <article
        className={styles.header}
        style={{
          backgroundImage: `url(${info.info.bg})`,
          zIndex: 0,
        }}
      >
        <h1>{info.info.titulo}</h1>
      </article>
      {/* Header */}

      {/* Form */}
      <RevistaInnovak items={items} info={info.info} />
      {/* Form */}
    </section>
  );
}

function RevistaInnovak({ items, info }) {
  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>{info.pregunta}</h5>
        <p>{info.subtitulo}</p>
      </article>
      <div className={styles.revistasWrapper}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.itemsWrapper}
            onClick={() => {
              window.location.href = item.link;
            }}
          >
            <div className={styles.floating}>
              <h6>{item.title}</h6>
            </div>
            <Image
              className={styles.itemBg}
              src={item.bg}
              alt="Imagen de fondo"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
