"use client";
import React from "react";
import localFont from "next/font/local";
import imageBg from "../../../../../../public/nuestrasraices/rdrBg.png";
import imageIcon from "../../../../../../public/nuestrasraices/rdrIcon.png";
import styles from "./technology.module.css";
import Image from "next/image";

const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Technologyclient({ texts }) {
  const featureInfo = [
    {
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
      text: "Investiga, GENERA CONOCIMIENTO sobre los nuevos retos de la agricultura.",
    },
    {
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
      text: "Diagnostica CON TECNOLOGIA DE VANGUARDIA la condición de la raíz en su cultivo.",
    },
    {
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
      text: "Implementa herramientas INNOVADORAS para prologar la vida de la raíz",
    },
    {
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
      text: "Modifica prácticas de manejo para maximizar productividad.",
    },
    {
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
      text: "Evalúa el desempeño de la raíz y el cultivo.",
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
        <Image src={imageIcon} width={300} alt="pfenergy icon" />
        <h3>
          RDR (Regulación de la dinámica Radicular) es una tecnología enfocada a
          la raíz y su medio ambiente para maximizar la productividad de los
          cultivos de manera sustentable.
        </h3>
        <div className={styles.featureWrapper}>
          {featureInfo.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <Image src={feature.icon} width={112} height={112} alt="icon" />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.bgImage}>
          <Image src={imageBg} alt="bg" />
        </div>
      </article>
      {/* Dynamic Header */}
    </section>
  );
}
