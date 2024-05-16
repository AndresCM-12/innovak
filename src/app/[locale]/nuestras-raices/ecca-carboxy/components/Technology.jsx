"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import styles from "./technology.module.css";
import Image from "next/image";

const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Technologyclient({ info }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
          <Image
            src={info.header.imagen}
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
            alt="bg"
          />
          <h3>{info.header.textoUno}</h3>
          <h3>{info.header.textoDos}</h3>
          <h3>{info.header.textoTres}</h3>
        </div>

        <div className={styles.bgImageMobile}>
          <div className={styles.floating}>
            <img src={info.featureInfo[selectedIndex].image} alt="bg" />
          </div>
          <img src={info.header.bg} alt="bg" />
        </div>

        <div className={styles.featureInfo}>
          <div className={styles.features}>
            <div className={styles.featuresColumn}>
              {info.featureInfo.map((feature, index) => (
                <FeatureLeft
                  key={index}
                  feature={feature}
                  index={index}
                  selectedIndex={selectedIndex}
                  onSelectedIndex={setSelectedIndex}
                  info={info.header}
                />
              ))}
            </div>
            <div className={styles.featuresColumn}>
              {info.featureInfo.map((feature, index) => (
                <FeatureRight
                  key={index}
                  feature={feature}
                  index={index}
                  selectedIndex={selectedIndex}
                  onSelectedIndex={setSelectedIndex}
                  info={info.header}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bgImage}>
          <div className={styles.floating}>
            <img src={info.featureInfo[selectedIndex].image} alt="bg" />
          </div>
          <img src={info.header.bg} alt="bg" />
        </div>
      </article>
      {/* Dynamic Header */}
    </section>
  );

  function FeatureLeft({
    feature,
    index,
    selectedIndex,
    onSelectedIndex,
    info,
  }) {
    return index < 3 ? (
      <div onClick={() => onSelectedIndex(index)}>
        <div key={index} className={styles.feature}>
          <h4>{feature.title}</h4>
          <p style={{ display: selectedIndex == index ? "block" : "none" }}>
            {feature.text}
          </p>
        </div>
        <span>{selectedIndex == index ? info?.verMenos : info?.verMas}</span>
      </div>
    ) : null;
  }
  function FeatureRight({
    feature,
    index,
    selectedIndex,
    onSelectedIndex,
    info,
  }) {
    return index > 2 ? (
      <div onClick={() => onSelectedIndex(index)}>
        <div key={index} className={styles.feature}>
          <h4>{feature.title}</h4>
          <p style={{ display: selectedIndex == index ? "block" : "none" }}>
            {feature.text}
          </p>
        </div>
        <span>{selectedIndex == index ? info?.verMenos : info?.verMas}</span>
      </div>
    ) : null;
  }
}
