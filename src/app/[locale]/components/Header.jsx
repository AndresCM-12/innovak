"use client";
import styles from "../page.module.css";
import Image from "next/image";

import whiteLogo from "../../../../public/images/logo_white.png";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import LocaleSwitch from "./LocaleSwitch";

import localFont from "next/font/local";

const futura = localFont({
  src: "../../../../public/fonts/futura.ttf",
  variable: "--font-futura",
});

export default function HeaderBody({ info }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menuScrolling, setMenuScrolling] = useState(false);
  const { scrollY } = useScroll();
  const [lang, setLang] = useState("mx");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setMenuScrolling(true);
    } else {
      setMenuScrolling(false);
    }
  });

  useEffect(() => {
    const locale = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("NEXT_LOCALE="))
      .split("=")[1];
    setLang(locale);
  }, []);

  return (
    info?.nuestrasRaices && (
      <motion.header
        initial={{ top: -50, opacity: 0 }}
        whileInView={{ top: 0, opacity: 1 }}
        className={styles.header}
        style={{
          paddingBlock: menuScrolling ? "20px" : "40px",
          backgroundColor: menuScrolling ? "white" : "transparent",
          boxShadow: menuScrolling ? "0px 0px 10px 0px rgba(0,0,0,0.25)" : "",
          fontFamily: futura.style.fontFamily,
        }}
      >
        <MobileMenu
          info={info}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          currentLang={lang}
          menuScrolling={menuScrolling}
        />

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
        <NavsLink
          info={info}
          menuScrolling={menuScrolling}
          currentLang={lang}
          isScrolling={menuScrolling}
        />
        <div
          className={styles.mobileNav}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <svg
            style={{
              filter: menuScrolling
                ? "brightness(0) invert(0)"
                : "brightness(0) invert(1)",
            }}
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
        <LocaleSwitch info={info} isMobile={false} />
      </motion.header>
    )
  );
}

function MobileMenu({
  info,
  mobileMenu,
  setMobileMenu,
  currentLang,
  menuScrolling,
}) {
  return (
    <>
      <div
        className={styles.menuMobile}
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
        style={{
          opacity: mobileMenu ? "100%" : "0%",
          display: mobileMenu ? "grid" : "none",
          position: "fixed",
          zIndex: 1,
        }}
      ></div>
      <div
        className={styles.nav}
        style={{
          right: mobileMenu ? 0 : "-100%",
          position: "fixed",
          zIndex: 2,
        }}
        onClick={() => {}}
      >
        <nav style={{ display: "flex" }}>
          <ul className={styles.navUl}>
            <li>
              <a href={`/${currentLang}/nuestras-raices`}>
                {info.nuestrasRaices}
              </a>
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                {info.nuestrasRaicesOpciones?.map((opcion, index) => (
                  <a key={index} href={`/${currentLang}${opcion.link}`}>
                    - {opcion.opcion}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href={`/${currentLang}/productos`}>{info.productos}</a>
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                {info.productosOpciones?.map((opcion, index) => (
                  <a key={index} href={`/${currentLang}${opcion.link}`}>
                    - {opcion.opcion}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href={`/${currentLang}/soluciones-por-cultivo`}>
                {info.solucionesPorCultivo}
              </a>
            </li>
            <li>
              <a href={`/${currentLang}/innovak-news`}>{info.news}</a>
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                {info.newsOpciones?.map((opcion, index) => (
                  <a key={index} href={`/${currentLang}${opcion.link}`}>
                    - {opcion.opcion}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a href={`/${currentLang}/presencia`}>{info.presencia}</a>
            </li>
            <li>
              <a href={`/${currentLang}/contacto`}>{info.contacto}</a>
              <div
                style={{
                  marginTop: "12px",
                }}
              >
                {info.contactoOpciones?.map((opcion, index) => (
                  <a key={index} href={`/${currentLang}${opcion.link}`}>
                    - {opcion.opcion}
                  </a>
                ))}
              </div>
            </li>
            <LocaleSwitch
              isMobile={true}
              info={info}
              isScrolling={menuScrolling}
              onClick={() => {
                //stop the propagation of the event
                event.stopPropagation();
              }}
            />
          </ul>
        </nav>
      </div>
    </>
  );
}

function NavsLink({ info, menuScrolling, currentLang }) {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href={`/${currentLang}/nuestras-raices`}
          >
            {info.nuestrasRaices}
          </a>
          <div className={styles.menuWrapper}>
            <div>
              {info.nuestrasRaicesOpciones?.map((opcion, index) => (
                <p key={index}>
                  <a href={`/${currentLang}${opcion.link}`}>{opcion.opcion}</a>
                  {index != info.nuestrasRaicesOpciones.length - 1 && (
                    <span></span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href={`/${currentLang}/productos`}
          >
            {info.productos}
          </a>
          <div className={styles.menuWrapper}>
            <div>
              {info.productosOpciones?.map((opcion, index) => (
                <p key={index}>
                  <a href={`/${currentLang}${opcion.link}`}>{opcion.opcion}</a>
                  {index != info.productosOpciones.length - 1 && <span></span>}
                </p>
              ))}
            </div>
          </div>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href={`/${currentLang}/soluciones-por-cultivo`}
          >
            {info.solucionesPorCultivo}
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href={`/${currentLang}/innovak-news`}
          >
            {info.news}
          </a>
          <div className={styles.menuWrapper}>
            <div>
              {info.newsOpciones?.map((opcion, index) => (
                <p key={index}>
                  <a href={`/${currentLang}${opcion.link}`}>{opcion.opcion}</a>
                  {index != info.newsOpciones.length - 1 && <span></span>}
                </p>
              ))}
            </div>
          </div>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href={`/${currentLang}/presencia`}
          >
            {info.presencia}
          </a>
        </li>
        <li>
          <a
            style={{
              color: !menuScrolling ? "#FFFFFF" : "#000000",
            }}
            href={`/${currentLang}/contacto`}
          >
            {info.contacto}
          </a>
          <div className={styles.menuWrapper}>
            <div>
              {info.contactoOpciones?.map((opcion, index) => (
                <p key={index}>
                  <a href={`/${currentLang}${opcion.link}`}>{opcion.opcion}</a>
                  {index != info.contactoOpciones.length - 1 && <span></span>}
                </p>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
