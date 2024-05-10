"use client";
import React, { useEffect, useState } from "react";
import styles from "./inovakNews.module.css";
import Image from "next/image";
import background from "../../../../../public/innovak-news/background.png";

import headerImg from "../../../../../public/innovak-news/header.svg";
import Link from "next/link";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ news, info }) {
  var comunikImages = info.revistas;

  var pagesInfo = [
    // {
    //  header: "INNOVAK NEWS",
    // title: "POSTERS E INFOGRAFÍAS",
    //   subtitle: "",
    //   image: background.src,
    //   content: <RevistaInnovak images={comunikImages} />,
    //   hash: "posters-e-infografias",
    // },
    {
      header: info.info.articulosTitulo,
      title: info.info.articulosTitulo,
      subtitle: "",
      image: background.src,
      content: <Ensayos content={news} />,
      hash: "articulos",
    },
    // {
    //   header: "ENSAYOS",
    //   title: "ENSAYOS",
    //   subtitle: "",
    //   image: background.src,
    //   content: <RevistaInnovak images={comunikImages} />,
    //   hash: "ensayos",
    // },
    {
      header: info.info.revistaTitulo,
      title: info.info.revistaTitulo,
      subtitle: "",
      image: background.src,
      content: <RevistaInnovak info={comunikImages} />,
      hash: "revista-comunik",
    },
  ];

  const getCurrentIndex = () => {
    const hash = window.location.hash;
    var tempIndex = 0;
    switch (hash) {
      case "#articulos":
        tempIndex = 0;
        break;
      case "#revista-comunik":
        tempIndex = 1;
        break;
      default:
        tempIndex = 0;
        break;
    }
    return tempIndex;
  };

  //Set current index of pageInfo on first load
  const [index, setIndex] = React.useState(getCurrentIndex());

  //Set current index of pageInfo on hash change to generate history navigation
  window.addEventListener("hashchange", () => {
    setIndex(getCurrentIndex());
  });

  const handleNextStep = (i) => {
    window.location.hash = pagesInfo[i].hash;
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
          backgroundImage: `url(${info.info.imagenFondo})`,
          zIndex: 0,
        }}
      >
        <Image
          src={headerImg}
          style={{
            maxWidth: "600px",
            width: "100%",
            maxHeight: "125px",
            height: "auto",
            paddingInline: "20px",
          }}
          width={600}
          height={125}
          alt="Innovak news título"
        />
      </article>
      {/* Dynamic Header */}

      {/* Select Option */}
      <div className={styles.selectOptionWrapper}>
        {pagesInfo.map((page, i) => (
          <div
            className={index === i ? `${styles.active}` : ""}
            key={i + "div"}
            onClick={() => handleNextStep(i)}
          >
            <p>{page.title}</p>
          </div>
        ))}
      </div>
      {/* Select Option */}

      {/* Form */}
      {pagesInfo[index].content}
      {/* Form */}
    </section>
  );
}

function RevistaInnovak({ info }) {
  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>{info.titulo}</h5>
        <p>{info.subTitulo}</p>
      </article>
      <div className={styles.revistasWrapper}>
        {info.revistas.map((object, i) => (
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => window.open(object.documento, "_blank")}
            key={i}
            src={object.preview}
            alt="comunik"
            width={320}
            height={480}
          />
        ))}
      </div>
    </section>
  );
}

function Ensayos({ content }) {
  var [lang, setLang] = useState("mx");
  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  return (
    <section className={styles.ensayosWrapper}>
      {content.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <Image src={item.image} alt="Innovak News" width={150} height={150} />
          <div className={styles.newsItemFloating}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link
              href={"/" + lang + "/innovak-news/" + item.link.split("/")[3]}
              style={{ width: "100%" }}
            >
              <div className={styles.newsButtonOutlined}>{item.cta}</div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
