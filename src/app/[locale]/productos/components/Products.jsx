"use client";
import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import background from "../../../../../public/innovak-news/background.png";
import Link from "next/link";

import acondicionadoresDeSueloImg from "../../../../../public/products/acondicionadoresDeSuelo.png";
import bioestimulantesImg from "../../../../../public/products/bioestimulantes.png";
import nutrientesImg from "../../../../../public/products/nutrientes.png";
import proteccionDeCultivosImg from "../../../../../public/products/proteccionDeCultivos.png";

export default function ProductsClient({ texts }) {
  const [index, setIndex] = React.useState(0);
  const [lang, setLang] = useState("mxn");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  var pagesInfo = [
    {
      title: "PROTECCIÓN A CULTIVOS",
      subtitle: "Ver más",
      image: proteccionDeCultivosImg.src,
      link: `/${lang}/productos/proteccion-de-cultivos`,
    },
    {
      title: "BIOESTIMULANTES",
      subtitle: "Ver más",
      image: bioestimulantesImg.src,
      link: `/${lang}/productos/bioestimulantes`,
    },
    {
      title: "NUTRIENTES",
      subtitle: "ver más",
      image: nutrientesImg.src,
      link: `/${lang}/productos/nutrientes`,
    },
    {
      title: "ACONDICIONAMIENTO DE SUELOS",
      subtitle: "ver más",
      image: acondicionadoresDeSueloImg.src,
      link: `/${lang}/productos/acondicionadores-de-suelos`,
    },
  ];

  const handleNavigateTo = (i) => {
    console.log("navigating to", pagesInfo[i].link);
  };

  return (
    <section>
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
        {pagesInfo.map((page, i) => (
          <a href={page.link} key={i + "div"}>
            <div
              className={styles.productOption}
              style={{
                backgroundImage: `url(${page.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleNavigateTo(i)}
            >
              <h6>{page.title}</h6>
              <p>{page.subtitle}</p>
            </div>
          </a>
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
