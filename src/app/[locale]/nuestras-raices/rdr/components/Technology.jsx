"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import styles from "./technology.module.css";
import Image from "next/image";

const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function Technologyclient({ info }) {
  const [showVideos, setShowVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleLinkClick = (index) => {
    setVideoIndex(index);
    setShowVideos(true);
  };

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
            <Image
              src={info.header.imagen}
              width={300}
              height={140}
              style={{ objectFit: "contain" }}
              alt="pfenergy icon"
            />
            <h3>{info.header.texto}</h3>
            <div className={styles.featureWrapper}>
              {info.featureInfo.map((feature, index) => (
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

          <div className={styles.bgImageMobile}>
            <img src={info.header.bg} />
          </div>

          <div className={styles.callToActionWrapper}>
            {info.info.map((element, index) => (
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
                <span>{element.cta}</span>
              </div>
            ))}
          </div>

          <div className={styles.bgImage}>
            <img src={info.header.bg} />
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
                src={info.info[videoIndex].link}
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
