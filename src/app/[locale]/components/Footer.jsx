"use client";
import styles from "../page.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import darkLogo from "../../../../public/images/logo_dark.png";

import { motion } from "framer-motion";
import { Hind_Vadodara } from "next/font/google";

const Hind_Vadodaraf = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FooterBody() {
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
            derechos Reservados Aviso de Privacidad
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
