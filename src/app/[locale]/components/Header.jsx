"use client";
import styles from "../page.module.css";
import Image from "next/image";

import whiteLogo from "../../../../public/images/logo_white.png";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Hind_Vadodara } from "next/font/google";
import Link from "next/link";
import LocaleSwitch from "./LocaleSwitch";

const Hind_Vadodaraf = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeaderBody() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuScrolling, setMenuScrolling] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setMenuScrolling(true);
    } else {
      setMenuScrolling(false);
    }
  });

  return (
    <motion.header
      initial={{ top: -50, opacity: 0 }}
      whileInView={{ top: 0, opacity: 1 }}
      className={styles.header}
      style={{
        paddingBlock: menuScrolling ? "20px" : "40px",
        backgroundColor: menuScrolling ? "white" : "transparent",
        boxShadow: menuScrolling ? "0px 0px 10px 0px rgba(0,0,0,0.25)" : "",
        fontFamily: Hind_Vadodaraf,
      }}
    >
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      <div className={styles.logoImageContainer}>
        <Link href="/">
          <Image
            className={styles.logoImage}
            alt="logo"
            src={whiteLogo}
            style={{
              filter: menuScrolling
                ? "brightness(0) invert(0)"
                : "brightness(0) invert(1)",
            }}
          />
        </Link>
      </div>
      <NavsLink menuScrolling={menuScrolling} />
      <div
        className={styles.mobileNav}
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="black"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M80 160h352M80 256h352M80 352h352"
          />
        </svg>
      </div>
      <LocaleSwitch />
    </motion.header>
  );
}

function MobileMenu({ mobileMenu, setMobileMenu }) {
  return (
    <div
      className={styles.menuMobile}
      onClick={() => {
        setMobileMenu(!mobileMenu);
      }}
      style={{
        opacity: mobileMenu ? "100%" : "0%",
        display: mobileMenu ? "grid" : "none",
      }}
    >
      <div
        className={styles.nav}
        style={{ right: mobileMenu ? 0 : "-100%" }}
        onClick={() => {}}
      >
        <nav style={{ display: "flex" }}>
          <ul className={styles.navUl}>
            <li>
              <a href="/nuestras-raices/revolucion">NUESTRAS RAÍCES</a>
            </li>
            <li>
              <a href="/productos">PRODUCTOS</a>
            </li>
            <li>
              <a href="/soluciones-por-cultivo">SOLUCIONES POR CULTIVOS</a>
            </li>
            <li>
              <a href="/innovak-news">INNOVAK NEWS</a>
            </li>
            <li>
              <a href="/presencia">PRESENCIA</a>
            </li>
            <li>
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function NavsLink({ menuScrolling }) {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href="/nuestras-raices/revolucion"
          >
            NUESTRAS RAÍCES
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href="/productos"
          >
            PRODUCTOS
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href="/soluciones-por-cultivo"
          >
            SOLUCIONES POR CULTIVOS
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href="/innovak-news"
          >
            INNOVAK NEWS
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href="/presencia"
          >
            PRESENCIA
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href="/contacto"
          >
            CONTACTO
          </a>
        </li>
      </ul>
    </nav>
  );
}
