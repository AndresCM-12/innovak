"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import styles from "../page.module.css";
import worldIcon from "../../../../public/world-icon.png";
import worldIconWhite from "../../../../public/world-icon-white.png";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function LocaleSwitch({ info, isMobile = false }) {
  const [isPending, startTransition] = useTransition();
  const [showMenu, setShowMenu] = useState(false);
  const [menuScrolling, setMenuScrolling] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setMenuScrolling(true);
    } else {
      setMenuScrolling(false);
    }
  });

  const router = useRouter();
  const localActive = useLocale();

  const locales = info?.paises;

  const onSelectChange = (value) => {
    const nextLocale = value;
    startTransition(() => {
      const currentPath = window.location.pathname;
      const currentLocale = currentPath.split("/")[1];
      const newPath = currentPath.replace(
        `/${currentLocale}`,
        `/${nextLocale}`
      );
      router.push(newPath);
    });
  };

  return (
    <>
      <label
        className={
          isMobile ? styles.mobileLocaleSwitch : styles.mainLocaleSwitch
        }
      >
        <span
          className={styles.switcher}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            width={20}
            height={20}
            src={worldIcon}
            alt="Ícono del mundo color azul"
          />
          <p
            style={{
              color: isMobile ? "black" : menuScrolling ? "black" : "white",
            }}
          >
            {localActive}
          </p>
          <span
            style={{
              fontSize: "11px",
              color: isMobile ? "black" : menuScrolling ? "black" : "white",
            }}
          >
            ▼
          </span>
        </span>
      </label>

      {showMenu && (
        <>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={styles.floatingMenuWrapper}
          ></div>
          <div className={styles.menuFloating}>
            <div className={styles.header}>
              <Image
                width={169}
                height={56}
                src="http://wp.innovakglobal.com/wp-content/uploads/2024/05/01_INNOVAK_ORIGINAL_1-1.png"
                alt="Logo de Innovak Global"
              />
              <div className={styles.dividerOne}></div>
            </div>
            <div className={styles.body}>
              <h4>SELECCIONA TU PAÍS</h4>
              <h5>SELECT YOUR COUNTRY</h5>
              <Image
                width={30}
                height={30}
                src={worldIconWhite}
                alt="Ícono del mundo color blanco"
              />
              <div
                style={{
                  width: "26px",
                  height: "3px",
                  backgroundColor: "#8DC63F",
                  margin: "12px auto",
                }}
              ></div>
              <div
                style={{
                  marginTop: "12px",
                  display: "grid",
                  placeItems: "center flex-start",
                  rowGap: "4px",
                }}
              >
                {locales?.map((pais, index) => (
                  <p
                    key={index}
                    onClick={() => onSelectChange(pais.code)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={pais.flag}
                      width={26}
                      height={15}
                      alt="Icono del país"
                    />{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "4px",
                      }}
                    ></span>{" "}
                    {pais.pais}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
