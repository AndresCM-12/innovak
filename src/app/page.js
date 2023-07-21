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

        <section
          id="raices"
          style={{ height: 300, background: "#000" }}
        ></section>

        <section className={styles.presenceContainer} id="presencia">
          <PresentsBody />
        </section>
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

  function PresentsBody() {
    return(
      <>
        <div>
          <h1>¿Como funciona?</h1>
          <p>
            La formulación de ácidos ECCA Carboxy® de este producto es capaz de
            aglutinar partículas del suelo, lo que disminuye la compactación y
            genera espacios para el agua y aire, permitiendo una buena
            estructura física del suelo. Estos cambios benefician el crecimiento
            de la raíz al generar condiciones de humedad y aireación, gracias al
            balance de macro y microporos producido por los agregados estables
            del suelo.
          </p>
        </div>
        <div className={styles.presenceVideo}></div>
      </>
    );
  }
}
