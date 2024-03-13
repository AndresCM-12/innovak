"use client";
import React from "react";
import styles from "./inovakNews.module.css";
import allStyles from "../../page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import map from "../../../../../public/inicio/map.png";
import background from "../../../../../public/innovak-news/background.png";

import comunik1 from "../../../../../public/innovak-news/comunik1.png";
import comunik2 from "../../../../../public/innovak-news/comunik2.png";
import comunik3 from "../../../../../public/innovak-news/comunik3.png";
import comunik4 from "../../../../../public/innovak-news/comunik4.png";
import comunik5 from "../../../../../public/innovak-news/comunik5.png";

import imgInnovakNews1 from "../../../../../public/inicio/innovakNews1.png";
import imgInnovakNews2 from "../../../../../public/inicio/innovakNews2.png";
import imgInnovakNews3 from "../../../../../public/inicio/innovakNews3.png";
import Link from "next/link";

export default function ContactPageClient({ texts }) {
  const [index, setIndex] = React.useState(0);

  var comunikImages = [comunik1, comunik2, comunik3, comunik4, comunik5];
  var content = [
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews1,
    },
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews2,
    },
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews3,
    },
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews1,
    },
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews2,
    },
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews1,
    },
    {
      title: "antiguedad. Richard McClintock, un profesor de Latin de la",
      text: "eratura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia,",
      link: "/innovak-news",
      image: imgInnovakNews2,
    },
  ];

  var pagesInfo = [
    {
      header: "INNOVAK NEWS",
      title: "POSTERS E INFOGRAFÍAS",
      subtitle: "",
      image: background.src,
      content: <Ensayos content={content} />,
    },
    {
      header: "ARTÍCULOS",
      title: "ARTÍCULOS",
      subtitle: "",
      image: background.src,
      content: <Ensayos content={content} />,
    },
    {
      header: "ENSAYOS",
      title: "ENSAYOS",
      subtitle: "",
      image: background.src,
      content: <RevistaInnovak images={comunikImages} />,
    },
    {
      header: "REVISTA COMUNIK",
      title: "REVISTA COMUNIK",
      subtitle: "",
      image: background.src,
      content: <RevistaInnovak images={comunikImages} />,
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
        <h1>{pagesInfo[index].header}</h1>
        <p>{pagesInfo[index].subtitle}</p>
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
        {images.map((image, i) => (
          <Image key={i} src={image} alt="comunik" width={320} height={480} />
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
            <Link href={item.link} style={{ width: "100%" }}>
              <div className={styles.newsButtonOutlined}>Ver más</div>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
