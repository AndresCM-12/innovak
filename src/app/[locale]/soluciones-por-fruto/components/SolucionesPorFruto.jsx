"use client";
import React from "react";
import styles from "./solucionesFruto.module.css";
import Image from "next/image";
import background from "../../../../../public/soluciones-fruto/background.png";

import itemBg from "../../../../../public/soluciones-fruto/itembg.png";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function SolucionesPorFruto({ texts }) {
  var items = [
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
    {
      title: "FRAMBUESA",
      bg: itemBg,
    },
  ];

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
          backgroundImage: `url(${background.src})`,
          zIndex: 0,
        }}
      >
        <h1>SOLUCIONES POR CULTIVO</h1>
      </article>
      {/* Header */}

      {/* Form */}
      <RevistaInnovak items={items} />
      {/* Form */}
    </section>
  );
}

function RevistaInnovak({ items }) {
  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>ACTIVIDAD RADICULAR</h5>
        <p>
          Es una línea de formulaciones dirigida a resolver problemas de
          compactación o salinidad de suelos, de uso en la mayoría de los
          cultivos.
        </p>
      </article>
      <div className={styles.revistasWrapper}>
        {items.map((item, i) => (
          <div key={i} className={styles.itemsWrapper}>
            <div className={styles.floating}>
              <h6>{item.title}</h6>
            </div>
            <Image
              className={styles.itemBg}
              style={{
                filter: "brightness(60%);",
                zIndex: -1,
              }}
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
