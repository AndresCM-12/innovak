"use client";
import styles from "../page.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import darkLogo from "../../../../public/images/logo_dark.png";

import { motion } from "framer-motion";
import { Hind_Vadodara } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hind_Vadodaraf = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FooterBody({ info }) {
  const [lang, setLang] = useState("mxn");

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  return (
    <footer className={styles.footer}>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          fontFamily: Hind_Vadodaraf,
        }}
      >
        <div className={styles.footerUpperContainer}>
          <div className={styles.footerLogo}>
            <Image src={darkLogo} alt="logo" />
            <div className={styles.separator}></div>
            <div className={styles.directions}>
              {info.info.map((item, index) =>
                index === info.info.length - 1 ? (
                  <p
                    key={index}
                    style={{
                      maxWidth: "500px",
                    }}
                    className={styles.direction}
                  >
                    {item}
                  </p>
                ) : (
                  <p key={index}>{item}</p>
                )
              )}
            </div>
          </div>
          <div className={styles.footerLang}>
            <div className={styles.links}>
              {info.links.map((item, index) => (
                <a href={item.link} target="_blank" key={index}>
                  <Image
                    alt="Innovak ícono"
                    src={item.imagen}
                    width={20}
                    height={20}
                  />
                  {item.nombre}
                </a>
              ))}
            </div>
            <div className={styles.socialNetworks}>
              {info.redes.map((item, index) => (
                <a href={item.link} target="_blank" key={index}>
                  <Image
                    alt="Innovak ícono"
                    src={item.imagen}
                    width={16}
                    height={16}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.footerLang}>
            <h6>{info.pais}</h6>
            {info.paises.map((item, index) => (
              <p key={index}>{item.pais}</p>
            ))}
          </div>
        </div>
        <div className={styles.footerBottomContainer}>
          <p>
            {info.avisoDePrivacidad + " "}

            <Link
              style={{
                color: "white",
                textDecoration: "underline",
              }}
              href={`/${lang}/aviso-de-privacidad`}
            >
              {info.aviso}
            </Link>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
