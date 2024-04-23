"use client";
import React from "react";
import styles from "./inovakNews.module.css";
import Image from "next/image";
import background from "../../../../../public/innovak-news/background.png";

import comunik1 from "../../../../../public/innovak-news/comunik1.png";
import comunik2 from "../../../../../public/innovak-news/comunik2.png";
import comunik3 from "../../../../../public/innovak-news/comunik3.png";
import comunik4 from "../../../../../public/innovak-news/comunik4.png";
import comunik5 from "../../../../../public/innovak-news/comunik5.png";

import headerImg from "../../../../../public/innovak-news/header.svg";
import Link from "next/link";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ news }) {
  var comunikImages = [
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_19699/1/",
      img: comunik1,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_10173/1/",
      img: comunik2,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_10178/1/",
      img: comunik3,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_10181/1/",
      img: comunik4,
    },
    {
      link: "https://www.innovakglobal.com/revistacomunik/#flipbook-df_16790/1/",
      img: comunik5,
    },
  ];

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
      header: "ARTÍCULOS",
      title: "ARTÍCULOS",
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
      header: "REVISTA COMUNIK",
      title: "REVISTA COMUNIK",
      subtitle: "",
      image: background.src,
      content: <RevistaInnovak images={comunikImages} />,
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
          backgroundImage: `url(${pagesInfo[index].image})`,
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

function RevistaInnovak({ images }) {
  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>INNOVAK COMUNIK</h5>
        <p>
          Esta revista bimestral es un lugar para compartir muchos de los éxitos
          del equipo de Innovak Global y nace con el objetivo de brindar a los
          lectores una noción y entendimiento de lo que cada área realiza y como
          contribuyen a cumplir nuestro compromiso de alimentar sanamente al
          planeta a través de las propuestas de valor con las que contamos
        </p>
      </article>
      <div className={styles.revistasWrapper}>
        {images.map((object, i) => (
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => window.open(object.link, "_blank")}
            key={i}
            src={object.img}
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
  return (
    <section className={styles.ensayosWrapper}>
      {content.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <Image src={item.image} alt="Innovak News" width={150} height={150} />
          <div className={styles.newsItemFloating}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href={item.link} style={{ width: "100%" }} target="_blank">
              <div className={styles.newsButtonOutlined}>Ver más</div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
