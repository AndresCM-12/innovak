"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import imageBg from "../../../../../../public/nuestrasraices/pfenergyBg.png";
import imageIcon from "../../../../../../public/nuestrasraices/pfenergyIcon.png";
import styles from "./technology.module.css";
import Image from "next/image";

import nutrisorb from "../../../../../../public/nuestrasraices/pfenergy/Nutrisorb.png";
import haddak from "../../../../../../public/nuestrasraices/pfenergy/Haddak.png";
import selectoXL from "../../../../../../public/nuestrasraices/pfenergy/SelectoXL.png";
import exuRoot from "../../../../../../public/nuestrasraices/pfenergy/ExuRoot.png";
import balox from "../../../../../../public/nuestrasraices/pfenergy/Balox.png";

const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Technologyclient({ info }) {
  const [lang, setLang] = useState("mxn");
  console.log(info);
  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  const featureInfo = [
    {
      icon: nutrisorb,
      text: "Nutrisorb: Bioestimulante para la asimilación de nutrientes.",
      link: "/productos/proteccion-de-cultivos/Nutrisorb-L",
    },
    {
      icon: haddak,
      text: "Haddak: Preventivo y corrector de estrés.",
      link: "/productos/proteccion-de-cultivos/Haddak",
    },
    {
      icon: selectoXL,
      text: "SelectoXL: Bioestimulante para el amarre y tamaño de frutos.",
      link: "/productos/proteccion-de-cultivos/Selecto-XL",
    },
    {
      icon: exuRoot,
      text: "ExuRoot: Bioestimulante Inductor de Exudados Radiculares.",
      link: "/productos/proteccion-de-cultivos/Exu-Root",
    },
    {
      icon: balox,
      text: "Balox: Bioestimulante contra el estrés salino.",
      link: "/productos/proteccion-de-cultivos/Balox",
    },
  ];

  const callsToAction = [
    {
      title: "Mayor actividad metabólica",
      side: "right",
      text: "",
      link: "",
    },
    {
      title: "Mejor calidad de cosechas",
      side: "left",
      text: "",
      link: "",
    },
    {
      title: "Mejor actividad reicular",
      side: "right",
      text: "",
      link: "",
    },
    {
      title: "Mejora de ambiente rizosférico",
      side: "left",
      text: "",
      link: "",
    },
    {
      title: "Disminución de estrés redicular",
      side: "right",
      text: "",
      link: "",
    },
  ];

  return (
    <section>
      <style jsx global>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${futura.style.fontFamily};
          }
        `}
      </style>
      <article className={styles.bgWrapper}>
        <Image
          src={info.header.imagen}
          width={300}
          height={180}
          alt="pfenergy icon"
        />
        <h3>{info.header.texto}</h3>
        <div className={styles.featureWrapper}>
          {info.featureInfo.map((feature, index) => (
            <div
              key={index}
              className={styles.feature}
              onClick={() => {
                //Open link in new tab
                window.open(`/${lang}${feature.link}`, "_blank");
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <Image src={feature.icon} width={112} height={112} alt="icon" />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.bgImageMobile}>
          <img src={info.header.bg} alt="bg" />
        </div>
        <div className={styles.callsToActionWrapper}>
          {info.callsToAction.map((element) => (
            <div className={styles.callToAction} data-side={element.side}>
              <h4>{element.title}</h4>
              {/* <p>Ver más</p> */}
            </div>
          ))}
        </div>
        <div className={styles.bgImage}>
          <img src={info.header.bg} alt="bg" />
        </div>
      </article>
      {/* Dynamic Header */}
    </section>
  );
}
