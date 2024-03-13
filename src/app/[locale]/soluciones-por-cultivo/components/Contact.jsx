"use client";
import React from "react";
import styles from "./solucionesCultivo.module.css";
import Image from "next/image";
import background from "../../../../../public/soluciones-cultivo/background.png";

import itemBg from "../../../../../public/soluciones-cultivo/itembg.png";
import acondicionadorDeSuelosIcon from "../../../../../public/soluciones-cultivo/icons/acondicionadorDeSuelosIcon.png";

export default function ContactPageClient({ texts }) {
  var items = [
    {
      title: "PROTECCION DE CULTIVOS",
      icon: acondicionadorDeSuelosIcon,
      bg: itemBg,
    },
    {
      title: "PROTECCION DE CULTIVOS",
      icon: acondicionadorDeSuelosIcon,
      bg: itemBg,
    },
    {
      title: "PROTECCION DE CULTIVOS",
      icon: acondicionadorDeSuelosIcon,
      bg: itemBg,
    },
    {
      title: "PROTECCION DE CULTIVOS",
      icon: acondicionadorDeSuelosIcon,
      bg: itemBg,
    },
    {
      title: "PROTECCION DE CULTIVOS",
      icon: acondicionadorDeSuelosIcon,
      bg: itemBg,
    },
  ];

  return (
    <section>
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
        <h5>¿CUÁL ES TU PROBLEMÁTICA?</h5>
        <p>
          Es una línea de formulaciones dirigida a resolver problemas de
          compactación o salinidad de suelos, de uso en la mayoría de los
          cultivos. Son productos de
        </p>
      </article>
      <div className={styles.revistasWrapper}>
        {items.map((item, i) => (
          <div key={i} className={styles.itemsWrapper}>
            <div className={styles.floating}>
              <Image src={item.icon} alt="Icono" width={120} height={120} />
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
