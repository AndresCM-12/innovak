"use client";
import React from "react";
import styles from "./nuestrasRaices.module.css";
import background from "../../../../../public/innovak-news/background.png";
import Link from "next/link";

export default function NuestrasRaicesClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var pagesInfo = [
    {
      title: "QUIENES SOMOS",
      subtitle: "",
      image: background.src,
      content: <Map />,
    },
    {
      title: "TECNOLOGÍAS",
      subtitle: "",
      image: background.src,
      content: <Map />,
    },
    {
      title: "CERTIFICACIONES",
      subtitle: "",
      image: background.src,
      content: <Map />,
    },
    {
      title: "REVOLUCIÓN SUSTENTABLE",
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
              key={i + "div"}
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
    <section className={styles.revistaInnovak} style={{ height: "800px" }}>
      <div className={styles.revistasWrapper}></div>
    </section>
  );
}
