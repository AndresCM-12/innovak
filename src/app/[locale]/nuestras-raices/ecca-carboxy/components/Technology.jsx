"use client";
import React from "react";
import localFont from "next/font/local";
import imageBg from "../../../../../../public/nuestrasraices/ecca-carboxyBg.png";
import imageIcon from "../../../../../../public/nuestrasraices/ecca-carboxyIcon.png";
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
          Con certificación orgánica, proveniente de nuestro proceso patentado
          que da origen a los Ácidos Carboxy, únicos con efecto biológico
          comprobado.
        </h3>
        <h3>
          La tecnología ECCA Carboxy es el conjunto de conocimientos y destrezas
          que Innovak Global ha desarrollado para obtención de extractos a
          partir de cascarillas agrícolas; la identificación, aislamiento,
          purificación y concentración de compuestos o grupos de compuestos con
          efectos benéficos específicos en los cultivos, ya sea solos o en
          combinación con nutrientes, reguladores de crecimiento,
          microorganismos benéficos o metabolitos provenientes de estos.
        </h3>
        <h3>
          La tecnología también involucra el conocimiento de los mecanismos de
          acción de los principios activos contenidos en las formulaciones,
          destacándose el efecto bioestimulante iniciado por la estimulación del
          ciclo oxidativo de las pentosas fosfato que conduce a la biosíntesis,
          dentro de la planta, de ciertos compuestos clave que influyen en los
          procesos de asimilación de nutrientes, tolerancia al estrés abiótico o
          fortalecimiento de los tejidos vegetales.
        </h3>

        <div className={styles.bgImage}>
          <Image src={imageBg} alt="bg" />
        </div>
      </article>
      {/* Dynamic Header */}
    </section>
  );
}
