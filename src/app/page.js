"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Hind_Vadodara } from "next/font/google";

import imgMainBanner from "../../public/images/main_banner.png";
import whiteLogo from "../../public/images/logo_white.png";
import imgDesarrolloRadicular from "../../public/images/beneficios/desarrollo_radicular.png";
import imgInfiltracion from "../../public/images/beneficios/infiltración.png";
import imgMalformacion from "../../public/images/beneficios/malformaciones.png";
import imgLaboreos from "../../public/images/beneficios/laboreo.png";
import imgGoteo from "../../public/images/specs/goteo.png";
import imgDrench from "../../public/images/specs/drench.png";
import imgRodado from "../../public/images/specs/rodado.png";
import imgReviewManuel from "../../public/images/reviews/manuelGaribay.png";
import imgReviewIvanQuiñonez from "../../public/images/reviews/ivanQuiñonez.png";
import imgReviewJorgeAdrian from "../../public/images/reviews/jorgeAdrian.png";
import imgReviewReynaldoCabrera from "../../public/images/reviews/reynaldoCabrera.png";
import imgWorksFrambuesa from "../../public/images/works/worksFrambruesa.png";
import imgProductGalon from "../../public/images/rootSection/galon.png";
import imgEcca from "../../public/images/rootSection/tecnologiaEcca.png";
import imgRoot from "../../public/images/rootSection/tecnologiaRaiz.png";

import darkLogo from "../../public/images/logo_dark.png";

