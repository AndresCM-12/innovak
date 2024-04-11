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

import network from "../../../../public/footer/network.svg";
import rastear from "../../../../public/footer/rastreo.svg";
import facebook from "../../../../public/footer/facebook.svg";
import instagram from "../../../../public/footer/instagram.svg";
import linkedin from "../../../../public/footer/linkedin.svg";
import youtube from "../../../../public/footer/youtube.svg";

const Hind_Vadodaraf = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FooterBody() {
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
              <p>+52 (614) 436 01 38</p>
              <p> info@innovakglobal.com</p>
              <p className={styles.direction}>
                Blvd. Vicente Lombardo Toledano #6615Col. La <br />
                Concordia C.P. 31375Chihuahua, Chihuahua, México.
              </p>
            </div>
          </div>
          <div className={styles.footerLang}>
            <div className={styles.links}>
              <a
                href="https://masorden.com/"
                target="_blank"
              >
                <Image
                  alt="Innovak ícono"
                  src={network}
                  width={20}
                  height={20}
                />{" "}
                +ORDEN
              </a>
              <a
                href="http://201.174.71.70/itisv2/index"
                target="_blank"
              >
                <Image
                  alt="Innovak ícono"
                  src={network}
                  width={20}
                  height={20}
                />{" "}
                PLATAFORMA
              </a>
              <a
                href="https://e10.innovakglobal.us/rastreo/iniciosesion"
                target="_blank"
              >
                <Image
                  alt="Innovak ícono"
                  src={rastear}
                  width={20}
                  height={20}
                />{" "}
                RASTREO DE EMBARQUES
              </a>
            </div>
            <div className={styles.socialNetworks}>
              <a href="https://www.facebook.com/InnovakGlobal" target="_blank">
                <Image
                  alt="Innovak ícono"
                  src={facebook}
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.instagram.com/innovakglobal/"
                target="_blank"
              >
                <Image
                  alt="Innovak ícono"
                  src={instagram}
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/innovak-global-official/"
                target="_blank"
              >
                <Image
                  alt="Innovak ícono"
                  src={linkedin}
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="https://www.youtube.com/@innovakglobal50"
                target="_blank"
              >
                <Image
                  alt="Innovak ícono"
                  src={youtube}
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
          <div className={styles.footerLang}>
            <h6>PAÍS</h6>
            <p>México</p>
            <p>Brasil</p>
            <p>Colombia</p>
            <p>Chile</p>
            <p>Perú</p>
            <p>Estados Unidos</p>
            <p>Turquía</p>
            <p>Internacional</p>
          </div>
        </div>
        <div className={styles.footerBottomContainer}>
          <p>
            © Copyright 2020 - 2023 Diseño hecho por Deadline | Todos los
            derechos Reservados{" "}
            <Link
              style={{
                color: "white",
                textDecoration: "underline",
              }}
              href={`/${lang}/aviso-de-privacidad`}
            >
              Aviso de Privacidad
            </Link>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
