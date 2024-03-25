"use client";
import React from "react";
import styles from "./presencia.module.css";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

import mexicoMap from "../../../../../public/presencia/mexico.svg";
import background from "../../../../../public/presencia/background.png";
import Image from "next/image";

export default function PresenciaClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var pagesInfo = [
    {
      title: "MÉXICO",
      subtitle: "",
      image: background.src,
      content: <MapMexico map={mexicoMap}/>,
    },
    {
      title: "ESTADOS UNIDOS",
      subtitle: "",
      image: background.src,
      content: <Map />,
    },
    {
      title: "BRASIL",
      subtitle: "",
      image: background.src,
      content: <Map />,
    },
    {
      title: "TURQUÍA",
      subtitle: "",
      image: background.src,
      content: <Map />,
    },
  ];

  const handleNextStep = (i) => {
    window.scrollTo(0, 0);
    setIndex(i);
  };

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
          backgroundImage: `url(${pagesInfo[index].image})`,
          zIndex: 0,
        }}
      >
        <h1>LOCALIZADOR DE COMERCIALES</h1>
      </article>
      {/* Dynamic Header */}

      {/* Select Option */}
      <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <>
            <div
              className={index === i ? `${styles.active}` : ""}
              onClick={() => handleNextStep(i)}
            >
              <p>{page.title}</p>
            </div>
            <span key={i + "span"} className={styles.separator}></span>
          </>
        ))}
      </div>
      {/* Select Option */}

      {/* Form */}
      {pagesInfo[index].content}
      {/* Form */}
    </section>
  );
}

function Map() {
  return (
    <section className={styles.presenciaWrapper} style={{ height: "800px" }}>
      <div className={styles.mapWrapper}></div>
    </section>
  );
}

function MapMexico({map}) {
  return (
    <section className={styles.presenciaWrapper}>
      <div className={styles.mapWrapper}>
        <Image width={10} height={10} src={map} alt="Mexico" />
      </div>
    </section>
  );
}
