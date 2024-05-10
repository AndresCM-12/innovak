"use client";
import React, { useEffect, useState } from "react";
import styles from "./inovakNews.module.css";
import Image from "next/image";

import headerImg from "../../../../../../public/innovak-news/header.svg";

import localFont from "next/font/local";
const futura = localFont({
  src: "../../../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function ContactPageClient({ info }) {
  const [slug, setSlug] = useState();
  useEffect(() => {
    const slug = window.location.pathname.split("/")[3];
    setSlug(slug);
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
      {/* Dynamic Header */}
      <article
        className={styles.header}
        style={{
          backgroundImage: `url(${info.info.imagenFondo})`,
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

      {/* Form */}
      {slug && (
        <iframe
          src={"https://wp.innovakglobal.com/" + slug}
          style={{
            width: "100%",
            height: "1000px",
            border: "none",
            overflow: "hidden",
          }}
        ></iframe>
      )}
      {/* Form */}
    </section>
  );
}
