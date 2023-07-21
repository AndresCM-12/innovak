import styles from "./page.module.css";

import imgMainBanner from "../../public/images/main_banner.png";
import whiteLogo from "../../public/images/logo_white.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.MainWrapper}>
      <header className={styles.header}>
        <HeaderBody />
      </header>
      <main className={styles.main}>
        <section id="inicio" className={styles.imageBannerContainer}>
          <Image className={styles.imageBanner} src={imgMainBanner} />
        </section>

        <section id="raices" style={{height: 300, background: '#000'}}></section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );

  function HeaderBody() {
    return (
      <>
        <div className={styles.logoImageContainer}>
          <Image className={styles.logoImage} src={whiteLogo} />
        </div>
        <NavsLink />
        <div className={styles.emptyContainer}></div>
      </>
    );
  }

  function NavsLink() {
    return (
      <nav>
        <ul className={styles.navUl}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#raices">Nuestras Raíces</a>
          </li>
          <li>
            <a href="#presencia">Presencia</a>
          </li>
          <li>
            <a href="#oferta">Oferta de valor</a>
          </li>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="#news">Innovak news</a>
          </li>
          <li>
            <a href="#iandd">I&D</a>
          </li>
          <li>
            <a href="#network">Network</a>
          </li>
        </ul>
      </nav>
    );
  }
}
