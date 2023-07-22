import styles from "./page.module.css";

import imgMainBanner from "../../public/images/main_banner.png";
import whiteLogo from "../../public/images/logo_white.png";
import imgDesarrolloRadicular from "../../public/images/beneficios/desarrollo_radicular.png";
import imgInfiltracion from "../../public/images/beneficios/infiltración.png";
import imgMalformacion from "../../public/images/beneficios/malformaciones.png";
import imgLaboreos from "../../public/images/beneficios/laboreo.png";
import imgGoteo from "../../public/images/specs/goteo.png";
import imgDrench from "../../public/images/specs/drench.png";
import imgRodado from "../../public/images/specs/rodado.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.MainWrapper}>
      <header className={styles.header}>
        <HeaderBody />
      </header>
      <main className={styles.main}>
        <section id="inicio" className={styles.imageBannerContainer}>
          <Image
            className={styles.imageBanner}
            src={imgMainBanner}
            alt="Imagen de presentacion de producto"
          />
        </section>

        <div className={styles.whiteGradient}>
          <section
            id="raices"
            style={{ height: 300, background: "transparent" }}
          ></section>

          <section className={styles.presenceContainer} id="presencia">
            <PresentsBody />
          </section>
        </div>

        <div className={styles.blueGradient}>
          <section className={styles.beneficiosContainer} id="oferta">
            <BenefitsBody />
          </section>
          <section className={styles.specsWrapper} id="productos">
            <SpecsBody />
          </section>
          <section id="news" className={styles.reviewsWrapper}>
            <p>hola</p>
          </section>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );

  function HeaderBody() {
    return (
      <>
        <div className={styles.logoImageContainer}>
          <Image className={styles.logoImage} alt="logo" src={whiteLogo} />
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
    return (
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

  function BenefitsBody() {
    return (
      <>
        <div className={styles.textContainer}>
          <h1>Beneficios</h1>
          <p>
            Promesol 5x® mejora el suelo al disminuir su compactación, lo que
            permite un mejor desarrollo radicular, un aprovechamiento eficiente
            del agua de riego o lluvia, y facilita su laboreo. Además de
            favorecer el desarrollo adecuado de bulbos y tubérculos para una
            mejor calidad en la cosecha.
          </p>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.divider}> </div>
          <Benefit
            image={imgDesarrolloRadicular}
            text={"Facilita el desarrollo redicular"}
          />
          <div className={styles.divider}> </div>
          <Benefit
            image={imgInfiltracion}
            text={"Mejor la infiltración del agua"}
          />
          <div className={styles.divider}> </div>
          <Benefit
            image={imgMalformacion}
            text={"Evita la malformación de bulbos/tuberculos"}
          />
          <div className={styles.divider}> </div>
          <Benefit
            image={imgLaboreos}
            text={"Facilita las labores de cosecha"}
          />
          <div className={styles.divider}> </div>
        </div>
      </>
    );
  }

  function Benefit({ image, text }) {
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.background}>
          <Image src={image} alt="Beneficio" />
        </div>
        <p>{text}</p>
      </div>
    );
  }

  function SpecsBody() {
    return (
      <div className={styles.mainContainer}>
        <h1>Especificaciones de producto</h1>
        <div className={styles.specsImagesRow}>
          <div className={styles.imageRow}>
            <Image src={imgGoteo} alt="especificaciones del producto" />
            <h6>Riego por goteo</h6>
          </div>
          <div className={styles.imageRow}>
            <Image src={imgDrench} alt="especificaciones del producto" />
            <h6>Drench</h6>
          </div>
          <div className={styles.imageRow}>
            <Image src={imgRodado} alt="especificaciones del producto" />
            <h6>Riego Rodado</h6>
          </div>
        </div>
        <p>
          Promesol®5X se puede aplicar en todos los cultivos a través de
          sistemas de riego por goteo, aspersión, drench o por gravedad dirigido
          a la zona radicular. Se recomienda agitar el envase, medir la cantidad
          a aplicar en un recipiente graduado, verter en el tanque y agitar
          antes de inyectar en el segundo tercio del tiempo de riego. También se
          puede aplicar por gravedad, directamente en la toma de agua o diluido
          para una distribución uniforme en el terreno.
        </p>
        <h2>Conoce más</h2>
        <p>
          Descubre mas sobre los beneficios de promesol a través de testimonios
          de nuestros diferentes clientes, infografía y trabajos técnicos
        </p>
        <h5>Infografias</h5>
        <div className={styles.infografiasRowWrapper}>
          <div className={styles.infografiasRow}>
            <p>¿Qué es un suelo compactado?</p>
            <p>
              Puede ser que la problemática en tu cultivo, sea la compactación
              de los suelos. ¡Conoce mas!
            </p>
          </div>
          <div className={styles.infografiasRow}>
            <p>¿Salinidad en tu suelo?</p>
            <p>
              Sabias que puedes corregir problemáticas acondicionando tu suelo,
              aprende como.
            </p>
          </div>
          <div className={styles.infografiasRow}>
            <p>¿Cuál es la importancia del suelo en los cultivos?</p>
            <p>
              Aprende sobre la importancia del suelo en el establecimiento y
              desarrollo de tus cultivos
            </p>
          </div>
        </div>
      </div>
    );
  }
}
