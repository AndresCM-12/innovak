"use client";
import React, { useEffect, useState } from "react";
import styles from "./solucionesCultivo.module.css";
import Image from "next/image";
import background from "../../../../../public/soluciones-cultivo/background.png";

import actividadRadicularBg from "../../../../../public/soluciones-cultivo/backgrounds/actividadRadicularBg.jpg";
import amarreBg from "../../../../../public/soluciones-cultivo/backgrounds/amarreBg.jpg";
import brotacionBg from "../../../../../public/soluciones-cultivo/backgrounds/brotacionBg.jpg";
import calidadBg from "../../../../../public/soluciones-cultivo/backgrounds/calidadBg.jpg";
import compactacionBg from "../../../../../public/soluciones-cultivo/backgrounds/compactacionBg.jpg";
import descargaBg from "../../../../../public/soluciones-cultivo/backgrounds/descargaBg.jpg";
import fertilidadBg from "../../../../../public/soluciones-cultivo/backgrounds/fertilidadBg.jpg";
import floracionBg from "../../../../../public/soluciones-cultivo/backgrounds/floracionBg.jpg";
import nematodosBg from "../../../../../public/soluciones-cultivo/backgrounds/nematodosBg.jpg";
import nutricionBg from "../../../../../public/soluciones-cultivo/backgrounds/nutricionBg.jpg";
import plagaEnfermedadesBg from "../../../../../public/soluciones-cultivo/backgrounds/plagaEnfermedadesBg.jpg";
import proteccionDeCultivosBg from "../../../../../public/soluciones-cultivo/backgrounds/proteccionDeCultivos.jpg";
import salinidadBg from "../../../../../public/soluciones-cultivo/backgrounds/salinidadBg.jpg";
import tamañoBg from "../../../../../public/soluciones-cultivo/backgrounds/tamañoBg.jpg";

import acondicionadorDeSuelosIcon from "../../../../../public/soluciones-cultivo/icons/acondicionadorDeSuelosIcon.png";
import actividadRadicularIcon from "../../../../../public/soluciones-cultivo/icons/actividadRadicular.png";
import amarreTamañoDeFrutoIcon from "../../../../../public/soluciones-cultivo/icons/amarreTamañoDeFruto.png";
import correcciónDeDeficienciasNutricionalesIcon from "../../../../../public/soluciones-cultivo/icons/correcciónDeDeficienciasNutricionales.png";
import descargaEficienteIcon from "../../../../../public/soluciones-cultivo/icons/descargaEficiente.png";
import estresSalinoIcon from "../../../../../public/soluciones-cultivo/icons/estresSalino.png";
import fertilidadBiologicaIcon from "../../../../../public/soluciones-cultivo/icons/fertilidadBiologica.png";
import floraciónYBrotaciónIcon from "../../../../../public/soluciones-cultivo/icons/floraciónYBrotación.png";
import protecciónContraNematodosIcon from "../../../../../public/soluciones-cultivo/icons/protecciónContraNematodos.png";
import sanidadRadicularIcon from "../../../../../public/soluciones-cultivo/icons/sanidadRadicular.png";
import vidaAnaquelPostcosechaIcon from "../../../../../public/soluciones-cultivo/icons/vidaAnaquelPostcosecha.png";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ texts }) {
  var items = [
    {
      title: "AMARRE DE FRUTO",
      icon: amarreTamañoDeFrutoIcon,
      bg: amarreBg,
      link: "/soluciones-por-cultivo/amarre-de-fruto",
    },
    {
      title: "TAMAÑO DE FRUTO",
      icon: amarreTamañoDeFrutoIcon,
      bg: tamañoBg,
      link: "/soluciones-por-cultivo/tamano-de-fruto",
    },
    {
      title: "Actividad radicular",
      icon: actividadRadicularIcon,
      bg: actividadRadicularBg,
      link: "/soluciones-por-cultivo/actividad-radicular",
    },
    {
      title: "Sanidad radicular",
      icon: sanidadRadicularIcon,
      bg: salinidadBg,
      link: "/soluciones-por-cultivo/sanidad-radicular",
    },
    {
      title: "Calidad y vida post cosecha",
      icon: vidaAnaquelPostcosechaIcon,
      bg: calidadBg,
      link: "/soluciones-por-cultivo/calidad-y-vida-post-cosecha",
    },
    {
      title: "Aumento de calibres",
      icon: vidaAnaquelPostcosechaIcon,
      bg: tamañoBg,
      link: "/soluciones-por-cultivo/aumento-de-calibres",
    },
    {
      title: "Control bioracional de Nematodos",
      icon: protecciónContraNematodosIcon,
      bg: nematodosBg,
      link: "/soluciones-por-cultivo/control-bioracional-de-nematodos",
    },
    {
      title: "Fertildiad biologica",
      icon: fertilidadBiologicaIcon,
      bg: fertilidadBg,
      link: "/soluciones-por-cultivo/fertilidad-biologica",
    },
    {
      title: "Estrés radicular",
      icon: estresSalinoIcon,
      bg: salinidadBg,
      link: "/soluciones-por-cultivo/estres-radicular",
    },
    {
      title: "Compactación de suelos",
      icon: acondicionadorDeSuelosIcon,
      bg: compactacionBg,
      link: "/soluciones-por-cultivo/compactacion-de-suelos",
    },
    {
      title: "Brotación",
      icon: floraciónYBrotaciónIcon,
      bg: brotacionBg,
      link: "/soluciones-por-cultivo/brotacion",
    },
    {
      title: "Floración",
      icon: floraciónYBrotaciónIcon,
      bg: floracionBg,
      link: "/soluciones-por-cultivo/floracion",
    },
    {
      title: "Control bioracional de plagas y enfermedades",
      icon: protecciónContraNematodosIcon,
      bg: plagaEnfermedadesBg,
      link: "/soluciones-por-cultivo/control-bioracional-de-plagas-y-enfermedades",
    },
    {
      title: "Corrección de deficiencias nutricionales",
      icon: correcciónDeDeficienciasNutricionalesIcon,
      bg: nutricionBg,
      link: "/soluciones-por-cultivo/correccion-de-deficiencias-nutricionales",
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
  const [lang, setLang] = useState("mxn");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>¿CUÁL ES TU PROBLEMÁTICA?</h5>
        <p>
          Es una línea de formulaciones dirigida a resolver problemas de
          compactación o salinidad de suelos, de uso en la mayoría de los
          cultivos.
        </p>
      </article>
      <div className={styles.revistasWrapper}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.itemsWrapper}
            onClick={() => {
              window.location.href = `/${lang}${item.link}`;
            }}
          >
            <div className={styles.floating}>
              <Image src={item.icon} alt="Icono" width={130} height={130} />
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
