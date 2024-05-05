"use client";
import React, { useEffect, useState } from "react";
import styles from "./solucionesFruto.module.css";
import Image from "next/image";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function SolucionesPorFruto({ info }) {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState();
  var solutions = info.soluciones;

  useEffect(() => {
    const href = window.location.href;
    const length = href.split("/").length;
    const solution = href.split("/")[length - 1];
    setActiveSolutionIndex(solutions.findIndex((item) => item.id == solution));
  }, []);

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
      {/* Header */}
      <article
        className={styles.header}
        style={{
          backgroundImage: `url(${solutions[activeSolutionIndex]?.bg})`,
          zIndex: 0,
        }}
      >
        {activeSolutionIndex != undefined &&
        activeSolutionIndex != null &&
        solutions[activeSolutionIndex]?.bg ? (
          <h1>{solutions[activeSolutionIndex].title}</h1>
        ) : (
          <></>
        )}
      </article>
      {/* Header */}

      {/* Form */}
      {activeSolutionIndex != undefined &&
      activeSolutionIndex != null &&
      solutions[activeSolutionIndex]?.bg ? (
        <SolucionesPorCultivo
          solutions={solutions}
          activeSolutionIndex={activeSolutionIndex}
        />
      ) : (
        <div></div>
      )}

      {/* Form */}
    </section>
  );
}

function SolucionesPorCultivo({ solutions, activeSolutionIndex }) {
  const [frutoSelected, setFrutoSelected] = useState(
    solutions[activeSolutionIndex].items[0]
  );

  return (
    <section className={styles.revistaInnovak}>
      <article className={styles.title}>
        <h5>{solutions[activeSolutionIndex].title}</h5>
        <p>{solutions[activeSolutionIndex].description}</p>
      </article>
      {frutoSelected.popup?.titulo && (
        <div className={styles.popUpWrapper}>
          <div className={styles.popUp}>
            <div className={styles.left}>
              <h3>{frutoSelected.popup?.titulo}</h3>
              <p>{frutoSelected.popup?.descripcion}</p>
              <h6>{frutoSelected.popup?.tecnologias}</h6>
              <div className={styles.tecnologiasWrapper}>
                {frutoSelected.products?.map((product, i) => (
                  <Image
                    key={i}
                    src={product.img}
                    width={140}
                    height={60}
                    objectFit="contain"
                    alt="Imagen de fondo"
                  />
                ))}
              </div>
              {/* <a>{frutoSelected.popup.cta}</a> */}
            </div>
            <div className={styles.right}>
              {frutoSelected.popup.videoOimagen.includes("mp4") ||
              frutoSelected.popup.videoOimagen.includes("webm") ? (
                <video autoPlay loop muted playsInline controls>
                  <source
                    src={frutoSelected.popup.videoOimagen}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <Image
                  width={300}
                  height={300}
                  alt="Imagen de fondo"
                  src={frutoSelected.popup.videoOimagen}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <div className={styles.revistasWrapper}>
        {solutions[activeSolutionIndex].items.map((item, i) => (
          <div
            key={i}
            className={styles.itemsWrapper}
            onClick={() => {
              setFrutoSelected(item);
            }}
          >
            <div className={styles.floating}>
              <h6>{item.title}</h6>
            </div>
            <Image
              className={styles.itemBg}
              style={{
                filter: "brightness(40%)",
                zIndex: -1,
                borderRadius: "20px",
              }}
              src={item.bg}
              alt="Imagen de fondo"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