import infoImportanciaSuelo from "../../public/images/infografias/importanciaSuelos.jpg";
import infoSalinidadSuelos from "../../public/images/infografias/salinidadSuelos.jpg";
import infoSueloCompacto from "../../public/images/infografias/sueloCompacto.jpg";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
const Hind_Vadodaraf = Hind_Vadodara({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <style jsx global>{`
        html {
          font-family: ${Hind_Vadodaraf.style.fontFamily};
        }
      `}</style>
      <HeaderBody />
      <main className={styles.main}>
        <section id="inicio" className={styles.imageBannerContainer}>
          <video autoPlay muted loop className={styles.imageBanner}>
            <source src="/videos/portada.mp4" />
          </video>
        </section>

        <div className={styles.whiteGradient}>
          <section id="raices" className={styles.rootContainer}>
            <RootBody />
          </section>

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
            <NewsCarrousel />
          </section>
        </div>
        <section id="iandd" className={styles.technicWorks}>
          <h1>Trabajos técnicos</h1>
          <WorksCarrousel />
        </section>
        <section id="network" className={styles.formWrapper}>
          <FormBody />
        </section>
      </main>
      <footer className={styles.footer}>
        <FooterBody />
      </footer>
    </div>
  );

  function HeaderBody() {
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
        }}
      >
        <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

        <div className={styles.logoImageContainer}>
          <Image className={styles.logoImage} alt="logo" src={whiteLogo} />
        </div>
        <NavsLink />
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
        <div className={styles.emptyContainer}></div>
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
        </div>
      </div>
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

  function RootBody() {
    return (
      <>
        <div className={styles.rootInfo}>
          <div className={styles.rootText}>
            <h1>Promesol 5x</h1>
            <hr></hr>
            <p>
              Promesol ® 5X disminuye la compactación del suelo gracias a los
              ácidos ECCA Carboxy® de su formulación, aglutinando partículas del
              suelo, formando agregados estables, lo que produce un equilibrio
              de macro y microporos. Como resultado, se obtiene una mejor
              estructura física del suelo que favorece el crecimiento de la
              raíz, y genera las condiciones adecuadas aireación y humedad.
            </p>
          </div>
          <div className={styles.rootTechnology}>
            <h4>Tecnologías</h4>
            <a href="#network">solicita mas informacion</a>
          </div>

          <div className={styles.rootLogo}>
            <Image
              src={imgRoot}
              alt="Logo root"
              style={{
                width: "52%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <Image
              src={imgEcca}
              alt="Logo ecca"
              style={{
                width: "40%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className={styles.rootImage}>
          <Image
            priority={false}
            src={imgProductGalon}
            alt="Imagen de presentacion de producto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </>
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
        <div className={styles.presenceVideo}>
          <video autoPlay loop muted>
            <source src="/videos/PromesolAniversario.mp4" />
          </video>
        </div>
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
            text={"Mejora la infiltración del agua"}
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
    const [showInfographics, setShowInfographics] = useState(false);
    const [infoIndex, setInfoIndex] = useState(0);
    const images = [
      { obj: infoSueloCompacto, name: "sueloCompacto.jpg" },
      { obj: infoSalinidadSuelos, name: "salinidadSuelos.jpg" },
      { obj: infoImportanciaSuelo, name: "importanciaSuelos.jpg" },
    ];
    const handleDownloadClick = (index) => {
      const imageUrl = `/images/infografias/${images[index].name}`;
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = images[index].name;
      link.click();
    };
    const handleLinkClick = (index) => {
      setInfoIndex(index);
      setShowInfographics(true);
    };
    return (
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.mainContainer}
      >
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
            <p
              onClick={() => {
                handleLinkClick(0);
              }}
            >
              ¿Qué es un suelo compactado?
            </p>
            <p>
              Puede ser que la problemática en tu cultivo, sea la compactación
              de los suelos. ¡Conoce mas!
            </p>
          </div>
          <div className={styles.infografiasRow}>
            <p
              onClick={() => {
                handleLinkClick(1);
              }}
            >
              ¿Salinidad en tu suelo?
            </p>
            <p>
              Sabias que puedes corregir problemáticas acondicionando tu suelo,
              aprende como.
            </p>
          </div>
          <div className={styles.infografiasRow}>
            <p
              onClick={() => {
                handleLinkClick(2);
              }}
            >
              ¿Cuál es la importancia del suelo en los cultivos?
            </p>
            <p>
              Aprende sobre la importancia del suelo en el establecimiento y
              desarrollo de tus cultivos
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setShowInfographics(false);
          }}
          className={styles.infographicsContainer}
          style={{ display: showInfographics ? "grid" : "none" }}
        >
          <div className={styles.infoWrapper}>
            <Image alt="infografia" src={images[infoIndex].obj} />
            <p onClick={() => handleDownloadClick(infoIndex)}>Descargar</p>
          </div>
        </div>
      </motion.div>
    );
  }

  function NewsCarrousel() {
    return (
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={styles.arrows}
          id="arrowLeft"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M15 1L1 18L15 35" stroke="#00318D" />
          </svg>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: "#arrowRight", prevEl: "#arrowLeft" }}
        >
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewManuel} alt="review" />
            <p>Tangancícuaro, Michoacán</p>
            <p>
              Conoce el caso de éxito del Ing. Manuel Garibay, que, con más de
              25 años de experiencia en campo, sigue recomendando Promesol 5X.
              El Ing. Garibay nos comparte un poco sobre su experiencia usando
              Promesol 5X®, en diferentes cultivos a través del tiempo y como lo
              ayudó a mejorar la estructura en un suelo arcilloso.
            </p>
            <h6>Ing. Manuel Garibay Carreón</h6>
            <a href="https://www.youtube.com/watch?v=DHsCqyxqwZM&ab_channel=InnovakGlobal">
              Conoce su testimonio
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewIvanQuiñonez} alt="review" />
            <p>Navolato, Sinaloa</p>
            <p>
              El Ing. Iván Quiñonez, nos habla de las dificultades de trabajar
              con suelos compactados y comparte su experiencia utilizando el
              Promesol 5X. Comenta como lo ha ayudado a mantener su cultivo en
              óptimo desarrollo y la importancia de tener un suelo manejable.
            </p>
            <h6>Ing. Iván Quiñónez Medrano</h6>
            <a href="https://youtu.be/ni78a3IFzwY">Conoce su testimonio</a>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewJorgeAdrian} alt="review" />
            <p>Culiacán, Sinaloa</p>
            <p>
              El Ing. Jorge Adrian, nos platica cómo ha afrontado diferentes
              problemáticas y cómo es que ha conocido a innovak global y la
              aplicación promesol que le ayuda en el mejoramiento de la
              estructura del suelo además de las condiciones de aireación
              beneficiando en su cultivo y productividad.
            </p>
            <h6>Ing. Jorge Adrian Ibarra Avila</h6>
            <a href="#">Conoce su testimonio</a>
          </SwiperSlide>
          <SwiperSlide className={styles.reviewContainer}>
            <Image src={imgReviewReynaldoCabrera} alt="review" />
            <p>Michoacán México</p>
            <p>
              Conoce la historia de éxito de promesol en el campo al cual de
              llamaban “las piedras” en michoacán México. El Agricultor Reynaldo
              Cabrera nos platica cómo fue que utilizó Promesol, observó su
              efecto y continuar utilizándolo hasta la fecha.
            </p>
            <h6>Agricultor. Reynaldo Cabrera Oropreza </h6>
            <a href="#">Conoce su testimonio</a>
          </SwiperSlide>
        </Swiper>
        <div
          className={styles.arrows}
          id="arrowRight"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M1 35L15 18L1 1" stroke="#00318D" />
          </svg>
        </div>
      </motion.div>
    );
  }

  function WorksCarrousel() {
    return (
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={styles.arrows}
          id="arrowLeftWorks"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M15 1L1 18L15 35" stroke="#00318D" />
          </svg>
        </div>
        <Swiper
          autoplay={true}
          loop={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: "#arrowRightWorks", prevEl: "#arrowLeftWorks" }}
        >
          <SwiperSlide className={styles.workContainer}>
            <div>
              <h1>
                Acondicionamiento de suelo Cultivo de Frambuesa 2023/Jalisco,
                México.
              </h1>
              <span></span>
              <p>
                Conoce mas sobre un manejo de acondicionamiento de suelo en el
                cultivo de frambuesa con problemáticas de compactación, que
                limitaba el desarrollo adecuado del cultivo. Dentro del trabajo
                realizado podemos observar la importancia de tener un suelo
                acondicionado que permita el desarrollo adecuado del cultivo.
                Además de observar el comportamiento de la compactación durante
                el ciclo del cultivo y como se ven afectadas las diferentes
                variables agronómicas.
              </p>
            </div>
            <Image src={imgWorksFrambuesa} alt="review" />
          </SwiperSlide>
          <SwiperSlide className={styles.workContainer}>
            <div>
              <h1>
                Acondicionamiento de suelo Cultivo de Frambuesa 2023/Jalisco,
                México.
              </h1>
              <span></span>
              <p>
                Conoce mas sobre un manejo de acondicionamiento de suelo en el
                cultivo de frambuesa con problemáticas de compactación, que
                limitaba el desarrollo adecuado del cultivo. Dentro del trabajo
                realizado podemos observar la importancia de tener un suelo
                acondicionado que permita el desarrollo adecuado del cultivo.
                Además de observar el comportamiento de la compactación durante
                el ciclo del cultivo y como se ven afectadas las diferentes
                variables agronómicas.
              </p>
            </div>
            <Image src={imgWorksFrambuesa} alt="review" />
          </SwiperSlide>
        </Swiper>
        <div
          className={styles.arrows}
          id="arrowRightWorks"
          style={{
            padding: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="36"
            viewBox="0 0 16 36"
            fill="none"
          >
            <path d="M1 35L15 18L1 1" stroke="#00318D" />
          </svg>
        </div>
      </motion.div>
    );
  }

  function FormBody() {
    return (
      <>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className={styles.ficha}
        >
          <h1>Obtén la ficha técnica</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path d="M16.0695 5.35645V24.997" stroke="black" />
              <path
                d="M7.14197 16.0693L16.0695 24.9968L24.997 16.0693"
                stroke="black"
              />
              <circle cx="16.0695" cy="16.0695" r="15.5695" stroke="black" />
            </svg>
            <button>Descargar ficha técnica</button>
          </div>
        </motion.div>
        <div className={styles.form}>
          <p>Los campos marcados con * son obligatorios</p>
          <form
            action="https://formsubmit.co/q.chavezandres@gmail.com"
            method="POST"
          >
            <input type="text" name="Nombre" placeholder="Nombre*" required />
            <input
              type="text"
              name="Teléfono de contacto"
              placeholder="Teléfono de contacto*"
              required
            />
            <input
              type="text"
              name="Correo electrónico"
              placeholder="Correo electrónico*"
              required
            />
            <input
              type="text"
              name="Nombre de la agrícola o institución"
              placeholder="Nombre de la agrícola o institución"
            />
            <input type="text" name="Cultivo" placeholder="Cultivo" />
            <input type="text" name="País" placeholder="País*" required />
            <input type="text" name="Estado" placeholder="Estado*" required />
            <input
              type="text"
              name="Localidad"
              placeholder="Localidad*"
              required
            />
            <h5>¿Cómo podemos ayudarte?</h5>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="uno"
                name="Servicio"
                value="Información de distribuidores"
              />
              <label htmlFor="uno">Información de distribuidores</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="dos"
                name="Servicio"
                value="Asesoría técnica"
              />
              <label htmlFor="dos">Asesoría técnica</label>
            </div>
            <div className={styles.checkboxWrapper}>
              <input
                type="radio"
                id="tres"
                name="Servicio"
                value="Información de producto"
              />
              <label htmlFor="tres">Información de producto</label>
            </div>
            <input
              type="text"
              name="Producto/Problemática"
              placeholder="Producto/Problemática*"
              required
            />
            <textarea name="Mensaje" placeholder="Tu mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </>
    );
  }

  function FooterBody() {
    return (
      <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
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
            <h6>Idiomas:</h6>
            <p>Español</p>
            <p>English</p>
            <p>Portugués</p>
            <p>Türkçe</p>
          </div>
        </div>
        <div className={styles.footerBottomContainer}>
          <p>
            © Copyright 2020 - 2023 Diseño hecho por Deadline | Todos los
            derechos Reservados Aviso de Privacidad
          </p>
        </div>
      </motion.div>
    );
  }
}
