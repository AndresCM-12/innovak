"use client";
import React, { useEffect, useState } from "react";
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
      title: "Acondicionamiento de suelos (Promesol Ca y Promesol 5x)",
      text: "Promesol Ca y Promesol®5x, tecnologías con una larga trascendencia para el mejoramiento y la conservación de los suelos. Estas tecnologías mejoran la estructura del suelo, el balance de macro y microporos, reduciendo la compactación, mejorando el aprovechamiento y aireación. Asimismo, en condiciones de salinidad Promesol Ca proporciona una fuente de calcio esencial para para la integridad de las paredes celulares de la raíz y el combate a estrés salino.  Ambas formulaciones promueven una agricultura sostenible, facilitando el laboreo, mejorando la infiltración y aprovechamiento del agua y el desarrollo de los cultivos.",
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
    },
    {
      title: "Nutrientes",
      text: "Los nutrientes de alta asimilación que incorporan la tecnología ECCA Carboxy® del tipo alifático, son ideales para prevenir y corregir deficiencias en los cultivos. Estas formulaciones potencializan el efecto de micronutrientes, manteniendo los cultivos en estado nutricional optimo y con un buen desarrollo. Favorece el efecto del calcio en la sobre el cultivo y los frutos. La fuente de K mejora el llenado, color y maduración de los frutos. Sus formulaciones independientes Proquelates de Fe, Mg, Zn y Mn ayudan a la corrección eficiente de las deficiencias de estos nutrientes en el cultivo, mejorando el desarrollo del cultivo y su productividad.",
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
    },
    {
      title: "Desarrollo de radicular",
      text: "RadiGrow® es un bioestimulante para el desarrollo radicular, diseñado para promover la generación de nuevas raíces y raíces secundarias, mejorando la exploración del sistema radicular, facilitando el establecimiento de los cultivos. Con un equilibrio hormonal óptimo y acompañamiento de los ácidos ECCA Carboxy® que ayudan a la biosíntesis de auxinas, RadiGrow® garantiza una acción prolongada en el desarrollo de las raíces. Su efecto mejora significativamente la absorción de agua y nutrientes, obteniendo un mejor desarrollo del cultivo.",
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
    },
    {
      title: "Nutrientes por fertiirrigación",
      text: "La línea Carboxy diseñada para uso por fertiirrigación asegura una nutrición optima y prevención de desórdenes por deficiencias de micronutrientes, Zn y Fe. Sus formulaciones pueden ser utilizadas en cualquier tipo de cultivo, y son efectivas incluso bajo extremas condiciones de pH. La tecnología ECCA Carboxy® facilita la absorción y translocación de nutrientes obteniendo una rápida y efectiva respuesta en el cultivo.",
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
    },
    {
      title: "Prevención del estrés",
      text: "ATP UP® previene el efecto negativo del estrés en cultivos afectados por factores como calor, sequía, toxicidad, baja luminosidad y bajas temperaturas. Esto gracias a su innovadora fórmula con ácidos ECCA Carboxy®. La aplicación de ATP UP® induce la síntesis de polioles y, junto con el fósforo, reactivan el metabolismo para una rápida mejora. Sus beneficios incluyen la reducción de pérdidas de rendimiento, prevención del estrés, restauración del vigor tras trasplante o aletargamiento, corrección de desórdenes metabólicos, y disminución de la fitotoxicidad por agroquímicos.",
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
    },
    {
      title: "Traslocación",
      text: "Carboxy L® es un bioestimulante que mejora la translocación de fotosintatos a los sitios de demanda, gracias a los ácidos ECCA Carboxy®. Su efecto optimizando el almacenamiento de reservas en sitios como raíces y madera. Su aplicación mejora el llenado de frutos y mejora la calidad de turiones, bulbos y tubérculos. En cultivos como la caña de azúcar actúa como madurante no fitotóxico para caña de azúcar, asegurando un desarrollo óptimo sin residuos nocivos.",
      icon: "https://plainbackground.com/plain1024/a4a6a3.png",
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
        <div className={styles.textWrapper}>
          <Image src={imageIcon} width={300} alt="pfenergy icon" />
          <h3>
            Con certificación orgánica, proveniente de nuestro proceso patentado
            que da origen a los Ácidos Carboxy, únicos con efecto biológico
            comprobado.
          </h3>
          <h3>
            La tecnología ECCA Carboxy es el conjunto de conocimientos y
            destrezas que Innovak Global ha desarrollado para obtención de
            extractos a partir de cascarillas agrícolas; la identificación,
            aislamiento, purificación y concentración de compuestos o grupos de
            compuestos con efectos benéficos específicos en los cultivos, ya sea
            solos o en combinación con nutrientes, reguladores de crecimiento,
            microorganismos benéficos o metabolitos provenientes de estos.
          </h3>
          <h3>
            La tecnología también involucra el conocimiento de los mecanismos de
            acción de los principios activos contenidos en las formulaciones,
            destacándose el efecto bioestimulante iniciado por la estimulación
            del ciclo oxidativo de las pentosas fosfato que conduce a la
            biosíntesis, dentro de la planta, de ciertos compuestos clave que
            influyen en los procesos de asimilación de nutrientes, tolerancia al
            estrés abiótico o fortalecimiento de los tejidos vegetales.
          </h3>
        </div>

        <div className={styles.bgImageMobile}>
          <Image src={imageBg} alt="bg" />
        </div>

        <div className={styles.featureInfo}>
          <div className={styles.features}>
            <div className={styles.featuresColumn}>
              {featureInfo.map((feature, index) => (
                <FeatureLeft feature={feature} index={index} />
              ))}
            </div>
            <div className={styles.featuresColumn}>
              {featureInfo.map((feature, index) => (
                <FeatureRight feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bgImage}>
          <Image src={imageBg} alt="bg" />
        </div>
      </article>
      {/* Dynamic Header */}
    </section>
  );

  function FeatureLeft({ feature, index }) {
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
      if (index === 0) {
        setShowMore(true);
      }
    }, []);

    return index < 3 ? (
      <div onClick={() => setShowMore(!showMore)}>
        <div key={index} className={styles.feature}>
          <h4>{feature.title}</h4>
          <p style={{ display: showMore ? "block" : "none" }}>{feature.text}</p>
        </div>
        <span>{showMore ? "Ver menos" : "Ver más"}</span>
      </div>
    ) : null;
  }
  function FeatureRight({ feature, index }) {
    const [showMore, setShowMore] = useState(false);

    return index > 2 ? (
      <div onClick={() => setShowMore(!showMore)}>
        <div key={index} className={styles.feature}>
          <h4>{feature.title}</h4>
          <p style={{ display: showMore ? "block" : "none" }}>{feature.text}</p>
        </div>
        <span>{showMore ? "Ver menos" : "Ver más"}</span>
      </div>
    ) : null;
  }
}
