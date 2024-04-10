"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import imageBg from "../../../../../../public/nuestrasraices/rdrBg.png";
import imageIcon from "../../../../../../public/nuestrasraices/rdrIcon.png";
import styles from "./technology.module.css";
import Image from "next/image";

import rdr1 from "../../../../../../public/nuestrasraices/rdr/1.png";
import rdr2 from "../../../../../../public/nuestrasraices/rdr/2.png";
import rdr3 from "../../../../../../public/nuestrasraices/rdr/3.png";
import rdr4 from "../../../../../../public/nuestrasraices/rdr/4.png";
import rdr5 from "../../../../../../public/nuestrasraices/rdr/5.png";

const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Technologyclient({ texts }) {
  const [showVideos, setShowVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    `https://www.youtube.com/embed/XhNS1WVD4Q0`,
    `https://www.youtube.com/embed/rt_JjcBvNQo`,
    `https://www.youtube.com/embed/e4zZg6Hnwe0`,
    `https://www.youtube.com/embed/D7xIKIH6vKM`,
    `https://www.youtube.com/embed/Di_JBgf3VIA`,
  ];

  const handleLinkClick = (index) => {
    setVideoIndex(index);
    setShowVideos(true);
  };

  const featureInfo = [
    {
      icon: rdr1,
      text: "Investiga, GENERA CONOCIMIENTO sobre los nuevos retos de la agricultura.",
    },
    {
      icon: rdr2,
      text: "Diagnostica CON TECNOLOGIA DE VANGUARDIA la condición de la raíz en su cultivo.",
    },
    {
      icon: rdr3,
      text: "Implementa herramientas INNOVADORAS para prologar la vida de la raíz",
    },
    {
      icon: rdr4,
      text: "Modifica prácticas de manejo para maximizar productividad.",
    },
    {
      icon: rdr5,
      text: "Evalúa el desempeño de la raíz y el cultivo.",
    },
  ];

  const callsToAction = [
    {
      title: "Acondicionamiento de suelos",
      text: "Modifica suelos afectados por compactación o salinidad.",
      number: "1",
      link: "https://youtu.be/XhNS1WVD4Q0?si=aKyw4TN-qXtMKBKC",
    },
    {
      title: "Estrés radicular",
      text: "Bioestimula el metabolismo de la raíz para inducir tolerancia al estrés salino.",
      number: "2",
      link: "https://youtu.be/rt_JjcBvNQo?si=jNCCym0wYQMP2V8E",
    },
    {
      title: "Actividad Radicular",
      text: "Mantener la vitalidad de la raíz y su funcionalidad.",
      number: "3",
      link: "https://youtu.be/e4zZg6Hnwe0?si=wl649hLFDUtGMjdp",
    },
    {
      title: "Ambiente rizosférico:",
      text: "Bioestimula la raíz y favorece la microbiología de suelos para fomentar una adecuada condición ecológica de la rizosfera.",
      number: "4",
      link: "https://youtu.be/D7xIKIH6vKM?si=eEMTX-YGQrVokkfB",
    },
    {
      title: "Sanidad Radicular",
      text: "Modificar las condiciones el medio ambiente radicular que restrinja el desarrollo de los fitopatógenos.",
      number: "5",
      link: "https://youtu.be/Di_JBgf3VIA?si=PfElgdAH-WERd3Hs",
    },
  ];

  return (
    <section>
      <>
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
        <article className={styles.bgWrapperMain}>
          <div className={styles.bgWrapper}>
            <Image src={imageIcon} width={300} alt="pfenergy icon" />
            <h3>
              RDR (Regulación de la dinámica Radicular) es una tecnología
              enfocada a la raíz y su medio ambiente para maximizar la
              productividad de los cultivos de manera sustentable.
            </h3>
            <div className={styles.featureWrapper}>
              {featureInfo.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <Image
                    src={feature.icon}
                    width={112}
                    height={112}
                    alt="icon"
                  />
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.callToActionWrapper}>
            {callsToAction.map((element, index) => (
              <div
                className={styles.column}
                key={"callta" + index}
                onClick={() => handleLinkClick(index)}
              >
                <div className={styles.callToAction}>
                  <h3>{element.number}</h3>
                  <h4>{element.title}</h4>
                  <p>{element.text}</p>
                </div>
                <span>Conocer más</span>
              </div>
            ))}
          </div>
          <div className={styles.bgImage}>
            <Image src={imageBg} alt="bg" />
          </div>
        </article>

        {/* Videos popup */}
        <div
          onClick={() => {
            setShowVideos(false);
          }}
          className={styles.videosContainer}
          style={{ display: showVideos ? "grid" : "none" }}
        >
          <div className={styles.videoWrapper}>
            <div>
              <iframe
                style={{ height: "100%", width: "100%" }}
                src={videos[videoIndex]}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
